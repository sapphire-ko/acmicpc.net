var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var m = {};
for(var i = 1; i < input.length; ++i) {
  if(m[input[i]]) {
    ++m[input[i]];
  }
  else {
    m[input[i]] = 1;
  }
}
var output = [];
for(var k in m) {
  if(m[k] % 2 === 1) {
    output.push(k);
  }
}
console.log(output.join('\n'));
