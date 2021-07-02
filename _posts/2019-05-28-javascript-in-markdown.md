---
title: JavaScript in Markdown file
categories: Markdown
description: how to use JavaScript in Markdown documents
---

Create a file `yourscript.js` in the site directory.

Then write the following code in the yaml of Markdown.

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

Finally, introduce JavaScript in the markdown file.

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```