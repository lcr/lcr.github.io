---
title: Javascript学习笔记
categories: JavaScript
---

避免浏览器报错
```javascript
   if (document.getElementById("id")) {
    document.getElementById("id").style.color = "red";
  }
```

取得所有P元素并添加行为
```javascript
  var items = document.getElementsByTagName("p");
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      //do spmething
    }
  }
```

表格奇数行变色
```html
<table id="table">
  <tbody>
  <tr><td>第一行</td><td>第一行</td></tr>
  <tr><td>第二行</td><td>第二行</td></tr>
  <tr><td>第三行</td><td>第三行</td></tr>
  <tr><td>第四行</td><td>第四行</td></tr>
  <tr><td>第五行</td><td>第五行</td></tr>
  <tr><td>第六行</td><td>第六行</td></tr>
  </tbody>
</table>
```

```javascript
var item = document.getElementById("table");
var tbody = item.getElementsByTagName("tbody")[0];
var trs = tbody.getElementsByTagName("tr");
for (var i = 0; i < trs.length; i++) {
  if (i % 2 === 0) {
     trs[i].style.backgroundColor = "red";
  }
}
```