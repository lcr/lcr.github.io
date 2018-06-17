---
title: 跨页面锚链展开手风琴菜单
categories: JavaScript
description: 使用location.hash获取URL锚部分，然后给手风琴菜单模拟点击事件
---

文章分类页是一个手风琴菜单，当在文章中点击分类，会跨页面跳转到分类页，并且由于锚定位，所属的分类标题会滑动到浏览器顶部。

可是如果手风琴菜单默认是折叠的呢？岂不是要访客再多一步点击操作，才能看到所属分类的全部文章标题，这不科学啊。

我认为友好的方式是：跳转后自动展开对应的菜单，访客可以看到所属分类下的所有文章标题。

实现方式也是很简单，由于使用了锚链接，可以用`location.hash`获取URL中锚部分（从#号开始的部分)，然后给手风琴菜单对应的分类标题模拟一个点击事件。

比如我的手风琴菜单是input check方式制作的，获取了hash之后，就把hash对应的input设为checked。

### JavaScript

```javascript
var urlHash = window.location.hash;
if (urlHash.length > 0) {
  var inputCheck = document.getElementById(urlHash);
  inputCheck.checked = true;
}
```

<!-- more -->

Demo请见文章结尾右下角，Click it.