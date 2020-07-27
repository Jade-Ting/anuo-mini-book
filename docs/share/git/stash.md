---
title: 'git-stash用法'
order: 3
---

<Alert>参考[git-stash用法小结](https://www.cnblogs.com/tocy/p/git-stash-reference.html)</Alert>
<Alert>参考[使用git stash命令保存和恢复进度](https://blog.csdn.net/daguanjia11/article/details/73810577)</Alert>


## 使用场景
1. **写了多余但又不想删除的代码**：比如写了一个功能现在用不到，但以后可能用的上，想保存，但是又不想增加一个"脏"的提交。

2. **临时需要切换分支**：开发时，我们一般会在本地切换自己的分支进行开发，但如果此时需要临时切回master修改/添加功能时，此时我们往往需要先将分支修改的内容commit到本地仓库，再切换分支，但这可能会添加不必要的commit信息。

## 使用
1. 保存当前工作进度，会把暂存区的和工作区的改动保存起来，运行`git stash`命令后，你会发现工作区变得干净，没有任何改动。
```bash
git stash

# 若需要添加备注
git stash save '……备注'
```

2. 显示进度列表
```bash
git stash list
```

3. 恢复进度，通过 `git stash pop` 命令恢复进度后，会删除stash list中的进度, 使用 `git stash apply` 则不会。
```bash
# 恢复最新的进度到工作区，（默认把工作区和暂存区的改动都恢复到工作区）
git stash pop/apply

# 恢复最新的进度到工作区和暂存区
git stash pop/apply --index

# 恢复指定的进度到工作区, stash_id可以通过 git stash list 获取
git stash pop/apply stash@{stash_id}
```

4. 删除存储的进度
```bash
# 删除一个存储的进度，如果没有指定 stash_id 则删除最新的存储进度
git stash drop[stash_id]
```

5. 删除所有存储的进度
```bash
git stash clear
```