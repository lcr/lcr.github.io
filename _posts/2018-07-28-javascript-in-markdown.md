---
title: Markdown中使用JS
categories: Markdown
description: JavaScript代码在Markdown文件中正常解析的方法
---

首先在站点目录创建一个js文件`yourscript.js`

然后在Markdown的yaml头中写入以下代码

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

最后在Markdown文件中引入js

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```