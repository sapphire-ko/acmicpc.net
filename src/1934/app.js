function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  var g = gcd(a, b);
  return (a / g) * (b);
}

console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  return lcm(e[0], e[1]);
}).join('\n'));
