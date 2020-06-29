---
title: 'workflow（.yml）文件配置'
order: 4
---

参考 [GitHub Actions 入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

GitHub Actions的配置文件叫做workflow文件，存放再代码仓库的 `.github/workflows`目录中。

workflow文件采用 [YAML格式](http://www.ruanyifeng.com/blog/2016/07/yaml.html)， 文件名可以任意娶， 但后缀名统一为 `yml`。GitHub只要发现 `.github/workflows/xxx.yml` 文件，就会自动运行该文件。


基本配置：

1. name: 是workflow的名称。如果省略该字段，则默认当前文件名。
2. on: 指定触发workflow的条件，通常是某个事件。
```yml
# 当master分支发生push事件事触发 workflow
on:
    push:
        branches:
            - master
```
3. jobs: workflow文件的主体是 jobs 字段。表示要执行一项或者多项任务。
```yml
jobs:
    # job_id: 执行的任务
    deploy:
        # name：xxx : 任务的说明
        # 必填，指运行所需要的虚拟机环境，ubuntu-latest，ubuntu-18.04或ubuntu-16.04
        runs-on: ubuntu-18.04
        # job的运行步骤
        steps:
        - uses: actions/checkout@v2
        - run: npm install
        - run: npm run docs:build
        - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./docs-dist
```