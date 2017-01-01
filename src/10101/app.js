var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); });
if(n.reduce(function(p, c) { return (p + c); }) === 180) {
  if(n[0] === 60 && n[2] === 60) {
    console.log('Equilateral');
  }
  else if(n[0] === n[1] || n[1] === n[2]) {
    console.log('Isosceles');
  }
  else {
    console.log('Scalene');
  }
}
else {
  console.log('Error');
}
