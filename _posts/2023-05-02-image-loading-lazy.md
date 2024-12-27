---
title: 图片懒加载
categories: JavaScript
description: null
---

## HTML方法

```html
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```

行内图片的懒加载，会导致页面布局重排，所以使用loading="lazy"时最好指定宽高。