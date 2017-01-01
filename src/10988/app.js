var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
var f = true;
while(s.length > 1) {
  var a = s.pop();
  var b = s.reverse().pop();
  if(a !== b) {
    f = false;
  }
}
console.log(f ? 1 : 0);
