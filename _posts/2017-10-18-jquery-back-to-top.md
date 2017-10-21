---
title: "jQuery back to top"
---

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