---
title: 网页中使用svg的方法
categories: CSS
description: 网页使用svg的各种实现方式，直接在HTML写入，或者CSS伪类实现
---

假设想要在超链接后面插入一个名为`link.svg`的小图标，Demo：[anchor](#)

有多少种实现方式呢？

方法一：`link.svg`放在img文件夹中，在img元素内包含svg

```html
<a>anchor<img src="/img/link.svg"></a>
```

方法二：直接在HTML写入

```html
<a>anchor<svg>...</svg></a>
```

方法三：`link.svg`放在img文件夹中，使用CSS伪类

```css
a:after {
  content: url("/img/link.svg");
}
```

<!-- more -->

方法四：直接在CSS用伪类

```css
a:after {
  content: url("data:image/svg+xml;utf8,<svg>...</svg>");
}
```
