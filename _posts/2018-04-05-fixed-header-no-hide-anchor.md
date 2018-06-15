---
title: Fixed定位元素不遮住锚点
categories: CSS
description: 页面header使用fixed定位,锚点定位元素被遮住，纯CSS的解决办法
---

点击锚点链接跳转，会滑动到

```html
<a class="anchor" name="anchor"></a>
```

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