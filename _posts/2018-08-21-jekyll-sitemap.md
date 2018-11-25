---
title: Jekyll网站创建站点地图
categories: Jekyll
description: 关于使用Jekyll-sitemap创建站点地图的教程
---

Jekyll网站默认没有站点地图，但我们可以创建一个。

首先在`Gemfile`中写入以下代码并运行`bundle install`

```text
group :jekyll_plugins do
   gem 'jekyll-sitemap'
end
```

然后添加以下代码到`_config.yml`并Commit。

```text
plugins: 
  - jekyll-sitemap
```

此时站点地图已创建，但在根目录是不可见的，查看站点地图可在浏览器输入`yourwebsite.com/sitemap.xml`

[官方文档](https://github.com/jekyll/jekyll-sitemap){:target="_blank"}

另外，想要文章马上被谷歌索引，可使用Google抓取工具，主动请求编入索引，几分钟内就会抓取并编入索引。