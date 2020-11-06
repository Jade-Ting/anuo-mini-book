import React from 'react';
import ShareList from '../../../components/share-list';

const frameWork = [
  {
    name: 'sm图床',
    link: 'https://sm.ms/',
    logo: 'https://sm.ms/favicon.ico',
  },
  {
    name: 'babel转义',
    link: 'https://babeljs.io/',
    logo: 'https://babeljs.io/img/favicon.png',
  },
  {
    name: 'animista动画',
    link: 'https://animista.net/',
    logo: 'https://animista.net/favicon.ico',
  },
  {
    name: 'css裁剪',
    link: 'https://www.html.cn/tool/css-clip-path/',
    logo: 'https://www.html.cn/tool/css-clip-path/pics/favicon.png',
  },
  {
    name: 'svg压缩',
    link: 'https://www.zhangxinxu.com/sp/svgo/',
    logo: '',
  },
  {
    name: 'carbon代码块',
    link: 'https://carbon.now.sh/',
    logo: 'https://carbon.now.sh/favicon.ico',
  },
  {
    name: 'TinyPNG图片压缩',
    link: 'https://tinypng.com/',
    logo: 'https://tinypng.com/images/favicon.ico',
  },
  {
    name: '在线手绘',
    link: 'https://excalidraw.com/',
    logo: 'https://excalidraw.com/favicon.ico',
  },
  {
    name: '博文排版',
    link: 'https://www.mdnice.com/',
    logo: 'https://www.mdnice.com/favicon.svg',
  },
  {
    name: 'processon思维导图',
    link: 'https://www.processon.com/',
    logo: 'https://www.processon.com/favicon.ico',
  },
  {
    name: 'commit emoji',
    link: 'https://emoji.muan.co/',
    logo: 'https://twemoji.maxcdn.com/v/13.0.1/72x72/1f921.png',
  },
  {
    name: 'emoji',
    link: 'http://emojihomepage.com/',
    logo:
      'http://emojihomepage.com/images/favicon-edbd35389845737636ff149c12a18b85.png?vsn=d',
  },
];

export default () => {
  return <ShareList data={frameWork} />;
};
