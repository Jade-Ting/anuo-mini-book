---
title: '进入vim界面修改commit信息'
order: 3
---

<Alert>当commit信息填写错误时，如何修改commit信息</Alert>
<Alert>进入vim(vi)界面，如何退出 [参考](https://blog.csdn.net/zimosangtian/article/details/80848526)</Alert>

1. 当 `git commit -m ''` 注释填写错误，需要进行修改

```bash
# git commit --amend 修改最近一次提交的注释信息，进入到 vim 编辑器
git commit --amend
```

2. 进入vim编辑器后，发现输入没有反应，因为此时vim处于不可编辑的状态。按 `c` 按键，进入编辑状态

3. 编辑完成后保存退出，按 `Esc` 退出编辑状态，接着连按两次 `大写字母Z`，就可以保存并且退出啦~

4. 编辑完成后退出，按 `Esc` 退出编辑状态
[一下摘抄至](http://caibaojian.com/vim.html)

- :w 保存文件但不退出vi
- :w file 将修改另外保存到file中，不退出vi
- :w! 强制保存，不推出vi
- :wq 保存文件并退出vi
- :wq! 强制保存文件，并退出vi
- q: 不保存文件，退出vi
- :q! 不保存文件，强制退出vi
- :e! 放弃所有修改，从上次保存文件开始再编辑