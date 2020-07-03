---
title: '修改git账号'
order: 2
---

<Alert>情形一：本地电脑中可能登录了多个git账号，比如个人的github账号，公司的gitLab账号等。这时候就有可能出现账号混乱的问题。</Alert>

<Alert>情形二：想修改/删除本地git账号。</Alert>

## 查看用户名和邮箱地址

```bash
$ git config user.name yourgithubName
$ git config user.email yourgithubAccount
```

> yourgithubName - 替换成你的github名称 | 替换成你的github账号

## 修改用户名和邮箱地址

```bash
$ git config user.name yourgithubName
$ git config user.email yourgithubAccount
```

## window删除/修改本地本地git账号
> 手动在电脑本地删除账号

（一）进入控制面板

（二）选择用户账户

（三）选择管理你的凭据

（四）选择Windows凭据

（五）选择git保存的用户信息

（六）选择编辑或者进行删除操作

（七）完成

![修改普通凭据github信息.png](https://i.loli.net/2020/05/05/SfTmYnIdFw5ateh.png)