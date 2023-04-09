---
title: Markdown中使用JavaScript
categories: Markdown
description: 如何在Markdown文档中使用JavaScript
---

首先在站点目录新建名为 `yourscript.js` 的文件。

然后在Markdown文档的YAML头写入以下代码。

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

最后把JavaScript 引入 Markdown 就可以了。

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```