import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import React, { Component } from 'react';
import i18n from 'i18next';
import '../../styles/main.scss';
import { Navbar } from './controls/Navbar';
import { connect } from 'react-redux';
import { logoff } from '../actions/session.actions';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { email, onLogout } = this.props;

    const links = [
      !email
        ? {
            to: '/login',
            label: i18n.t('Sign In'),
          }
        : {
            to: '#',
            label: i18n.t('Sign Off'),
            action: onLogout,
          },
      {
        to: '/',
        label: i18n.t('Home'),
      },
      {
        to: '/about',
        label: i18n.t('About'),
      },
    ];
    return (
      <React.Fragment>
        <Navbar
          applicationName={i18n.t('React Sample App')}
          links={links}
          email={email}
        />
        <BrowserRouter>
          <Switch>
            <Route key="home" exact path="/" component={HomePage} />
            <Route
              key="login"
              exact
              path="/login"
              component={LoginPage}
            />
            <Route
              key="about"
              exact
              path="/about"
              component={AboutPage}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogout: () => dispatch(logoff()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
