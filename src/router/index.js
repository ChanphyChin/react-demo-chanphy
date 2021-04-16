import { Home, Dashboard, Store, Hooks } from '../view/home/index';
import { Activity, Running } from '../view/activity/index';
import { UserCenter, UserSetting } from '../view/user-center';

export default [
  {
    path: '/home',
    component: Home,
    name: 'home',
    children: [
      {
        path: '/home/dashboard',
        component: Dashboard,
        name: 'dashboard',
        auth: true
      },
      {
        path: '/home/store',
        component: Store,
        name: 'store',
        auth: true
      },
      {
        path: '/home/hooks',
        component: Hooks,
        name: 'hooks',
        auth: true
      }
    ],
    auth: true
  },
  {
    path: '/activity',
    component: Activity,
    name: 'activity',
    children: [
      {
        path: '/activity/running',
        component: Running,
        name: 'running',
        auth: true
      }
    ],
    auth: true
  },
  {
    path: '/userCenter',
    component: UserCenter,
    name: 'userCenter',
    children: [
      {
        path: '/userCenter/setting',
        component: UserSetting,
        name: 'setting',
        auth: true
      }
    ],
    auth: true
  }
];
