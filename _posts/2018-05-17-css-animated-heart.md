---
title: CSS跳动的爱心
categories: CSS/SCSS
---

### HTML
```html
<span class="heart">❤</span>
```

### CSS
```css
.hearts {
  display: inline-block;
  color: hotpink;
  -webkit-animation: heart .4s infinite alternate;
  animation: heart .4s infinite alternate;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes heart {
  100% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes heart {
  100% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
```

<iframe height='300' scrolling='no' title='Gdwqpx' src='//codepen.io/lcrccr/embed/preview/Gdwqpx/?height=300&theme-id=33119&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/Gdwqpx/'>Gdwqpx</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

-END-