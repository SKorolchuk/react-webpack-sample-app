import FormPage from './container/FormPage.jsx';
import React, { Component } from 'react';
import "../../styles/main.scss";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (<FormPage />);
  }
}