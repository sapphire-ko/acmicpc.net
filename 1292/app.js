var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = [];
for(var i = 1; i <= input[1]; ++i) {
  for(var j = 1; j <= i; ++j) {
    a.push(i);
  }
}
console.log(a.splice(input[0] - 1, input[1] - input[0] + 1).reduce(function(prev, curr) { return prev + curr; }));
