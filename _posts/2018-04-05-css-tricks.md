---
title: CSS学习笔记
categories: CSS/SCSS
---

隐藏浏览器滚动条

- 
```css
body {
  overflow-y: hidden;
}
```

- 
```javascript
document.body.style.overflowY = 'hidden';
```

- 
```javascript
var scrollY = document.querySelector("body");
scrollY.style.cssText += 'overflow-y:hidden';
```

- 
```css
.overflow-hidden{ 
  overflow-y: hidden 
}
```

```javascript
document.body.classlist.add("overflow-hidden")
```

清除IE搜索框默认右端的X

```css
input[type="search"]::-ms-clear,
input[type="search"]::-ms-reveal {
  display: none;
}
```

清除Chrome搜索框默认右端的X

```css
.searchbox-input::-webkit-search-decoration,
.searchbox-input::-webkit-search-cancel-button,
.searchbox-input::-webkit-search-results-button,
.searchbox-input::-webkit-search-results-decoration {
  display: none;
}
```

<!-- more -->

链接失效

```css
selector {
pointer-events: none;
}
```

元素内的文字及其子元素将不会被选中

```css
selector {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
```