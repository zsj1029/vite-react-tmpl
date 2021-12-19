import React from 'react';

import { renderRoutes } from 'react-router-config';

const Layout: React.FC = (props: any) => {
  return <>{renderRoutes(props.route.routes)}</>;
};

export default Layout;
