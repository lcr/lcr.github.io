---
title: "CSS水平居中"
---

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

[Demo](/demo/css-horizontal-center.html){:target="_blank"}  