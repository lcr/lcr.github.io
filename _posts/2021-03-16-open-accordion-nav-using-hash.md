---
title: 获取URL中的锚
categories: JavaScript
description: 使用location.hash获取URL锚部分
---

需求：跨页面跳转到锚点定位，并给锚点添加点击事件，用于跳转后自动展开手风琴。


实现：`location.hash`获取URL中锚部分，然后模拟一个点击事件。

```javascript
var urlHash = window.location.hash;
if (urlHash.length > 0) {
  document.getElementById(urlHash).click();
}
```