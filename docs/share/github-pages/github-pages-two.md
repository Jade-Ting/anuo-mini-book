---
title: '2.使用gh-pages手动发布'
order: 2
---

在 [使用GitHubPages发布项目](https://github.com/Jade-Ting/note/blob/master/github-pages/%E4%BD%BF%E7%94%A8GitHubPages%E5%8F%91%E5%B8%83%E9%A1%B9%E7%9B%AE.md) 中提到新建一个gh-pages分支来进行发布项目。

当时的做法是使用命令将build文件夹推到 `gh-pages` 分支上：

```bash
git subtree push --prefix=build origin gh-pages
```

其实还有另一种方式，可以手动进行发布，相比而言，命令会简单许多。

## 借助 `gh-pages` 手动部署

### 安装 `gh-pages`
```bash
npm install gh-pages --save-dev
# or
yarn add gh-pages -D
```

### 在`package.json`中添加指令

```json
"scripts": {
  "deploy": "gh-pages -d dist" // dist即文件打包生成的目录，在我的项目中用的是 build目录，所以是 "deploy": "gh-pages -d build"
}
```

### 项目完成修改之后

```bash
# 打包
npm run build

# 发布
npm run deploy
```

### 推到远程分支

```
git add .
git commit -m ''
git push origin master
```

这时候，`gh-pages`分支上的内容也会被修改~

这里要注意~GitHub Pages的更新比较慢~可以等一会儿再刷新页面。