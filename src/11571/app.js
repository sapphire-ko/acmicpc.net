var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
console.log(n.map(function(e) {
  var x = [];
  var a = e[0];
  var b = e[1];
  var i = 0;
  var y = {};
  y[a] = i;
  if(a === 0) {
    return '0.(0)';
  }
  while(true) {
    x.push(Math.floor(a / b));
    a %= b;
    a *= 10;
    if(y[a] === undefined) {
      y[a] = ++i;
    }
    else {
      i = y[a];
      break;
    }
  }
  return x.shift() + '.' + x.splice(0, i - 1).join('') + '(' + x.join('') + ')';
}).join('\n'));
