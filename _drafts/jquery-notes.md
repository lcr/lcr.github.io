---
title: jQuery学习笔记
categories: jQuery
---

避免浏览器报错
```javascript
if($("#id").length > 0){
  //do something
}
```

```javascript
if($("#id")[0]){
  //do something
}
```