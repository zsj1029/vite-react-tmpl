import React, { FC } from 'react';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/zh_CN';
// @ts-ignore
import { Provider } from 'retalk';
import store from '@/stores';
import Router from '@/routes';

const App: FC = () => (
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <Router />
    </ConfigProvider>
  </Provider>
);

export default App;
