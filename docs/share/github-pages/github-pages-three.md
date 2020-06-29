---
title: '3.使用github-actions自动发布'
order: 3
---

> 在[使用gh-pages手动发布](https://github.com/Jade-Ting/note/blob/master/github-pages/%E4%BD%BF%E7%94%A8gh-pages%E6%89%8B%E5%8A%A8%E5%8F%91%E5%B8%83.md)中我们介绍了安装 `gh-pages`，使用命令行来进行手动发布。

> 但是毕竟是手动发布，所以还是需要在`npm run build`打包 `npm run deploy`发布之后才能推送到远程上。

> 😏懒人有懒福， 于是我学会了自动发布，哈哈哈哈。

## 使用github actions自动发布gh-pages
> 参考[深入但不淺出，如何用 github actions 自動發佈 gh-pages](https://medium.com/@milkmidi/%E6%B7%B1%E5%85%A5%E4%BD%86%E4%B8%8D%E6%B7%BA%E5%87%BA-%E5%A6%82%E4%BD%95%E7%94%A8-github-actions-%E8%87%AA%E5%8B%95%E7%99%BC%E4%BD%88-gh-pages-8183464dfe84) | [Flutter Web — Github Actions-Github Pages](https://medium.com/flutter-community/flutter-web-github-actions-github-pages-dec8f308542a) | 前一篇相当于后一篇的翻译文


## 设置github

### 1. 点击github头像 -> `setting` -> 进入左侧的`Developer settings` -> 左侧`Personal access tokens` -> 点击 `Generate new token` (如果之前都没有设置过，那应该不用点击就能出现选择框的页面)
![image.png](https://i.loli.net/2020/06/13/bHeQjNgf6RBqGAZ.png)

### 2. 勾选 `repo` -> `repo:status` 和  `public_repo`后点击 `Generate token`生成token， 【注意，生成token后先复制保存token】
![image.png](https://i.loli.net/2020/06/13/b5HwnUKd6Vq9Av8.png)

### 3. 生成token页面, 可以截图或复制保存
![image.png](https://i.loli.net/2020/06/13/xKqImPL5Vd4NvQe.png)

### 4. 到需要自动发布的仓库中，setting -> 左侧Secrets -> New Secret -> 输入名字和刚刚复制的token -> add secret
![image.png](https://i.loli.net/2020/06/15/NSmk3OHKpZc5f7s.png)

### 5. 添加GitHub action

第一种做法：点击action -> 点击set up workflow -> 填写 yml文件。

第二种做法：直接在本地项目根目录添加 .github\workflows\gh-pages.yml文件，再推送到远程。

可以参考：
```yml
# .github/workflows/gh-pages.yml

name: github pages

on:
  push:
    branches:
      - master # default branch

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build

```