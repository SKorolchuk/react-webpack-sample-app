import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

function PageRouter({ match, routes }) {
  return (
    <React.Fragment>
      <Switch>
        {routes.map((route, i) => (
          <Route
            exact={true}
            key={i}
            path={`/${route.path}`}
            component={route.component}
          />
        ))}
        <Redirect from="*" to="/home" />
      </Switch>
    </React.Fragment>
  );
}

PageRouter.propTypes = {
  match: PropTypes.object,
  routes: PropTypes.array,
};

export default withRouter(PageRouter);
