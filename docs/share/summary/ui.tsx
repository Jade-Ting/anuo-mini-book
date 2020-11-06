import React from 'react';
import ShareList from '../../../components/share-list';

const frameWork = [
  {
    name: '图片素材',
    link: 'https://www.pexels.com/zh-cn/',
    logo: 'https://www.pexels.com/favicon.ico',
  },
  {
    name: 'loading',
    link: 'https://loading.io/',
    logo: 'https://i.loli.net/2020/11/06/qdbmo1ABSYxwLXR.png',
  },
  {
    name: '插画',
    link: 'https://undraw.co/illustrations',
    logo: 'https://undraw.co/favicon.ico',
  },
  {
    name: 'seeseed设计种子',
    link: 'https://www.seeseed.com/',
    logo: 'https://www.seeseed.com/favicon.png',
  },
];

export default () => {
  return <ShareList data={frameWork} />;
};
