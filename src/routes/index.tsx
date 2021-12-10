// import loadable from '@loadable/component';
import React from 'react';
import Layout from '@/layouts';
import BlankLayout from '@/layouts/BlankLayout';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from '@/pages/app';
import BBB from '@/pages/vmMgr/app';

/**
 * 跟路由组件
 * @constructor
 */
const RouterComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/env" element={<BlankLayout />}>
            <Route path="/env/netMgr" element={<App />} />
            <Route path="/env/vmMgr" element={<BBB />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComp;
