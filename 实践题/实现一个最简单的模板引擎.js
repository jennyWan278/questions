/**
 render('我是{{name}}，年龄{{age}}，性别{{sex}}',{
    name:'姓名',
    age:18
})
 */

// 结果： 我是姓名，年龄18，性别undefined。

function render (str, data) {
    const reg = /{{([a-zA-Z$_][a-zA-Z$_0-9\.]*)}}/g;

    return str.replace(reg, (match, p) => {
     // console.log(macth)    //{{name}} {{age}} {{sex}}   匹配的子串。
     //console.log(p)   //name age sex   第n个括号匹配的字符串
        const paths = p.split('.');
       
        let result = data;

        while (paths.length > 0)
        {
            result = result[paths.shift()];
        }
        return String(result) || match;
    })
}

var result=render('我是:{{name}},年龄:{{age}},性别:{{sex}}',{name:'张三', age: 18 , sex: '男'});   //我是:张三,年龄:18,性别:男
