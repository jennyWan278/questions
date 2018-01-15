// 尽可能全面正确的解析一个任意url的所有参数为Object。
var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';
// parseParam(url);
/**
 结果：
 {
    user: 'anonymous',
    id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
    city: '上海', // 中文
    enabled: true, // 未指定值的 key 约定值为 true
 }
 */
 function parseToMoney(url) {
      var urlArr=url.split('?');
      var urlPre= urlArr[0];
      var urlAft = urlArr[1];
      var key= urlAft.split('&');
      var u={};
      for(var i=0;i<key.length;i++) {
          var urls=key[i].split('=');
          var f=urls[0];
          u[f]=urls[1];
      }
  }
