import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'anuo book',
  favicon: 'https://jade-ting.github.io/pictures/favicon.png',
  logo: 'https://jade-ting.github.io/pictures/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',

  base: '/anuo-mini-book',
  publicPath: '/anuo-mini-book/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404

  // 引入antd
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
 ],
});
