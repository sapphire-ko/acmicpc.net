var s = require('fs').readFileSync('/dev/stdin').toString().split('\n').reverse();
var a = parseInt(s.pop());
while(s[s.length - 1] !== '=') {
  a = Math.floor(eval(a + s.pop() + s.pop()));
}
console.log(a);
