console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i, a) { return (i < (a.length - 1)); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); }); }).map(function(e) {
  if(e[0] === e[2]) {
    return 'Equilateral';
  }
  else if(e[0] === e[1] || e[1] === e[2]) {
    return 'Isosceles';
  }
  else if(e[0] + e[1] <= e[2]) {
    return 'Invalid';
  }
  else {
    return 'Scalene';
  }
}).join('\n'));
