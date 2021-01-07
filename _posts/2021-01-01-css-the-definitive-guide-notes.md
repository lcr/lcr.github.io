---
title: CSS权威指南笔记
categories: CSS
description: CSS权威指南第四版的读书笔记，由XMind制作思维导图然后在软件导出为markdown格式
---

## 文档

### 元素的形式分为置换元素和非置换元素；元素的显示类型分为块级元素和行内元素

### 关联方式：外部样式表；内部样式表；行内样式；@import

### 规则结构：选择符selector {属性property: 值value;} /* 注释 */

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

- h1 em 后代选择符，层级间隔可以是无限
- h1 > strong 选择子元素，只选择直接子代
- h1 + p 选择紧邻同胞，p紧跟h1且属同一父元素
- h2 ~ ol 选择后续同胞，属同一父元素，紧跟或非紧跟都匹配

### 伪类选择符

- 结构伪类

	- :root 选择文档根元素如html，rss
	- :empty 选择空元素，没有内容没有空白，包含img，input和没有内容的Textarea）
	- :only-child 选择唯一的子代
	- :only-of-type 选择同胞中唯一的那种元素
	- :first-child 选择第一个子代
	- :last-child 选择最后一个子代
	- :first-of-type 选择一个元素中某种元素的第一个
	- :last-of-type 选择一个元素中某种元素的最后一个
	- :nth-child(n) 选择每第n个子元素
	- :nth-child(odd)选择奇数位的子代
	- :nth-child(even)选择偶数位的子代

- 动态伪类

	- :link 超链接
	- :visited 已访问的超链接
	- :focus 获得键盘输入焦点
	- :hover 鼠标指针放置其上
	- :active 鼠标按下

- UI状态伪类

	- :enabled 接受输入的元素
	- :disabled 不接受输入的元素
	- :required 必须输入值的输入框

- 否定伪类:not()，选择不满足条件的元素

### 伪元素选择符

- ::first-letter 装饰非行内元素的首字母
- ::first-line 装饰块级元素的首行
- ::before 装饰或创建前置内容元素
- ::after 装饰或创建后置内容元素

## 特指度和层叠

### 特指度

- 行内样式 1,0,0,0
- ID属性值 0,1,0,0
- 类属性值、属性选择器、伪类 0,0,1,0
- 元素和伪元素 0,0,0,1
- 通用选择符 0,0,0,0，连结符没有特指度
- !important标记的规则比没有这个标记的权重高

### 继承

- border属性的边框不继承，多数盒模型属性不继承，包括外边距、内边距、背景、边框
- 通用选择符应用于全部元素，特指度为0，继承的值没有特指度，通常不滥用通用选择符

## 值和单位