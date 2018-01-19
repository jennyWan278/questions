var string = "我的账户余额:2,235,467.20";
// console.log(?);
// 请用js计算出我到底有多少钱（输出Number类型数字，代码尽量简洁，考虑通用情况）

var s= "我的账户余额:2,235,467.20";
var i=s.indexOf(':');
var m=s.substring(i+1);
var arr=m.split(',');
var nums=arr.join('');
var num=Number(nums);
console.log(num);
