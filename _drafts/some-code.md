---
title: Some code
---

JavaScript隐藏浏览器滚动条

```javascript
document.body.style.overflowY = 'hidden';
```

```javascript
var scrollY = document.querySelector("body");
scrollY.style.cssText += 'overflow-y:hidden';
```