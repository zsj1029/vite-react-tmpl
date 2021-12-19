import React, { FC, useMemo, useState } from 'react';
import { Button, Result, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.module.less';
import { Link, useLocation } from 'react-router-dom';
import ProLayout, { PageContainer, BasicLayoutProps } from '@ant-design/pro-layout';
import routes from '@/routes/config'; // 路由定义
import defaultSetting from '@/layouts/defaultSetting'; // layouts参数
import SvgIcon from '@/components/svgIcon';
// @ts-ignore
import { withStore } from 'retalk';
import { renderRoutes } from 'react-router-config';
import { rr } from '@/routes';

const Layout: FC<BasicLayoutProps> = withStore('Account')((props: any) => {
  // const [pathname, setPathname] = useState('/env/netMgr');
  const { login_name } = props;

  // const rr = useMemo(() => routes, []);
  // console.log(props.route);
  /**
   * 获取navigate路由跳转操作对象
   */
  // const navigate = useNavigate();

  /**
   * 获取location地址栏path
   */
  const location = useLocation();

  return (
    <>
      <ProLayout
        {...{ route: rr[0] }}
        {...defaultSetting}
        logo={() => <SvgIcon iconClass="logon" fontSize="30" />}
        location={{
          pathname: location?.pathname,
        }}
        waterMarkProps={{
          content: 'Account: ' + login_name,
        }}
        // @ts-ignore
        breadcrumbRender={(routers = []) => {
          // console.log(routers);
          return [
            {
              path: undefined,
              breadcrumbName: '首页',
            },
            ...routers,
          ];
        }}
        // onMenuHeaderClick={() => navigate('/env/netMgr')}
        menuItemRender={(item, dom) => {
          // console.log(item);
          // return (
          //   <a
          //     onClick={() => {
          //       setPathname(item.path || '/welcome');
          //     }}
          //   >
          //     {dom}
          //   </a>
          // );
          // if (item?.isUrl || !item?.path || location?.pathname === item?.path) {
          //   return dom;
          // }
          return <Link to={item.path || ''}>{dom}</Link>;
        }}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <></>
        <PageContainer
        // tabList={[
        //   {
        //     tab: '基本信息',
        //     key: 'base',
        //   },
        //   {
        //     tab: '详细信息',
        //     key: 'info',
        //   },
        // ]}
        // extra={[
        //   <Button key="3">操作</Button>,
        //   <Button key="2">操作</Button>,
        //   <Button key="1" type="primary">
        //     主操作
        //   </Button>,
        // ]}
        >
          {props.route && renderRoutes(props.route.routes)}
        </PageContainer>
      </ProLayout>
    </>
  );
});

export default Layout;
