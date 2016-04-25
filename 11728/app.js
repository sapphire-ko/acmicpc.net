var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).reverse(); });
var a = [];

var x = n[0].pop();
var y = n[1].pop();
while(x !== Infinity || y !== Infinity) {
  if(x < y) {
    a.push(x);
    x = n[0].pop();
  }
  else {
    a.push(y);
    y = n[1].pop();
  }
  if(x === undefined) {
    x = Infinity;
  }
  if(y === undefined) {
    y = Infinity;
  }
}
console.log(a.join(' '));
