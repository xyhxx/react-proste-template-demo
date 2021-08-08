import {App} from '@pages/index';
import {RouteConfig} from 'react-router-config';
import { AppPage } from './name';

export default [
  {
    path: AppPage,
    exact: true,
    component: App,
  },
] as RouteConfig[];