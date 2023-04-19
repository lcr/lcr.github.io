---
title: 插入svg的方法
categories: CSS
description: 网页使用svg的各种实现方式，直接在HTML写入，或者CSS伪类实现
---

需求：在超链接后面插入一个名为`link.svg`的小图标，Demo：[anchor](#)

方法一：作为图片引入svg

```html
<a>anchor<img src="/img/link.svg"></a>
```

方法二：直接在HTML写入

```html
<a>anchor<svg>...</svg></a>
```

方法三：使用CSS伪类引入图片

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
