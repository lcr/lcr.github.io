---
title: Jekyll网站设置谷歌分析
categories: Jekyll
description: 介绍谷歌分析添加到Jekyll网站的方法，以及使用cdn加速和缓存脚本来解决中国大陆加载慢的问题
---

谷歌分析提供免费网络分析服务，用于跟踪和报告网站流量，将谷歌分析添加到Jekyll网站十分简单。

首先登录[谷歌分析](https://www.google.com/intl/zh-CN/analytics/){:target="_blank"}并新建一个媒体资源，
以获取网站的跟踪ID，可以在`管理 > 媒体资源 > 跟踪信息 > 跟踪代码`下找到跟踪ID。

然后在`_includes`文件夹新建名为`google-analytics.html`的文件,并写入以下代码：

```javascript
<script>
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', '{% raw %}{{ site.google_analytics }}{% endraw %}', 'auto');
    ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
```

<!-- more -->

上面Liquid对象`{% raw %}{{ site.google_analytics }}{% endraw %}`用于通过`_config.yml`设置跟踪ID。

然后在`_config.yml`中添加跟踪ID：

```text
# Google Analytics
google_analytics: UA—XXXXXXXX-X
```

最后把`google-analytics.html`添加到网页，谷歌建议把跟踪代码放在每个页面的`<head>`中，以确保正确跟踪所有访问。

```text
{% raw %}{%- if jekyll.environment == 'production' -%}
  {%- include google-analytics.html -%}
{%- endif -%}{% endraw %}
```

上面代码表示只有在生产环境下，才运行谷歌分析，GitHub Pages默认设置是生产环境。

中国大陆不能正常访问谷歌，如果添加了谷歌分析，访客打开网页时，加载跟踪代码会导致网页速度下降。

这个时候我们可以使用 [jsDelivr CDN works in China](https://www.jsdelivr.com/network#china){:target="_blank"}

仅需添加以下代码即可：

```javascript
<script>
(function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
;c.parentNode.insertBefore(a,c)
})(window,document,"galite","script","https://cdn.jsdelivr.net/npm/ga-lite@2/dist/ga-lite.min.js");

galite('create', '{% raw %}{{ site.google_analytics }}{% endraw %}', 'auto');
galite('send', 'pageview');
</script>
```

[ga-lite](https://github.com/jehna/ga-lite){:target="_blank"}不仅解决了
谷歌分析跟踪代码在中国大陆影响加载速度的问题，还完美解决了官方脚本只缓存2个小时的问题。