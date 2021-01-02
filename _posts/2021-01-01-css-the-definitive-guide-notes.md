---
title: CSS权威指南笔记
categories: CSS
description: CSS权威指南第四版的读书笔记，由XMind制作思维导图然后在软件导出为markdown格式
---

## 文档

### 元素

- 形式：置换元素img,input...；非置换元素p,span...
- 显示方式：块级元素block；行内元素inline

### 引用

- 外部样式表<link href="sheet.css">
- 内部样式表<style>...</style>
- 行内样式<p style="..."></p>
- @import url(sheet.css)

### 结构

- 选择符selector {属性property: 值value;} /* 注释 */

## 选择符

### 元素选择符( element )

### 通用选择符( * )

### 类选择符( . class )

### ID选择符( #id )

<!-- more -->

### 属性选择符

- [foo] 属性foo
- [foo｜="bar"] 属性foo，值bar或以bar-开头
- [foo~="bar"] 属性foo，值包含bar的一组词
- [foo*="bar"] 属性foo，值包含子串bar
- [foo^="bar"] 属性foo，值bar开头
- [foo$="bar"] 属性foo，值bar结尾
- [foo="bar" i] 属性foo，值bar不区分大小写

### 文档结构选择

- h1 em 后代选择符
- h1 > strong 选择子元素
- h1 + p 选择紧邻同胞
- h2 ~ ol 选择后续同胞

### 伪类选择符

- :root 选择根元素如html，rss
- :empty 选择空元素，没有内容没有空白
- :only-child 选择唯一的子代

### 动态伪类

- :link 超链接
- :visited 已访问的超链接
- :focus 获得键盘输入焦点
- :hover 鼠标指针放置其上
- :active 鼠标按下

### UI状态伪类