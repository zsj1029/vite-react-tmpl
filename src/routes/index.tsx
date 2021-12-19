import loadable from '@loadable/component';
import React, { lazy } from 'react';
import Layout from '@/layouts';
import BlankLayout from '@/layouts/BlankLayout';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import App from '@/pages/app';
import BBB from '@/pages/vmMgr/app';
import { renderRoutes } from 'react-router-config';
import config from '@/routes/config';

// loadable(() => import('@/pages/vmMgr/app'));

function genRoutes(config: any[]) {
  return config.map((item) => {
    if (item?.routes?.length > 0) {
      item.routes = genRoutes(item?.routes);
    }
    if (item.component) {
      item.component = item.component;
    } else {
      item.component = BlankLayout;
    }
    item.path = item.path;

    return item;
  });
}

export const rr = (() => {
  console.log(123123);
  return genRoutes([config.route]);
})();

/**
 * 跟路由组件
 * @constructor
 */
const RouterComp = () => {
  return (
    <Router>
      {/* <Route path="/" element={<Layout />}>*/}
      {/*  <Route path="/env" element={<BlankLayout />}>*/}
      {/*    <Route path="/env/netMgr" element={<App />} />*/}
      {/*    <Route path="/env/vmMgr" element={<BBB />} />*/}
      {/*  </Route>*/}
      {/* </Route>*/}
      {/* <NavLink exact activeStyle={{ color: 'red' }} to="/">*/}
      {/*  home*/}
      {/* </NavLink>{' '}*/}
      {/* |*/}
      {/* <NavLink activeStyle={{ color: 'red' }} to="/group">*/}
      {/*  group*/}
      {/* </NavLink>{' '}*/}
      {/* |*/}
      {/* <NavLink activeStyle={{ color: 'red' }} to="/about">*/}
      {/*  about*/}
      {/* </NavLink>*/}
      {renderRoutes(rr)}
    </Router>
  );
};

export default RouterComp;

const Home = () => {
  return <div>这是home</div>;
};

const Group = () => {
  return <div>这是Group</div>;
};

const About = () => {
  return <div>这是about</div>;
};

export const routes = [
  {
    path: '/',
    component: Layout,

    routes: [
      {
        path: '/env',
        component: BlankLayout,
        routes: [
          {
            path: '/env/netMgr',
            component: loadable(() => import('@/pages/app')),
          },
          {
            path: '/env/vmMgr',
            component: loadable(() => import('@/pages/app')),
          },
        ],
      },
    ],
  },
];

console.log('rrr', rr);

console.log('routes', routes);
