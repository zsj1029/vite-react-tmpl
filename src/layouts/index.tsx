import React, { FC, useState } from 'react';
import { Button, Result, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ProLayout, { PageContainer, BasicLayoutProps } from '@ant-design/pro-layout';
import defaultProps from '@/routes/config';
import defaultSetting from '@/layouts/defaultSetting';
// @ts-ignore
import { withStore } from 'retalk';

const Layout: FC<BasicLayoutProps> = withStore('Account')((props: any) => {
  const [pathname, setPathname] = useState('/welcome');
  const { login_name } = props;
  return (
    <ProLayout
      {...defaultProps}
      {...defaultSetting}
      location={{
        pathname,
      }}
      waterMarkProps={{
        content: 'Account: ' + login_name,
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
      rightContentRender={() => (
        <div>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      )}
    >
      <PageContainer
        tabList={[
          {
            tab: '基本信息',
            key: 'base',
          },
          {
            tab: '详细信息',
            key: 'info',
          },
        ]}
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
      >
        <div
          style={{
            height: '120vh',
          }}
        >
          <Result
            status="404"
            style={{
              height: '100%',
              background: '#fff',
            }}
            title="Hello World"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        </div>
      </PageContainer>
    </ProLayout>
  );
});

export default Layout;
