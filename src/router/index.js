import { Home, Dashboard, Store, Hooks } from '../view/home/index';
import { Activity, Running } from '../view/activity/index';
import { UserCenter, UserSetting } from '../view/user-center';

export default {
  home: {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/dashboard',
        component: Dashboard
      },
      {
        path: '/home/store',
        component: Store
      },
      {
        path: '/home/hooks',
        component: Hooks
      }
    ]
  },
  activity: {
    path: '/activity',
    component: Activity,
    children: [
      {
        path: '/activity/running',
        component: Running
      }
    ]
  },
  userCenter: {
    path: '/userCenter',
    component: UserCenter,
    children: [
      {
        path: '/userCenter/setting',
        component: UserSetting
      }
    ]
  }
};
