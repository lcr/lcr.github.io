---
title: JavaScript in Markdown file
categories: Markdown
description: how to use JavaScript in Markdown documents
---

Step1,create a file `yourscript.js` in the site directory.

Step2,add the following YAML front matter to the beginning of Markdown.

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

Step3,introduce JavaScript in the markdown file.

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```