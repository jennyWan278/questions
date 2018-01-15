// 1234.56 => "1,234.56" , 123456789 => "123,456,789"
// parseToMoney(1234.56) return "1,234.56"

  function parseToMoney (val) {
      var valSp= val.split('.');
      var valPre= valSp[0];
      var valAft = valSp.length>1 ? '.'+ valSp[1]:'';
      var re=/(\d+)(\d{3})/;
      while(re.test(valPre)) {
          valPre=valPre.replace(re,'$1'+','+'$2');
      }
      return valPre+valAft;          
  }
