import { ReactElement } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Header } from 'components';
import { routes } from './routes';
import RouteItem from './type';

const Routes = (): ReactElement => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route: RouteItem) => {
          return (
            <Route
              key={`${route.key}`}
              path={`${route.path}`}
              component={route.component}
              exact
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
