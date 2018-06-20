---
title: 网页中使用svg
categories: CSS
description: 网页使用svg的实现方式，直接在HTML写入，或者CSS伪类实现
---

假设想要在超链接后面插入一个名为`link.svg`的小图标，有多少种实现方式呢？Demo：[anchor](https://lcr.github.io/)

## 方式1 - 直接在HTML写入

### HTML

```html
<a>anchor<svg>...</svg></a>
```

## 方式2 - `link.svg`放在img文件夹中，使用CSS伪类

### CSS

```css
a:after {
  content: url("/img/link.svg");
}
```

<!-- more -->

## 方式3 - 直接在CSS用伪类

### CSS

```css
a:after {
  content: url("data:image/svg+xml;utf8,<svg>...</svg>");
}
```


由于网站是Jekyll生成的，目前使用第三种方式，可以减少对服务器的资源请求。

还有没有更好的方式呢？