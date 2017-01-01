var x = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' '); }).forEach(function(e) {
  if(e[1] === 'enter') {
    x[e[0]] = true;
  }
  else {
    delete x[e[0]];
  }
});
console.log(Object.keys(x).filter(function(e) { return x[e]; }).sort(function(a, b) { return b.localeCompare(a); }).join('\n'));
