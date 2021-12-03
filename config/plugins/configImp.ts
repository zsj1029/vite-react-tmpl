import vitePluginImp from 'vite-plugin-imp';

export default function configImp() {
  return vitePluginImp({
    libList: [
      {
        libName: 'lodash',
        libDirectory: '',
        camel2DashComponentName: false,
        style: () => {
          return false;
        },
      },
      {
        libName: 'antd',
        style: (name) => `antd/es/${name}/style`,
      },
    ],
  });
}
