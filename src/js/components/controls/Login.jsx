import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialMedia from '../../../Icons/SocialMedia.js';
import i18n from 'i18next';
import Input from './Input';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSignIn() {
    this.props.onSignIn({
      ...this.state,
    });
  }

  render() {
    const { pictureWidth, pictureHeight } = this.props;
    const { email, password } = this.state;

    return (
      <form className="align-items-center d-flex flex-column">
        <div className="mb-4">
          <SocialMedia width={pictureWidth} height={pictureHeight} />
        </div>
        <h1 className="h3 mb-3 font-weight-normal">
          {i18n.t('Sign In')}
        </h1>
        <Input
          label={i18n.t('Login')}
          text={i18n.t('Email')}
          type="email"
          id="login-email"
          value={email}
          handleChange={this.onEmailChange}
          placeholder={i18n.t('Email address')}
        />
        <Input
          label={i18n.t('Password')}
          text={i18n.t('Password')}
          type="password"
          id="login-password"
          value={password}
          handleChange={this.onPasswordChange}
          placeholder={i18n.t('Password')}
        />
        <button
          type="button"
          className="btn btn-lg btn-primary btn-block"
          onClick={this.onSignIn}
        >
          {i18n.t('Sign In')}
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  pictureWidth: PropTypes.number.isRequired,
  pictureHeight: PropTypes.number.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
