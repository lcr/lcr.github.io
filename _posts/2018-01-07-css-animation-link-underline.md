---
title: "CSS链接下划线动画效果"
---

html:

```html
<a href="">CSS animation link underline</a>
```

css:

 ```css
a {
    display: inline-block;
    text-decoration: none;
}

a:after {
    display: block;
    margin: auto;
    width: 0;
    height: 2px;
    transition: width .5s ease, background-color .5s ease;
    content: '';
}

a:hover:after {
    width: 100%;
    background: #000;
}
```

## [Demo](/demo/css-animation-link-underline.html){:target="_blank"}