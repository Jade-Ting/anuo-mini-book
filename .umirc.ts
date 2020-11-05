import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'anuo book',
  favicon: 'https://jade-ting.github.io/pictures/favicon.png',
  logo: 'https://jade-ting.github.io/pictures/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site', // site | doc

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

  // 导航配置
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '学习dumi',
      path: '/demo',
    },
    {
      title: '学习笔记',
      path: '/study',
    },
    {
      title: '分享',
      path: '/share',
    },

    {
      title: 'GitHub',
      path: 'https://github.com/Jade-Ting',
    },
  ],

  //  配置路由 - 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  menus: {
    '/demo': [
      {
        title: 'dumi学习',
        path: '/demo',
        children: [
          'demo/demo.md', // 菜单子项（可选）- 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ],
    '/study': [
      {
        title: 'HTTP',
        path: '/study',
        children: [
          'study/http/web-and-network-basics.md', // 菜单子项（可选）- 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'study/http/simple-http-protocol.md',
          'study/http/http-header.md',
        ],
      },
      {
        title: 'js',
        path: '/study/js',
        children: [
          'study/js/file-reader/file-reader.md',
          'study/js/file-reader/upload-file.md',
          'study/js/even-loop.md',
        ],
      },
    ],
    '/share': [
      {
        title: 'github-pages',
        path: '/share/github-pages',
        children: [
          'share/github-pages/github-pages-first.md', // 菜单子项（可选）- 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'share/github-pages/github-pages-two.md',
          'share/github-pages/github-pages-three.md',
          'share/github-pages/workflow.md',
        ],
      },
      {
        title: '图片处理',
        path: '/share/images',
        children: ['share/images/canvas-joint.md'],
      },
      {
        title: '使用git',
        path: '/share/git',
        children: [
          'share/git/create-repository.md',
          'share/git/manage-account-info.md',
          'share/git/stash.md',
          'share/git/vim-change-commit.md',
        ],
      },
    ],
  },
});
