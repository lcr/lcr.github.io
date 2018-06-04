---
title: Anchor smooth scroll
categories: [JavaScript,jQuery]
---

## Using JavaScript

### HTML

```html
<a class="anchor" href="#anchor">click me</a>
<a id="anchor"></a>
```

### JavaScript

```javascript
var anchorLink = document.querySelector(".anchor"),
  target = document.getElementById("anchor");
anchorLink.addEventListener("click", function (e) {
  if (window.scrollTo) {
    e.preventDefault();
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
  }
});
```

<!-- more -->

---

## Using jQuery

### jQuery

```javascript
$(function () {
    $('a[href*=#],area[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    800);
                return false;
            }
        }
    });
});
```

END