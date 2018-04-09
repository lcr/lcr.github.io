---
title: "Back to top"
---

## Using JavaScript

### HTML

```html
<a href="javascript:" id="backTop"></a>
```

### CSS

```css
#backTop {
    display: none;
}
```

### JavaScript

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

### Demo

<iframe height='265' scrolling='no' title='JavaScript back to top' src='//codepen.io/lcrccr/embed/yKGQaz/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/yKGQaz/'>JavaScript back to top</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Using jQuery

HTML
```html
<a id="backTop"></a>
```
    
CSS
```css
#backTop {
    display: none;
}
```

jQuery
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

### Demo

<iframe height='265' scrolling='no' title='jQuery back to top' src='//codepen.io/lcrccr/embed/PRXxmZ/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/PRXxmZ/'>jQuery back to top</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>