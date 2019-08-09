import React, { Component } from 'react';

class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container text-center pt-5">
        <main role="main" className="inner cover text-light">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and
            beautiful home pages. Download, edit the text, and add
            your own fullscreen background photo to make it your own.
          </p>
          <p className="lead pt-2">
            <a href="#" className="btn btn-lg btn-primary">
              Learn more
            </a>
          </p>
        </main>
      </div>
    );
  }
}

export default FormPage;
