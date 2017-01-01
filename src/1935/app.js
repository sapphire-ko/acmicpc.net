var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).reverse();
var expr = input.pop();
var variable = input.reverse().map(function(e) { return parseInt(e); });
var stack = [];
expr.split('').forEach(function(e) {
  switch(e) {
  case '+':
  case '-':
  case '*':
  case '/':
    var a = stack.pop(), b = stack.pop();
    stack.push(eval(b + e + a));
    break;
  default:
    stack.push(parseInt(variable[e.charCodeAt() - 65]));
  }
});
console.log(stack[0].toFixed(2));
