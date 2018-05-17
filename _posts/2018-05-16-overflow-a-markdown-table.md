---
title: Markdown table 自动隐藏溢出
categories: Markdown
---

Jekyll网页中，使用Markdown table会产生一个问题：  

当table超过一定宽度，会在手机端或窄屏产生整个网页的横向滚动条 

解决办法是在Markdown table外围加一层div,然后写相应的CSS,实现table父节点横向滚动条自适应

注意：div与table之间需要有空行   

### Markdown

```html
<div class="table-wrapper" markdown="block">

Title 1 | Title 2 | Title 3
--- | --- | --- 
lorem | lorem ipsum | lorem ipsum dolor 
lorem ipsum dolor sit amet | lorem ipsum dolor sit amet consectetur | lorem ipsum dolor sit amet 
lorem ipsum dolor | lorem ipsum | lorem 
lorem ipsum dolor | lorem ipsum dolor sit | lorem ipsum dolor sit amet 

</div>  
```

### CSS

```css
.table-wrapper {
  overflow-x: auto;
}
```