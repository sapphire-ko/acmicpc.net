var s = require('fs').readFileSync('/dev/stdin').toString().trim().match(/.{6}/g);
var x = ['000000', '001111', '010011', '011100', '100110', '101001', '110101', '111010'];
var a = {};
for(var i = 0; i < 64; ++i) {
  var k = ('00000' + i.toString(2)).substr(-6);
  var t = x.indexOf(k);
  if(t === -1) {
    var y = x.map(function(e) { return e.split('').map(function(f, j) { return (f === k[j] ? 1 : 0); }).reduce(function(prev, curr) { return prev + curr; }); });
    var m = Math.max.apply(Math, y);
    var f = false;
    for(var j = 0; j < y.length; ++j) {
      if(j !== y.indexOf(m) && y[j] === m) {
        f = true;
        break;
      }
    }
    a[k] = (f ? false : String.fromCharCode(y.indexOf(m) + 65));
  }
  else {
    a[k] = String.fromCharCode(t + 65);
  }
}
var b = '';
for(var i = 0; i < s.length; ++i) {
  if(a[s[i]] === false) {
    b = (i + 1);
    break;
  }
  else {
    b += a[s[i]];
  }
}
console.log(b);
