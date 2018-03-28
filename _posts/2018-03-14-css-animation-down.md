---
title: "CSS动画下拉箭头"
---

html

```html
<a class="icon-down">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
        <path d="M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z"></path>
    </svg>
</a>
```

css

```css
.icon-down {
    position: relative;
    -webkit-animation: icon-down-animations 2s ease-in 1s infinite alternate;
    animation: icon-down-animations 2s ease-in 1s infinite alternate;
}
@-webkit-keyframes icon-down-animations {
    0% {
        top: 6px;
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        top: 0;
        opacity: 0;
    }
    100% {
        top: 0;
        opacity: 0;
    }
}
@keyframes icon-down-animations {
    0% {
        top: 6px;
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        top: 0;
        opacity: 0;
    }
    100% {
        top: 0;
        opacity: 0;
    }
}
```

<!-- more -->

## [Demo](/demo/css-animation-down.html){:target="_blank"}

---

## Using icon font and ::before

html

```html
<a class="icon-down"></a>
``` 

css

```css
.icon-down {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.icon-down:before {
    position: relative;
    -webkit-animation: icon-down-animations 2s ease-in 1s infinite alternate;
    animation: icon-down-animations 2s ease-in 1s infinite alternate;
    font-size: 32px;
    content: "\e902"; /*icon font code here*/
}
@-webkit-keyframes icon-down-animations {
    0% {
        top: 6px;
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        top: 0;
        opacity: 0;
    }
    100% {
        top: 0;
        opacity: 0;
    }
}
@keyframes icon-down-animations {
    0% {
        top: 6px;
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        top: 0;
        opacity: 0;
    }
    100% {
        top: 0;
        opacity: 0;
    }
}
```