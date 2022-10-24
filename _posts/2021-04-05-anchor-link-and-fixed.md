---
title: 锚点定位遇上fixed元素
categories: CSS
description: 页面header使用fixed定位,锚定位元素被header遮住，纯CSS的解决办法
---

点击锚链接，锚定位元素会跳转到视口顶部，可是如果你有一个fixed定位的导航栏，导航栏会把锚定位元素遮挡住

解决办法：

### HTML

```html
<header></header>
<a id="anchor"></a>
```

### CSS

```css
header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width:100%;
  height: 60px;
}

#anchor {
  display: block;
  position: relative;
  top: -60px;
  visibility: hidden;
}
```