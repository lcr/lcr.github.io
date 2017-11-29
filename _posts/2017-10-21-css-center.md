---
title: "CSS Center"
---

### CSS水平居中

#### 1.行内元素的水平居中 

```css
.parent {
    text-align:center;
}
```

#### 2.定宽块级元素的水平居中

```css
.parent {
    width: 800px;
    margin: 0 auto;
}
```

<!-- more -->

#### 3.不定宽块级元素的水平居中

```css
.parent {
    text-align: center;
}

.child {
    display: inline;
}
```

#### 4.flex布局实现水平居中

```css
.parent {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content:center;
    justify-content: center;
}
```

#### 5.一大一小块级元素的水平居中

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    left: 50%;
    width: 800px;
    margin-left: -400px;
}
```

[Demo](/demo/css-center-horizontal.html){:target="_blank"}  

### CSS垂直居中

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

#### 3.flex布局实现垂直居中

```css
.parent {
    display: flex;
    align-items: center;
}
```

<!-- more -->

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