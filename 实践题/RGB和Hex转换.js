/*
实现一个rgb()方法 输入RGB数值返回HEX值
有效数值在0~255之间

预期结果
 rgb(255, 255, 255) // returns FFFFFF
 rgb(255, 255, 300) // returns FFFFFF
 rgb(0,0,0) // returns 000000
 rgb(148, 0, 211) // returns 9400D3
 */

function rgb(x,y,z) {
    var color=[x,y,z];
    var hex = "#";

    for (var i = 0; i < 3; i++) {
        // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
        // 如果结果是一位数，就在前面补零。例如： A变成0A, 如果有两位数，
        hex += ("0" + color[i].toString(16)).slice(-2);
    }
    return hex;
};
var rg=rgb(125,125,125);  //#7d7d7d
