---
nav:
  title: dumi学习
  icon: 
  path: /demo
---

# 组件渲染
> [Demo的类型及渲染](https://d.umijs.org/guide/demo-types) | 封装 `antd` 中的 `Button` 作为示例，注意，若代码块用 `tsx` 编写，则会自动生成 `jsx`，可以相互转化。

## 方法一

```tsx
/**
 * title: 按键
 * desc: 直接将组件写在 `markdown` 文档的代码块中
*/
import React from 'react';
import { Button } from 'antd'

export default ({ title }: { title: string }) => <Button>你好</Button>;
```

## 方法二

```tsx
/**
 * title: 按键
 * desc: 在外部写好组件，再引入，则会显示所有有关联的文件。
 * background: 'pink'
*/
import React from 'react';
import AButtonDemo from '../../src/demo/AButtonDemo.tsx'

export default () => <AButtonDemo />;
```

## 方法三
<code src="../../src/demo/AButtonDemo.tsx" title="按键" desc="以`code`的形式嵌入" hideActions='["CSB"]'>
