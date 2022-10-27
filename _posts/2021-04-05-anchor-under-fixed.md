---
title: 解决锚定位被fixed遮挡
categories: CSS
description: 锚定位元素会跳转到视口顶部时，被fixed布局的导航栏遮挡的纯CSS解决办法
---

问题：锚定位元素会跳转到视口顶部时，被fixed布局的导航栏遮挡

解决：

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