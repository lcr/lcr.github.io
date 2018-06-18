---
title: 页面插入svg的方式
categories: CSS
description: 页面插入svg的多种实现方式，直接在HTML写入，或者CSS伪类实现
---

假设想要在超链接后面插入一个名为`link.svg`的小图标，有多少种实现方式呢？Demo：[anchor](https://lcr.github.io/)

## Plan A - 直接在HTML写入

### HTML

```html
<a>anchor<svg>...</svg></a>
```

## Plan B - svg文件放在img文件夹中，使用CSS伪类

### CSS

```css
a:after {
  content: url("/img/link.svg");
}
```

<!-- more -->

## Plan C - 直接在CSS用伪类

### CSS

```css
a:after {
  content: url("data:image/svg+xml;utf8,<svg>...</svg>");
}
```

由于网站是Jekyll生成的，目前使用第三种方式，可以减少对服务器的资源请求，还有没有更好的方式呢？