---
title: a标签整行可点击
categories: CSS
description: a标签简短且带有边框背景色，同时整行可点击的实现方式，增强网站易用性
---

不少网站会在首页列出文章的简要，然后在下面添加一个`点击查看更多`的按钮，这个按钮可小了，要点击它，鼠标得移动一大段距离。

网站易用性不可忽视，通常使a标签整行可点击，设置display：block即可，可是如果a标签带有边框和背景色，边框和背景色也会随之占据一行，略显不美观。

假设按钮简短且带有边框和背景色，同时想要整行可点击呢，另外鼠标经过会改变背景色，如何实现？

我的方式：

### HTML

```html
<a href=" "><span>点击查看更多</span></a>
```

<!-- more -->

### SCSS

```scss
a {
  display: block;
  
  span {
    display: inline-block;
    border: red 2px solid;
    border-radius: 30px;
    padding: 10px 30px;
    color: red;
  }
  
  &:hover span{
    background: red;
    color: white;
  }
}
```
emmmm,多了一层HTML标签，有没有更好的解决办法呢？