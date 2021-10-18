---
title: CSS居中的方法
categories: CSS
description: CSS水平居中、垂直居中、水平垂直居中的各种实现方法
---

## CSS水平居中

### 1.文本水平居中

```css
.parent {
    text-align:center;
}
```

### 2.定宽块级元素的水平居中

```css
.parent {
    margin: auto;
    width: 100px; /* <100% */
}
```

<!-- more -->

### 3.不定宽块级元素的水平居中

```css
.parent {
    text-align: center;
}

.child {
    display: inline;
}
```

### 4.flex布局实现水平居中

```css
.parent {
    display: flex;
    justify-content: center;
}
```

### 5.一大一小块级元素的水平居中  
大容器relative，小容器absolute，沿x轴右移50%，margin-left左移本身高度的50%

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

### 6.使用transform属性

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
}
```

---

## CSS垂直居中

### 1.文本垂直居中  
line-height等于height;

```css
.parent {
    height: 100px;
    line-height: 100px;
}
```

如有n行文字,line-height为height的n分之一  
或：
```css
.parent {
  line-height: 100px;
  height: 100px;
}

.child {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}
```

### 2.使用padding

```css
.parent {
    padding: 100px
}
```

### 3.父元素固定,子元素为多行内联文本的垂直居中

```css
.parent {
    display: table-cell;
    vertical-align: middle;
}
```

### 4.flex布局实现垂直居中

```css
.parent {
    display: flex;
    align-items: center;
}
```

### 5.定宽块级元素的垂直居中

```css
.parent {
    position: relative;
}

.child {
/* position:fixed; */
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
}
```

### 6.一大一小块级元素的垂直居中  
大容器relative，小容器absolute，沿y轴下移50%，margin-top上移本身高度的50%

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

### 7.使用transform属性

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
}
```