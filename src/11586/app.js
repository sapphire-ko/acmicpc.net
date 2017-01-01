var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var x = n.pop();
n.reverse().pop();
switch(x) {
case '1':
  console.log(n.reverse().join('\n'));
  break;
case '2':
  console.log(n.reverse().map(function(e) { return e.split('').reverse().join(''); }).join('\n'));
  break;
case '3':
  console.log(n.join('\n'));
  break;
}
