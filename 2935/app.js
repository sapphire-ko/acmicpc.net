var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
if(s[1] === '+') {
  var a = s[0].split('');
  var b = s[2].split('');
  var c = '';
  while(a.length > 0 || b.length > 0) {
    var x = a.pop();
    var y = b.pop();
    x = (x === undefined ? 0 : x);
    y = (y === undefined ? 0 : y);
    c = (parseInt(x) + parseInt(y)) + c;
  }
  console.log(c);
}
else {
  var a = s[0].split('');
  var b = s[2].split('');
  var c = '';
  while(a.length > 0 || b.length > 0) {
    if(a.pop() === '0') {
      c += '0';
    }
    if(b.pop() === '0') {
      c += '0';
    }
  }
  c = '1' + c;
  console.log(c);
}
