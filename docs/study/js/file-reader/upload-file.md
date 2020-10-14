---
title: '上传文件'
order: 2
---

<Alert>对于 File api 上传文件还不是很清楚，仅记录一次上传文件的操作。</Alert>

<Alert>[参考学习 - 基于 html5 File API 的文件操作](https://segmentfault.com/a/1190000006600936)</Alert>

## 上传方式

- 传统的 flash 上传
- 隐藏 iframe 框上传
- 表单数据提交
- File API

历史上，JavaScript 无法处理二进制数据，如果必须处理的话，只能使用 `charCodeAt()`方法，将一个个字节从文字编码转为二进制数据。或者将二进制数据转成`Base64`编码后再处理。但是这两种方式不仅速度慢，还容易出错。

ECMAScript5 引入了 `Blob`对象，允许直接操作二进制数据。 `Blob` 对象是一个代表二进制数据的基本对象，`File` 对象是特殊类型的 `Blob`。

本文主要学习使用 `File` 进行上传。

## 选择文件

`File`对象可以是来自用户在一个`<input>`元素上选择文件后返回的`FileList`对象,也可以来自拖放操作生成的 `DataTransfer`对象,还可以是来自在一个`HTMLCanvasElement`上执行`mozGetAsFile()`方法后返回结果。

**由于浏览器的安全机制，是不允许 `input`标签来获取文件完整路径的。但是我们可以通过 `FileReader API`实现预览功能。**

### 通过`<input/>`选择文件

```html
<input id="file" type="file" accept=".xlsx, .xls, .csv, .xlsm" />
```

```js
const file = document.getElementById('file');
console.log(file); // file包含了文件的一些元信息，比如文件名，文件大小，文件类型等
```

### 通过拖拽选择文件

> 也可以使用拖拽进行选择文件 - 具体方法还未补上，可先自行谷歌~
