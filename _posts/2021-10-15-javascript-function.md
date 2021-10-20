---
title: JavaScript函数方法
categories: JavaScript
description: 函数方法封装
---

阶乘函数

```javascript
function factorial(num){
    if (num <=1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}
```

<!-- more -->

比较函数

```javascript
//适用于大多数数据类型，只要将其作为参数传递给sort()方法即可
function compare(value1,value2){
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2){
        return 1;
    }else {
        return 0;
    }
}
var values = [0,1 ,5, 10,15];
values.sort(compare);
alert(values); //0，1，5，10，15

//交换比较函数返回的值即可产生降序排序的效果
function compare(value1,value2){
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2){
        return -1;
    }else {
        return 0;
    }
}
var values = [0,1 ,5, 10,15];
values.sort(compare);
alert(values);//15,10,5,1,0

//数值类型或valueOf()会返回数值类型的对象类型，用第二个值减第一个值即可
function compare(value1, value2){
    return value2 - value1;
}
var values = [0,1 ,5, 10,15];
values.sort(compare);
alert(values);//15,10,5,1,0
```

最大值最小值
```javascript
//找到一组数值中的最小值和最大值
var max = Math.max(3,54,32,16);
var min = Math.min(3,54,32,16);

//找到数组中的最大或最小值
var values = [1,2,3,4,5,6,7,8];
var max = Math.max.apply(Math,values);
```