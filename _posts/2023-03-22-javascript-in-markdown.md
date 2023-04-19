---
title: JavaScript in Markdown
categories: Markdown
---

Step 1, create a new file named `YourScript.js` in the site directory.

Step 2, write the following code in the YAML of the Markdown document.

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

Step 3, introduce JavaScript into Markdown.

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```