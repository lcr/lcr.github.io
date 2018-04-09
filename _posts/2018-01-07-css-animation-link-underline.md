---
title: "CSS hover underline animation"
---

### HTML

```html
<a href="">CSS animation link underline</a>
```

### CSS

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

<!-- more -->

### Demo

<iframe height='220' scrolling='no' title='CSS hover underline animation' src='//codepen.io/lcrccr/embed/WzLavq/?height=220&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/WzLavq/'>CSS hover underline animation</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>