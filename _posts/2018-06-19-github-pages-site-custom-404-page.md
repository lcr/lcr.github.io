---
title: GitHub Pages网站自定义404页面
categories: GitHub
description: 自定义GitHub Pages网站404页面的方法
---

首先站点根目录新建名为`404.html`或`404.md`的文件,

然后在文件头部写入

```text
---
permalink: /404.html
---
```

最后编写自定义页面并Commit，完成。

[Demo](https://github.com/lcr/lcr.github.io/blob/master/404.html){:target="_blank"}

[官方文档](https://help.github.com/articles/creating-a-custom-404-page-for-your-github-pages-site/){:target="_blank"}