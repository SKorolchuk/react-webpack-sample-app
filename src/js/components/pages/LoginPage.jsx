import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions/session.actions';
import { connect } from 'react-redux';
import { Login } from '../controls/Login';
import i18n from 'i18next';

export class LoginPage extends Component {
  render() {
    const { onLogin } = this.props;
    return (
      <React.Fragment>
        <div className="container-fluid d-flex justify-content-center p-3 rounded-top">
          <div className="col-3 shadow-lg p-2 bg-light">
            <Login
              pictureWidth={150}
              pictureHeight={75}
              onSignIn={onLogin}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogin: ({ email, password }) => {
    dispatch(login({ email: email, password: password }));
    ownProps.history.push('/');
  },
});

export default withRouter(
  connect(
    (state, ownProps) => ({ ...ownProps, ...state.session }),
    mapDispatchToProps,
  )(LoginPage),
);
