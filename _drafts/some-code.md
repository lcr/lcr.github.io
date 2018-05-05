---
title: Code Tips
---

隐藏浏览器滚动条

```css
body {
  overflow-y: hidden;
}
```

```javascript
document.body.style.overflowY = 'hidden';
```

```javascript
var scrollY = document.querySelector("body");
scrollY.style.cssText += 'overflow-y:hidden';
```