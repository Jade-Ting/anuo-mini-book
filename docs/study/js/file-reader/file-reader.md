---
title: 'FileReader'
order: 1
---

<Alert>FlieReader 对象允许 Web 应用程序异步读取存储在用户计算机上的文件的内容，使用 File 或 Blob 对象指定要读取的文件或数据，</Alert>

## 文件 File

> 提供有关文件的信息，并允许网页中的 `JavaScript` 访问其内容。

通常情况下， `File` 对象是来自用户在一个 `<input>` 元素上选择文件后返回的 `FileList` 对象，也可以是来自自由拖放操作生成的 `DataTransfer` 对象。

```html
<input accept=".xlsx, .xls, .csv, .xlsm" type="file" />
```

## 构造函数

> 返回一个新构建的文件对象

```js
const reader = new FileReader();
```

## 属性

1. **FileReader.error** | 只读，表示在读取文件时发生的错误

2. **FileReader.readyState** | 只读，表示 `FileReader`状态的数字。

```
    0 - empty - 还没有加载任何数据

    1 - loading - 数据正在被加载

    2 - done - 已完成全部的读取请求
```

3. **FileReader.result** | 只读，文件的内容，在读取完成后才能获取到。

## 事件

1. **FileReader.onabort**

   处理 `abort` 事件，该事件在读取操作中断时被触发。

2. **FileReader.onerror**

   处理 `error` 事件，该事件在读取操作发生错误时触发。

   ```js
   reader.onerror = () => {
     // do something
   };
   ```

3. **FileReader.onload**

   处理 `load` 事件，该事件在读取操作完成（成功）时触发

   ```js
   reader.onload = event => console.log(event.target.result);
   ```

4. **FileReader.onloadstart**

   处理 `onloadstart` 事件，该事件在读取操作开始时触发。

5. **FileReader.onloadend**

   处理 `loadend` 事件，该事件在读取操作结束时触发（可能成功，可能失败）

6. **FileReader.onprogress**

   处理 `progress` 事件，该事件在读取 `Blob` 时触发，监控读取进度。

## 方法

1. **FileReader.abort()**

   中止读取操作，在返回时，`readyState` 属性为 `done`

2. **FileReader.readAsArrayBuffer()**

   开始读取指定的 `Blob` 中的内容，一旦完成， `result` 属性中保存的将是被读取文件的 `ArrayBuffer`对象。

3. **FileReader.readAsBinaryString()**

   开始读取指定的 `Blob` 中的内容。一旦完成，`result` 属性中将包含所读取文件的原始二进制数据。

   ```js
   reader.readAsArrayBuffer(this.selectedFile);
   ```

4. **FileReader.readAsDataURL()**

   开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个 data: URL 格式的 Base64 字符串以表示所读取文件的内容。

5. **FileReader.readAsText()**

   开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个字符串以表示所读取的文件内容。

   ```js
   reader.readAsText(this.selectedFile, 'gb2312');
   ```
