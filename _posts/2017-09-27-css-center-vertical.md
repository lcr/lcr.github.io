---
title: "CSS垂直居中"
---

#### 1.行内元素垂直居中  
```css
.parent {
    height: 100px;
    line-height: 100px;
}
```

#### 2.父元素固定 子元素为多行内联文本的垂直居中

```css
.parent {
    display: table-cell;
    vertical-align: middle;
}
```

<!-- more -->

#### 3.flex布局实现垂直居中

```css
.parent {
    display: flex;
    align-items: center;
}
```

#### 4.定宽块级元素的垂直居中

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

#### 5.一大一小块级元素的垂直居中

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

[Demo](/demo/css-center-vertical.html){:target="_blank"}