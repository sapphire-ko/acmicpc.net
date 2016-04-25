var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); });
var stack = [];
console.log(input.map(function(e) {
  var c = e.split(' ');
  switch(c[0]) {
  case 'push':
    stack.push(c[1]);
    return;
  case 'pop':
    return (stack.length === 0 ? -1 : stack.pop());
  case 'size':
    return stack.length;
  case 'empty':
    return (stack.length === 0 ? 1 : 0);
  case 'top':
    return (stack[stack.length - 1] === undefined ? -1 : stack[stack.length - 1]);
  }
}).filter(function(e) { return e !== undefined; }).join('\n'));
