---
title: 锚点跳转并展开手风琴
categories: JavaScript
description: 使用location.hash获取URL锚部分，然后给手风琴对应的项目模拟一个点击事件
---

假设文章分类都在同一分类页，分类页有分类名称和文章标题，并且用手风琴把文章标题折叠起来，点击某一分类名称，会展开对应的文章标题。[Demo](/archive){:target="_blank"}

当在文章中点击某一分类，会跨页面跳转到分类页，并定位到相对应的分类名称，而且由于锚定位，对应的分类名称会滑动到视口顶部。

可是手风琴默认是折叠的，岂不是要访客再点击一下分类名称，才能看到对应的文章标题，这不科学啊。

我认为友好的方式是：跳转后自动展开对应分类名称的文章标题。

实现方式也是很简单，由于使用了锚链，可以用`location.hash`获取URL中锚部分，然后给手风琴对应的分类名称模拟一个点击事件。

### JavaScript

```javascript
var urlHash = window.location.hash;
if (urlHash.length > 0) {
  document.getElementById(urlHash).click();
}
```

<!-- more -->

Demo请见文章结尾右下角，Click it.