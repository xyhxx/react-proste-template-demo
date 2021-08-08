/*
 * @Author: xyh
 * @Date: 2021-08-07 19:37:58
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-07 21:33:50
 * @FilePath: \proste-demo\src\routes\index.ts
 * @Description: 导出路由信息
 */
import {App, Profile} from '@pages/index';
import {RouteConfig} from 'react-router-config';
import { AppPage, ProfilePage } from './name';
import { NotFount } from '@components/NotFound';

export default [
  {
    path: AppPage,
    exact: true,
    component: App,
  },
  {
    path: ProfilePage,
    component: Profile,
  },
  {
    path: '*',
    exact: true,
    component: NotFount,
  },
] as RouteConfig[];