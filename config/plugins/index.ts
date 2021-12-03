/**
 *  vite的插件配置文件
 */
import { Plugin, PluginOption } from 'vite';
import react from './react';
import configSvgIcons from './svgIcons';
import configEslint from './eslint';
import configVisualizerConfig from './visualizer';
import configImp from './configImp';
import legacy from '@vitejs/plugin-legacy';
import viteCompression from 'vite-plugin-compression';
import { VITE_APP_ESLINT, VITE_APP_VISUALIZER, VITE_APP_LEGACY } from '../index';

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[] | PluginOption[])[] = [
    /**
     * 必须默认项
     */
    viteCompression(),
    react(),
    configSvgIcons(),
    configImp(),
  ];
  VITE_APP_ESLINT && vitePlugins.push(...configEslint());
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizerConfig());
  VITE_APP_LEGACY &&
    vitePlugins.push(
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    );
  return vitePlugins;
}
