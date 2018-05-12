---
title: "CSS居中的方法"
categories: CSS/SCSS
---

## CSS水平居中

1.行内元素的水平居中 
```css
.parent {
    text-align:center;
}
```

2.定宽块级元素的水平居中
```css
.parent {
    width: 600px;
    margin: 0 auto;
}
```

<!-- more -->

3.不定宽块级元素的水平居中
```css
.parent {
    text-align: center;
}

.child {
    display: inline;
}
```

4.flex布局实现水平居中
```css
.parent {
    display: flex;
    justify-content: center;
}
```

5.一大一小块级元素的水平居中
```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    left: 50%;
    width: 600px;
    margin-left: -300px;
}
```

### Demo

<iframe height='300' scrolling='no' title='CSS center horizontal' src='//codepen.io/lcrccr/embed/preview/yKGRwM/?height=300&theme-id=33119&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/yKGRwM/'>CSS center horizontal</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## CSS垂直居中

1.行内元素垂直居中  
```css
.parent {
    height: 100px;
    line-height: 100px;
}
```

2.父元素固定 子元素为多行内联文本的垂直居中
```css
.parent {
    display: table-cell;
    vertical-align: middle;
}
```

3.flex布局实现垂直居中
```css
.parent {
    display: flex;
    align-items: center;
}
```

4.定宽块级元素的垂直居中
```css
.parent {
    position: relative;
}

.child {
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
margin: auto 0;
}
```

5.一大一小块级元素的垂直居中
```css
.parent {
position: relative;
}

.child {
position: absolute;
top: 50%;
margin-top: -25px;
height: 50px;
}
```

### Demo

<iframe height='300' scrolling='no' title='CSS center vartical' src='//codepen.io/lcrccr/embed/preview/oqJQXm/?height=300&theme-id=33119&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/lcrccr/pen/oqJQXm/'>CSS center vartical</a> by Leslie Lai (<a href='https://codepen.io/lcrccr'>@lcrccr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>