var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var x = s[0].match(new RegExp(s[1], 'g'));
if(x === null) {
  console.log(0);
}
else {
  console.log(x.length);
}
