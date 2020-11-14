---
title: '页面引导'
order: 1
---

## [pagewalkthrough](https://github.com/jwarby/jquery-pagewalkthrough)

> jQuery 插件，可以用于页面指导。适用于 jQuery 写法，但是因为样式比较好看~所以，嘿嘿 <img src="./tuski1.gif" />

示例：
![image.png](https://i.loli.net/2020/11/14/vMS7qJeOCFmPaLt.png)

### use it

- 下载仓库中的`dist`文件添加到自己的项目中(注意修改`dist`为其他名称)， 在`html` 文件中引入 dist 文件中的 `jquery.pagewalkthrough.min.js` 和 `jquery.pagewalkthrough.min.css`。

  > 嗯嗯嗯，这样做的目的是因为我没有找到可以直接套用的地址，又因为它的资源（图片，文字等）文件使用的是相对路径，所以就直接下载了整个 dist。

- 在 js 中配置

```js
// 目前仅使用于jQuery
(function($) {
  // Set up tour
  $('body').pagewalkthrough({
    name: 'introduction',
    steps: [
      // 初始，第一步，全部遮罩，一般统一交代
      // content 对应 html 中步骤说明的id
      { popup: { content: '#walkthrough-1', type: 'modal' } },
      // wrapper 对应页面需要凸显的引导内容，可以是类名 .xxx, 也可以是id #xxx
      // content 对应 html 中步骤说明的id
      // position 说明的位置
      // ...详情请移步官网~
      {
        wrapper: '.day',
        popup: {
          content: '#walkthrough-2',
          type: 'tooltip',
          position: 'right',
        },
      },
      {
        wrapper: '.button',
        popup: {
          content: '#walkthrough-3',
          type: 'tooltip',
          position: 'left',
        },
      },
    ],
  });
  // Show the tour
  $('body').pagewalkthrough('show');
})(jQuery);
```

- html 中添加步骤说明
  > 放置在 `<body></body>` 中的最下方。

```html
<!-- 设置 display：none， 在页面中隐藏 -->
<!-- id： walkthrough-1， walkthrough-2 …… 分别对应 步骤 1, 2 …… -->
<div id="walkthrough-content" style="display: none;">
  <div id="walkthrough-1">
    <h3>Hi there 👋</h3>
    <h3>Nice to see you !</h3>

    <p>页面内容较少~</p>
    <p>去看看个别隐藏功能吧~</p>

    <p style="font-size: 12px;">
      感谢<a
        href="https://github.com/jwarby/jquery-pagewalkthrough"
        target="_blank"
        style="color: #00c7ff;"
        >pagewalkthrough.js</a
      >插件实现引导步骤~
    </p>
  </div>

  <div id="walkthrough-2">
    可以点击我看效果~
  </div>

  <div id="walkthrough-3">
    my secret base
  </div>
</div>
```
