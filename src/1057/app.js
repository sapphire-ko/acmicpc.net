var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').filter(function(e, i) { return (i === 0 ? false : e); }).map(function(e) { return parseInt(e); });
var a = input[0], b = input[1];
var count = 0;
while(a !== b) {
  ++count;
  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
}
console.log(count);
