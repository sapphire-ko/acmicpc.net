var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var expr = input[1];
var stack = [];
input[0].split('').forEach(function(e, i) {
  var prev = '';
  if(expr.length !== 1) {
    prev = stack.slice((-expr.length) + 1).join('');
  }
  prev += e;
  if(prev === expr) {
    for(var i = 0; i < expr.length - 1; ++i) {
      stack.pop();
    }
  }
  else {
    stack.push(e);
  }
});
console.log(stack.length === 0 ? 'FRULA' : stack.join(''));
