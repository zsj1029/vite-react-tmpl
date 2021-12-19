import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import App from '@/pages/app';
import Layout from '@/layouts';
import loadable from '@loadable/component';

const route1 = {
  path: '/env',
  name: '环境管理',
  icon: <AntDesignOutlined />,
  // component: BlankLayout,
  routes: [
    {
      path: '/env/netMgr',
      name: '原型管理',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
    {
      path: '/env/vmMgr',
      name: '虚机管理',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/xx')),
    },
    {
      path: '/env/proMgr',
      name: '项目管理',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
  ],
};

const route2 = {
  path: '/access',
  name: '访问控制',
  icon: <CrownOutlined />,
  routes: [
    {
      path: '/access/sub-page3',
      name: '角色组管理',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
    {
      path: '/access/sub-page1',
      name: '用户管理',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
    {
      path: '/access/sub-page2',
      name: '角色管理',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
  ],
};

const route3 = {
  name: '监控统计',
  icon: <TabletOutlined />,
  path: '/watch',
  routes: [
    {
      path: '/watch/sub-page',
      name: '环境监控',
      icon: <CrownOutlined />,
      routes: [
        {
          path: '/watch/sub-sub-page1',
          name: '原型监控',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
        {
          path: '/watch/sub-sub-page2',
          name: '虚机监控',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
      ],
    },
    {
      path: '/watch/sub-page2',
      name: '统计管理',
      icon: <CrownOutlined />,

      routes: [
        {
          path: '/watch/sub-sub-page3',
          name: '环境使用率',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
        {
          path: '/watch/sub-sub-page4',
          name: '虚机分布',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
      ],
    },
    {
      path: '/watch/sub-page3',
      name: '日志管理',
      icon: <SmileOutlined />,

      routes: [
        {
          path: '/watch/sub-sub-page5',
          name: 'WEB日志',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
        {
          path: '/watch/sub-sub-page6',
          name: 'RT日志',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
      ],
    },
  ],
};

const route4 = {
  path: '/msg',
  name: '消息中心',
  icon: <MessageOutlined />,

  routes: [
    {
      path: '/msg/sub-sub-page1',
      name: '全部消息',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
  ],
};

const route5 = {
  path: '/personal',
  name: '个人中心',
  icon: <UserOutlined />,

  routes: [
    {
      path: '/personal/sub-sub-page1',
      name: '个人信息',
      icon: <CrownOutlined />,
      component: loadable(() => import('@/pages/app')),
    },
  ],
};

const route6 = {
  path: '/maintain',
  name: '系统维护',
  icon: <SettingOutlined />,

  routes: [
    {
      path: '/maintain/up',
      name: '内置服务升级',
      icon: <CrownOutlined />,

      routes: [
        {
          path: '/maintain/up/tt1',
          name: '内容库管理',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
        {
          path: '/maintain/up/tt2',
          name: '升级策略配置',
          icon: <CrownOutlined />,
          component: loadable(() => import('@/pages/app')),
        },
      ],
    },
  ],
};

export default {
  route: {
    path: '/',
    component: loadable(() => import('@/layouts')),
    routes: [route1, route2, route3, route4, route5, route6],
  },
};
