import React, { FC, useEffect } from 'react';
import loadable from '@loadable/component';
import styles from './app.module.less';
import { environmentVariable } from '@/utils';
// @ts-ignore
import { withStore } from 'retalk';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';

const { TabPane } = Tabs;
const SvgIcon = loadable(() => import('@/components/svgIcon'));

const App: FC = withStore({
  Account: ['count', 'add', 'addLater', 'login_name'],
})((props: any) => {
  const { count, add, addLater, login_name } = props;

  useEffect(() => {
    console.log(`environmentVariable()`, environmentVariable());
  }, [count]);

  return (
    <ProCard direction="column" ghost gutter={[0, 16]}>
      <ProCard>
        <Tabs type="card">
          <TabPane tab="Tab 1" key="1">
            <div className={styles.App}>
              <p>
                :{count}
                {addLater.loading ? 'true' : 'false'}
              </p>
              <h2>Welcome to vite-react-cil</h2>
              <ul>
                <li>
                  <a href="###" onClick={() => addLater(2)}>
                    <SvgIcon iconClass="logon" fontSize="30px" />
                    <h4>ant-simple-pro</h4>
                    <section>
                      简洁，美观，快速上手，支持3大框架(vue3.0,react,angular,typescript)；Concise,
                      beautiful, quick to get started, support 3 big frameworks
                    </section>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lgf196/JoL-player">
                    <SvgIcon iconClass="logon" fontSize="30px" />
                    <h4>JoL-player</h4>
                    <section>
                      简洁，美观，功能强大的react播放器(simple and beautiful, powerful react player)
                    </section>
                  </a>
                </li>
              </ul>
            </div>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </ProCard>
    </ProCard>
  );
});

export default App;
