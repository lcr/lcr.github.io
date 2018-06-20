---
title: 锚点定位遇上fixed元素
categories: CSS
description: 页面header使用fixed,锚点定位元素被header遮住，纯CSS的解决办法
---

点击锚点链接，锚点定位元素会跳转到浏览器顶端，可是如果你有一个fixed定位的导航栏，导航栏会把锚点元素遮挡住

解决办法：

### HTML

```html
<header></header>
<a class="anchor" name="anchor"></a>
```

### CSS

```css
header{
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
  height: 60px;
}

.anchor {
  display: block;
  position: relative;
  top: -60px;
  visibility: hidden;
}
```