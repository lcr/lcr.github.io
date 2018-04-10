---
title: "CSS animation hover underline"
---

### HTML

```html
<a href="">CSS animation hover underline</a>
```

### CSS

 ```css
a {
    display: inline-block;
    text-decoration: none;
}

a:after {
    display: block;
    /*margin: auto;  //center*/
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

<iframe height='300' scrolling='no' title='CSS animation hover underline' src='//codepen.io/lcrccr/embed/preview/WzLavq/?height=300&theme-id=33119&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/WzLavq/'>CSS animation hover underline</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>