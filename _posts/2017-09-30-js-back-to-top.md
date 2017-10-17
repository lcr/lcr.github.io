---
title: "JavaScript back to top"
---

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

[Demo](/demo/js-backtop-animation.html){:target="_blank"}  