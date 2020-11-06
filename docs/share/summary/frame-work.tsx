import React from 'react';
import ShareList from '../../../components/share-list';

const frameWork = [
  {
    name: 'UmiJS',
    link: 'https://umijs.org',
    logo:
      'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
  },
  {
    name: 'Umi Hooks',
    link: 'https://hooks.umijs.org',
    logo:
      'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
  },
  {
    name: 'Pro Layout',
    link: 'https://prolayout.ant.design',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    name: 'Pro Table',
    link: 'https://protable.ant.design',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    name: 'GGEditor',
    link: 'https://ggeditor.com',
    logo: 'https://img.alicdn.com/tfs/TB1FFA1CFP7gK0jSZFjXXc5aXXa-214-200.png',
  },
  {
    name: 'Remax',
    link: 'https://remaxjs.org',
    logo:
      'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
  },
  {
    name: 'LightProxy',
    link: 'https://lightproxy.org',
    logo:
      'https://user-images.githubusercontent.com/5436704/81533849-83e00f00-9399-11ea-943d-ac5fd4653906.png',
  },
  {
    name: 'juejin-im',
    link: 'https://juejin-im.github.io/open-source/',
    logo: 'https://avatars3.githubusercontent.com/u/69633008?s=200&v=4',
  },
];

export default () => {
  return <ShareList data={frameWork} />;
};
