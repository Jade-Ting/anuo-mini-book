---
title: '打印文件目录树'
order: 4
---

<Alert>电脑终端有自带导出目录树的方法，但是！插件还是比较简洁好用一些~</Alert>

### [treer](https://www.npmjs.com/package/treer)

#### install

```bash
npm install treer -g
```

#### usage

```bash
$ treer --help

  Usage: treer [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -d, --directory [dir]  Please specify a directory to generate structure tree # 生成指定目录的结构树
    -i, --ignore [ig]      You can ignore specific directory name # 忽略指定的目录
    -e, --export [epath]   export into file # 导出到某文件中
```

`treer -i "/^regex$/"` 可以使用正则（请自行查询用法~）。

导出到指定文件：

```bash
$ treer -e ./result.txt -i .git

treer
├─.DS_Store
├─.gitignore
├─README.md
├─package.json
├─result.txt
├─src
|  └index.js
├─node_modules
|      ├─graceful-readlink
|      |         ├─.npmignore
|      |         ├─.travis.yml
|      |         ├─LICENSE
|      |         ├─README.md
|      |         ├─index.js
|      |         └package.json
|      ├─commander
|      |     ├─History.md
|      |     ├─LICENSE
|      |     ├─Readme.md
|      |     ├─index.js
|      |     └package.json


The result has been saved into ./result.txt
```
