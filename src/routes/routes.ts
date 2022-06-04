import LocationDetail from 'pages/locationDetail/LocationDetail';
import NotFound from 'pages/notFound/NotFound';
import Churches from 'pages/churches/Churches';

import RouteItem from './type';
import { ROUTES_ENUM } from './routes-enum';

export const routes: Array<RouteItem> = [
  // {
  //   key: 'router-home',
  //   title: 'Home',
  //   tooltip: 'Home',
  //   path: ROUTES_ENUM.HOME,
  //   enabled: true,
  //   component: Home
  // },
  {
    key: 'router-churches',
    title: 'Churches',
    tooltip: 'Churches',
    path: ROUTES_ENUM.HOME,
    enabled: true,
    component: Churches
  },
  {
    key: 'router-location-detail',
    title: 'Location',
    tooltip: 'Location',
    path: ROUTES_ENUM.LOCATION_DETAIL,
    enabled: true,
    component: LocationDetail
  },
  {
    key: 'router-user-detail',
    title: 'User',
    tooltip: 'User',
    path: ROUTES_ENUM.USER_DETAIL,
    enabled: true,
    component: LocationDetail
  },
  {
    key: 'router-page-not-found',
    title: 'Page not found',
    tooltip: 'Page not found',
    path: '*',
    enabled: true,
    component: NotFound
  }
];
