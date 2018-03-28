---
title: "返回顶部的方法"
---

### JavaScript弹性返回顶部

html:
```html
<a href="javascript:" id="backTop"></a>
```

css:

```css
#backTop {
    display: none;
}
```

js:

```javascript
window.onload = function () {
    var btn = document.getElementById('backTop');
    var winH = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    window.onscroll = function () {
        var toTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (toTop >= winH) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    };
    btn.onclick = function () {
        timer = setInterval(function () {
            var toTop = document.body.scrollTop || document.documentElement.scrollTop;
            var speed = Math.ceil(toTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = toTop - speed;
            isTop = true;
            if (toTop === 0) {
                clearInterval(timer);
            }
        }, 50);
    };
};
```

<!-- more -->

[Demo](/demo/js-back-to-top.html){:target="_blank"}

---

### jQuery弹性返回顶部

html:

```html
<a id="backTop"></a>
```

css:

```css
#backTop {
    display: none;
}
```

JavaScript

```javascript
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#backTop").fadeIn(600);
        } else {
            $("#backTop").fadeOut(600);
        }
    });
    $("#backTop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
```

[Demo](/demo/jquery-back-to-top.html){:target="_blank"}