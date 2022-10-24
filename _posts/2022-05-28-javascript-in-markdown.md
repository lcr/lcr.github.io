---
title: Markdown文档中使用JavaScript
categories: Markdown
description: 如何在Markdown文档中使用JavaScript
---

步骤一：在站点目录新建名为 `yourscript.js` 的文件。

步骤二：在Markdown文档的YAML头写入以下代码。

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

步骤三：把JavaScript 引入 Markdown，完成。

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```