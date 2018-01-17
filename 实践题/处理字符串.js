/*
创建一个方法，让字符串有个自增
如果输入的字符串是数字结尾，需要把这个数字加1
如果字符串没有数字结尾，在字符串尾部追加1

举例：
foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

注意：如果字符串中的数字以0开头，0需要被保留
*/

function str(val) {
    var pre=val.substring(0,val.length - 1);
    var last=val.substring(val.length-1);
    var type=typeof last;
    if (last != null) {
        var r, re;
        re = /\d/; //\d表示数字
        r = last.match(re);
        if(r==last)
        {
            last++;
        }
        else{
            last = last + '1'
        }
    }
    var value=pre+last; 
    return value;         
}
