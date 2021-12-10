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
import { RouterTypes } from '@ant-design/pro-layout/lib/typings';
const route1 = {
  path: '/env',
  name: '环境管理',
  icon: <AntDesignOutlined />,
  component: './Welcome',
  routes: [
    {
      path: '/env/netMgr',
      name: '原型管理',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/env/vmMgr',
      name: '虚机管理',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/env/proMgr',
      name: '项目管理',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
  ],
};

const route2 = {
  path: '/access',
  name: '访问控制',
  icon: <CrownOutlined />,
  access: 'canAdmin',
  component: './Admin',
  routes: [
    {
      path: '/access/sub-page3',
      name: '角色组管理',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/access/sub-page1',
      name: '用户管理',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/access/sub-page2',
      name: '角色管理',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
  ],
};

const route3 = {
  name: '监控统计',
  icon: <TabletOutlined />,
  path: '/watch',
  component: './ListTableList',
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
          component: './Welcome',
        },
        {
          path: '/watch/sub-sub-page2',
          name: '虚机监控',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
      ],
    },
    {
      path: '/watch/sub-page2',
      name: '统计管理',
      icon: <CrownOutlined />,
      component: './Welcome',
      routes: [
        {
          path: '/watch/sub-sub-page3',
          name: '环境使用率',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
        {
          path: '/watch/sub-sub-page4',
          name: '虚机分布',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
      ],
    },
    {
      path: '/watch/sub-page3',
      name: '日志管理',
      icon: <SmileOutlined />,
      component: './Welcome',
      routes: [
        {
          path: '/watch/sub-sub-page5',
          name: 'WEB日志',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
        {
          path: '/watch/sub-sub-page6',
          name: 'RT日志',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
      ],
    },
  ],
};

const route4 = {
  path: '/msg',
  name: '消息中心',
  icon: <MessageOutlined />,
  component: './Welcome',
  routes: [
    {
      path: '/msg/sub-sub-page1',
      name: '全部消息',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
  ],
};

const route5 = {
  path: '/personal',
  name: '个人中心',
  icon: <UserOutlined />,
  component: './Welcome',
  routes: [
    {
      path: '/personal/sub-sub-page1',
      name: '个人信息',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
  ],
};

const route6 = {
  path: 'maintain',
  name: '系统维护',
  icon: <SettingOutlined />,
  component: './Welcome',
  routes: [
    {
      path: '/maintain/sub-sub-page1',
      name: '内置服务升级',
      icon: <CrownOutlined />,
      component: './Welcome',
      routes: [
        {
          path: '/maintain/sub-sub-page3',
          name: '内容库管理',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
        {
          path: '/maintain/sub-sub-page5',
          name: '升级策略配置',
          icon: <CrownOutlined />,
          component: './Welcome',
        },
      ],
    },
  ],
};

export default {
  route: {
    path: '/',
    routes: [route1, route2, route3, route4, route5, route6],
  },
  location: {
    pathname: '/',
  },
};
