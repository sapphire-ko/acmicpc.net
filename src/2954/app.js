var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('').reverse();
var a = '';
while(s.length > 0) {
  var t = s.pop();
  switch(t) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    s.pop();
    s.pop();
    break;
  }
  a += t;
}
console.log(a);
