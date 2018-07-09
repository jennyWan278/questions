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
    var re1=/(^\w*?)([1-9]*$)/;
    var relArr= re1.exec(val);
    var pre= re1.exec(val)[1];
    var last=re1.exec(val)[2];
    if (last != null) {
        last++;
    } else{
        last = last + '1'
    }
    var value=pre+last; 
    return value;         
}
