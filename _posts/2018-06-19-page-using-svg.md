---
title: 网页中使用svg
categories: CSS
description: 网页使用svg的各种实现方式，直接在HTML写入，或者CSS伪类实现
---

假设想要在超链接后面插入一个名为`link.svg`的小图标，有多少种实现方式呢？Demo：[anchor](#)

1、`link.svg`放在img文件夹中，在img元素内包含svg

```html
<a>anchor<img src="/img/link.svg"></a>
```

2、直接在HTML写入

```html
<a>anchor<svg>...</svg></a>
```

3、`link.svg`放在img文件夹中，使用CSS伪类

```css
a:after {
  content: url("/img/link.svg");
}
```

<!-- more -->

4、直接在CSS用伪类

```css
a:after {
  content: url("data:image/svg+xml;utf8,<svg>...</svg>");
}
```

由于我的网站是Jekyll生成，`link.svg`只是装饰作用，目前使用第4种方式，可以减少对服务器的资源请求。
