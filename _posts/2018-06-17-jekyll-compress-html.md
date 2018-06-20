---
title: 压缩Jekyll HTML
categories: Jekyll
description: 使用Liquid压缩Jekyll网站的HTML
---

Jekyll网站的页面中存在很多空行，这是Liquid逻辑代码和Markdown换行本来占据的位置，过多的空行会影响网页加载速度，虽然很细微，可是也不能忍啊。

其实要压缩Jekyll中的HTML不需要运行插件，使用Liquid就可以简单做到。

首先，[下载](http://jch.penibelst.de/){:target="_blank"}`compress.html`文件(在标题Installation下面)

然后，把下载到的`compress.html`放进站点`_layout`文件夹里面

最后，在`_layout`文件夹打开`default.html`(所有页面使用的顶级布局),在头部添加以下代码：

```
---
layout: compress
---
```

完成。

<!-- more -->

默认情况下是单个空格替换连续的空行，若需自定义，可在`_config.yml`自行配置

```text
compress_html:
  clippings: []
  comments: []
  endings: []
  ignore:
  envs: []
  blanklines: false
  profile: false
  startings: []
```

[官方文档](http://jch.penibelst.de/)