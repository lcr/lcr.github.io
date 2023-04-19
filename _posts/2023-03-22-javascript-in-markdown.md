---
title: JavaScript in Markdown
categories: Markdown
---

Create a new file named `YourScript.js` in the site directory.

Then write the following code in the YAML of the Markdown document.

```text
{% raw %}---
title: YourTitle
customjs:
 - https://yoursite/yourscript.js
---{% endraw %}
```

Finally, you can introduce JavaScript into Markdown.

```text
{% raw %}{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}{% endraw %}
```