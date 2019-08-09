import React, { Component } from 'react';
import i18n from 'i18next';

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-light">
          <h1>React App</h1>
          <p className="lead">
            React, Redux, Webpack, i18next, SCSS, Bootstrap, React
            Router
          </p>
        </div>
        <div className="container">
          <div className="card-deck mb-4 text-center">
            <div className="card mb-4 shadow-lg">
              <div className="card-header bg-primary text-light font-weight-bold">
                React
              </div>
              <div className="card-body">
                <p>{i18n.t('View Library')}</p>
                <a
                  href="https://reactjs.org/"
                  className="btn btn-primary"
                >
                  {i18n.t('More')}
                </a>
              </div>
            </div>
            <div className="card mb-4 shadow-lg">
              <div className="card-header bg-primary text-light font-weight-bold">
                Redux
              </div>
              <div className="card-body">
                <p>{i18n.t('State Management')}</p>
                <a
                  href="https://redux.js.org/"
                  className="btn btn-primary"
                >
                  {i18n.t('More')}
                </a>
              </div>
            </div>
            <div className="card mb-4 shadow-lg">
              <div className="card-header bg-primary text-light font-weight-bold">
                Bootstrap
              </div>
              <div className="card-body">
                <p>{i18n.t('CSS Framework')}</p>
                <a
                  href="https://getbootstrap.com"
                  className="btn btn-primary"
                >
                  {i18n.t('More')}
                </a>
              </div>
            </div>
            <div className="card mb-4 shadow-lg">
              <div className="card-header bg-primary text-light font-weight-bold">
                Webpack
              </div>
              <div className="card-body">
                <p>{i18n.t('Build, Bundle and Debug')}</p>
                <a
                  href="https://webpack.js.org/"
                  className="btn btn-primary"
                >
                  {i18n.t('More')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
