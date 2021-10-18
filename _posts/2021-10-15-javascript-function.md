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

alert (factorial(5));//120
```

<!-- more -->

比较函数

```javascript
//这个比较函数可以适用于大多数数据类型，只要将其作为参数传递给sort()方法即可
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

//通过比较函数产生降序排序的效果，只要交换比较函数返回的值即可
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

//对于数值类型或者其valueOf()方法会返回数值类型的对象类型，只要用第二个值减第一个值即可
function compare(value1, value2){
    return value2 - value1;
}
var values = [0,1 ,5, 10,15];
values.sort(compare);
alert(values);//15,10,5,1,0
```


