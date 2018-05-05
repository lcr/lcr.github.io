---
title: Jekyll Markdown table overflow-X auto
---

Jekyll和GitHub Pages 创建的网页中，使用Markdown编写博客，其中有使用到table，有一个问题是：  

当table的宽超过一定宽度，会在手机端产生整个网页的横向滚动条，这个体验很不好  

有个解决办法是，在Markdown的table外围加一层div,然后写相应的css,实现自适应横向滚动条   

Markdown
```html
<\div class="table-wrapper" markdown="block"\>
Title 1 | Title 2 | Title 3
--- | --- | --- 
lorem | lorem ipsum | lorem ipsum dolor 
lorem ipsum dolor sit amet | lorem ipsum dolor sit amet consectetur | lorem ipsum dolor sit amet 
lorem ipsum dolor | lorem ipsum | lorem 
lorem ipsum dolor | lorem ipsum dolor sit | lorem ipsum dolor sit amet 
<\/div\>  
```

CSS

```css

.table-wrapper {
  overflow-x: auto;
}

```