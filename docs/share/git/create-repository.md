---
title: '创建仓库'
order: 1
---

<Alert>
笔记是早期学习的时候写的~适用于入门的同学😁
</Alert>

> 若是还没有github账户的同学可以先注册登录github账户, [github](https://github.com/)

# 建立本地仓库与远程仓库连接

## 创建github中项目仓库

> 右上角加号`new repository` ，然后按步骤填写项目库名称，求最后`create repository`就可以了

![github创建项目.png](https://i.loli.net/2020/05/05/eotbH9TdSK7lsQz.png)

![github创建项目2.png](https://i.loli.net/2020/05/05/vNA6wlpoFzj8QCc.png)

得到项目地址

![github项目地址.png](https://i.loli.net/2020/05/05/pEo9tT3IHOzvB82.png)

接下来就可以将仓库拉取到本地啦~

## 连接github远程仓库与本地仓库

### 1. 使用http方式
> 若只是拉取或提交到远程仓库，可以使用http方式。

复制github仓库的地址，在本地使用git bash输入 `git clone https: //github.com/Jade-Ting/test.git`，就可以直接将远程仓库克隆到本地。

此时因为没有连接到远程仓库，所以会弹出窗口要求登录git

![git输入账号密码.png](https://i.loli.net/2020/05/05/K2Nfln1riptMLcY.png)

若出现下面，则失败，就再输入一次github上密码

![重新登录github.png](https://i.loli.net/2020/05/05/ea4HlpcB9fSsvAZ.png)

成功

![提交成功.png](https://i.loli.net/2020/05/05/2NuLYckRvjsoEJq.png)

### 2. 使用密钥
> 在你本地的电脑中获取一个密钥 ssh key，类似于平常的验证码，输入到github账户中，就能将github账户与电脑本地连接起来。

- 首先，在桌面（或者其他文件夹都OK）右键打开`Git Bash Here`，到bash的控制台，出现如下

    ![bash控制台.png](https://i.loli.net/2020/05/05/iJf2gN96qSIAj1p.png)

  - 这一栏开始是你的计算机的名字
  - @后边的内容是你的计算机型号，很多时候有的人打开之后@后边是乱码，这个时候也不要在意，因为有些电脑型号是中文的，可能在显示的时候出现了问题，不影响你后期的操作
  - 黄色，文件夹名称
  - 蓝色，当前所在分支名称（创建之后才有）

- 获取密匙，输入以下命令

  ```bash
  ssh-keygen -t rsa-C “ your_email@youremail.com ”   
  // “ your_email@youremail.com ”表示在引号中输入你github绑定的邮箱地址
  ```

- 然后一路回车或肯定

- 得到钥匙的随机图像（说明密匙创建成功）

  ![钥匙随机图像.png](https://i.loli.net/2020/05/05/FYRP7zX284MaW9A.png)

- 在前面打开的bash文件的夹数中找到`.ssh`文件，（若在桌面打开的，则进入`C:\Users\Administrator\.ssh`），找到`id_rsa.pub`文件，用记事本打开，复制里面的内容（即密匙），如下所示。

  ```bash
  ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8h5j+/a2ANbzZhPuYWnqjgXwkBTBXOr/jgxZKZqB/gnKriwlaT3XVQVryFJ8Y9TrbIAetA736Jq6WSTt+5I2OsPIfxzQ9a91PI9UHl716HnwugD1pVFqxrwdrK5Psti4n1Q3L/iWkEp0guSxlKH4AP90xv+KoSKpi4mNPaIb4+dhE+hsKZIUfbioz7tEHLSq114aHREA6J+8EjgTLuX2xGthXjuFfsG2syBMV4Iec7qIZQtD1L7JK1cYhfWhrgTZg936hULT6+i7RnL53h1zKi015KZGtiquaJYvNHScK/PnV2azDgIiQQzUtf4B/pBKLGNZINrOZwKL+3y7fH8QB 1416271094@qq.com
  ```

- 到github账户上添加这个钥匙（在设置---> SSH和GPG键）里面，点击`New SSH key`

  ![github添加钥匙.png](https://i.loli.net/2020/05/05/WZRayGLJ4A96qSM.png)

- 复制到key里面，title可以自己起随意的名字，然后添加SSH密钥，好的。

    ![github添加钥匙2.png](https://i.loli.net/2020/05/05/rigVcB5Kbxv8GDm.png)

- 回到bash的控制台，然后输入以下代码，来检查是否成功绑定。

  ```bash
  ssh -T git@github.com
  
  //第一次绑定的时候输入上边的代码之后会提示是否继续，在输入是后如果出现了：你'。已经成功验证，但GitHub上不提供shell访问那就说明，已经成功连上了GitHub上。
  ```

- 设置用户名和邮箱，输入以下代码，名称最好和GitHub上边的一样，电子邮件是一定要是注册GitHub的那个邮箱地址（遇到的问题，我的两个github账号都是同一个邮箱，报错，后面会说到）

  ```bash
  $ git config --global user.name “你的github用户名” 
  $ git config --global user.email “你的github账号绑定的邮箱账号”
  ```

- 都设置成功后就可以将项目库克隆到本地文件夹中，或者将本地文件添加到项目库中。

## 将本地已经存在的文件中添加到GitHub的项目库中

> 本地文件已经存在了，现在要将本地代码推到git的远程仓库保存。

1. （先进入项目文件夹）通过命令git init把这个目录变成git可以管理的仓库

   ```bash
   git init
   ```

2. 把文件添加到版本库中，使用命令git add。添加到暂存区里面去，不要忘记后面的小数点“。”，意为添加文件夹下的所有文件

   ```bash
   git add .
   ```

3. 用命令git commit告诉Git，把文件提交到本地版本库。引号内为提交说明（方便之后查看提交了什么）

   ```bash
   git commit -m “这是我第一次提的内容”
   ```

4. 关联到远程库

   ```bash
   git remote add origin你的远程库地址地址
   如：
   git remote add origin https://github.com/OneEightZeroSix/hujiang.git
   ```