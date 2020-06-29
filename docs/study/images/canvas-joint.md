---
title: 'canvas拼接长图'
order: 3
---

### 利用canvas拼接图片
> 将下面的js代码放入html文件中，将需要拼接的图片与该html放在一个文件夹下，在文件夹中运行 `npx http-server`。就可以看到图片下载啦~

<div style="color: #7e57c2; margin-bottom: 10px;text-shadow: .2rem 0rem .5rem #b39ddb,-.2rem 0rem .5rem #b39ddb,0rem .2rem .5rem #b39ddb,0rem -.2rem .5rem #b39ddb;">🔊但需要注意图片的名称跟数量等都要对应哦~</div>

```js
// 点击下载拼接完成的图片
function downloadFile(fileName, blob) {
  var url = URL.createObjectURL(blob);
  var aLink = document.createElement('a');
  var img = document.createElement('img');
  var evt = document.createEvent('HTMLEvents');

  evt.initEvent('click', false, false); //initEvent 不加后两个参数在FF下会报错
  aLink.download = fileName;
  aLink.style.display = 'block';
  aLink.href = url;
  aLink.innerHTML = '点击下载';
  aLink.dispatchEvent(evt);

  img.src = url;

  document.body.appendChild(aLink);
  document.body.appendChild(img);
}

// 拼接图片
function concatImageAndDownload() {
  const imgWidth = 355; // 单张图片宽度
  const imgHeight = 221; // 单张图片高度
  const imgLength = 35; // 图片张数
  const canvas = document.createElement('canvas'); // 创建 <canvas> 标签
  canvas.width = imgWidth;
  canvas.height = imgHeight * imgLength;

  const context = canvas.getContext('2d'); // 获取canvas元素的context，（canvas绘制的图像在这里被熏染）
  context.rect(0, 0, canvas.width, canvas.height); // 设置渲染的位置（0, 0）-左上角，宽，高

  const promiseAll = [];
  for (let i = 0; i < imgLength; i++) {
    promiseAll.push(
      new Promise((res, rej) => {
        const imgUrl = `./ (${i + 1}).png`; // 获取同文件夹下的图片
        const myImage = new Image();
        myImage.src = imgUrl;
        myImage.crossOrigin = 'Anonymous'; // 解决请求图片资源时的跨域问题
        myImage.onload = () => {
          const y = i * imgHeight;
          context.drawImage(myImage, 0, y);
          res();
        };
      }),
    );
  }
  Promise.all(promiseAll).then(() => {
    var base64 = canvas.toBlob(
      function(blob) {
        debugger;
        downloadFile('cn.png', blob); // 生成图片的名字
      },
      'image/png', // 设置成png，若原图底色透明，则可以获取到底色透明的图片
      0.45,
    );
  });
}

concatImageAndDownload();
```

<Alert>
小贴士一 - 文件夹按顺序重命名（window）
</Alert>

1. 全选文件夹中的图片
2. 按F2(或右键一张图片选择重命名)
3. 删除原本的名字（或直接敲空格）
4. 最后回车！搞定~
5. 注意，这里出来的名字可能前面是空格~

<Alert>
小贴士二 - 获取透明背景/不透明背景
</Alert>

格式： `image/[图片格式]`

1. `png`默认生成透明背景
2. `jpeg`默认生成黑色背景
3. 需要其他颜色背景可以
```js
const context = canvas.getContext('2d');
context.fillStyle = 'red'
```

