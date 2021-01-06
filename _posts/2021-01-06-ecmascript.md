---
title: ECMAScript读书笔记
categories: CSS
description: CSS权威指南第四版的读书笔记，由XMind制作思维导图然后在软件导出为markdown格式
---


## 基本概念

### 语法：标识符用驼峰大小写，语句以分号结束，代码块用花括号

### 变量：var操作符定义变量，变量分为局部变量和全局变量，一条语句定义多个变量用分号隔开

### 数据类型

- undefined：声明变量但未对其初始化的值，对未初始化和未声明的变量执行typeof都返回undefined值，显式初始化变量用以区分变量是否还没有被声明
- null：空对象指针，typeof检测null值会返回object，定义的变量准备用来保存对象应显式初始化为null
- boolean：true和false，转换为false的值有false，空字符串，0和NaN，null，undefined
- number

	- 浮点数值进行算术计算会产生舍入误差
	- 任何涉及NaN的操作都返回NaN，NaN与任何值及其本身都不相等。isNaN()函数接受任何类型的参数，不能转换为数值的值都返回true
	- number()用于转换任何数据类型，parseInt()和parseFloat()专门用于把字符串转换成数值

- string

	- toString()把数值、布尔值、对象和字符串转换为字符串
	- String()的值有toString()方法则调用，值是null则返回"null"，值是undefined则返回"undefined"

- 复杂数据类型object

### 操作符

- 一元操作符：只能操作一个值，递增(++)和递减(--)
- 一元加和减操作符：( + )( - )用于基本的算术运算，也可以用于转换数据类型
- 位操作符：按位非( ~ )，按位与( & )，按位或( | )，按位异或( ^ )，左移( << )，有符号右移( >> )，无符号右移( >>> )
- 布尔操作符：逻辑非( ! )，逻辑与( && )，逻辑或( || )
- 乘性操作符：乘法( * )，除法( / )，求模( % )
- 加性操作符：加法( + )，减法( - )
- 关系操作符：小于( < )，大于( > )，小于等于( <= )，大于等于( >= )
- 相等操作符：相等( == )，不相等( != )，全等( === )，不全等( !== )
- 条件操作符：var max = (num1 > num2) ? num1 : num2;
- 赋值操作符：简单赋值操作符( = )，复合赋值操作符就是等号前面添加乘性操作符、加性操作符或位操作符
- 逗号操作符：( , )用以一条语句中执行多个操作，用于赋值时会返回表达式最后一项

### 语句

- if语句 if (condition) statement1 else statement2
- do-while后测试循环语句 do {statement} while (expression)，循环体内的代码至少要被执行一次
- while前测试循环语句，while(expression) {statement}，循环体内的代码被执行之前会对条件求值
- for前测试循环语句，for (initialization; post-loop-expression) {statement}，可以在执行循环之前初始化变量和定义循环后要执行的代码
- for-in精准迭代语句，for (property in expression) {statement}用来枚举对象的属性
- label语句，label: statement，可以在代码中添加标签，以便将来使用
- break和continue语句，用于在循环中精确地控制代码的执行；break会立即退出循环，强制继续执行循环后面的语句；continue也立即退出循环，并从循环的顶端继续执行
- with语句，with (expression) statement，将代码的作用域设置到一个特定的对象中，简化多次编写同一对象的工作
- switch流控制语句，简化if语句 switch (expression) {case value: statement break;case value: statement break;default: statement}

### 函数