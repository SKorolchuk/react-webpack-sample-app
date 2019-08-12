import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import i18n from 'i18next';
import '../../styles/main.scss';
import { Navbar } from './controls/Navbar';
import { connect } from 'react-redux';
import { logoff } from '../actions/session.actions';
import routes from './routes';
import PageRouter from './controls/PageRouter';

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
      ...routes
        .filter((r, i) => i > 0)
        .map((route, i) => ({
          to: `/${route.path}`,
          label: route.name(),
        })),
    ];
    return (
      <React.Fragment>
        <Navbar
          applicationName={i18n.t('React Sample App')}
          links={links}
          email={email}
        />
        <BrowserRouter>
          <PageRouter routes={routes} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogout: () => dispatch(logoff()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
