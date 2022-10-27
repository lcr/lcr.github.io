---
title: CSS布局 
categories: CSS 
description: CSS layout 布局
---

- [水平垂直居中](#水平垂直居中)
    - [flex居中](#flex居中)
    - [行内元素居中](#行内元素居中)
    - [元素定宽高的居中](#元素定宽高的居中)
    - [transform居中](#transform居中)
    - [table-cell居中](#table-cell居中)
    - [gird居中](#gird居中)

<!-- more -->

## <a name="水平垂直居中">水平垂直居中</a>

### <a name="flex居中">flex居中</a>

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### <a name="行内元素居中">行内元素居中</a>

```css
/*   行内元素居中方法一   */
.container {
    text-align: center;
    height: 400px;
    line-height: 400px;
}

.parent {
    text-align: center;
    height: 400px;
    line-height: 400px;
}

.child {
    display: inline-block;
}


/*   多行文本垂直居中方法一   */
.container {
    display: table-cell;
    vertical-align: middle;
    height: 400px;
}


/*   多行文本垂直居中方法二   */
.parent {
    height: 400px;
    line-height: 400px;
}

.child {
    display: inline-block;
    vertical-align: middle;
    line-height: 1.5;
}
```

### <a name="元素定宽高的居中">元素定宽高的居中</a>

```css
/*   方法一：absolute + 负值margin   */
.parent {
    position: relative;
    height: 400px;
}

.child {
    position: absolute;
    left: 50%;
    margin-left: -200px;
    width: 400px;
    top: 50%;
    margin-top: -100px;
    height: 200px;
}


/*   方法二：absolute + margin auto   */
.parent {
    position: relative;
    height: 400px;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 50%;
    height: 50%;
}


/*   方法三：absolute + calc   */
.parent {
    position: relative;
    height: 400px;
}

.child {
    position: absolute;
    left: calc(50% - 200px);
    width: 400px;
    top: calc(50% - 100px);
    height: 200px;
}
```

### <a name="transform居中">transform居中</a>

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*   水平居中 left: 50%;transform: translate(-50%, 0);   */
}
```

### <a name="table-cell居中">table-cell居中</a>

```css
.parent {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}

.child {
    display: inline-block;
}
```

### <a name="gird居中">gird居中</a>

```css
.parent {
    display: grid;
    justify-item: center;
    align-item: center;
}
```