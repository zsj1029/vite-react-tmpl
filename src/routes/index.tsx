// import loadable from '@loadable/component';
import React from 'react';
import Layout from '@/layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '@/pages/app';

/**
 * 跟路由组件
 * @constructor
 */
const RouterComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/app" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComp;
