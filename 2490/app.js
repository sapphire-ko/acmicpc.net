console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return a - b; }); }).map(function(e) {
  if(e[0] === 1) {
    return 'E';
  }
  if(e[1] === 1) {
    return 'A';
  }
  if(e[2] === 1) {
    return 'B';
  }
  if(e[3] === 1) {
    return 'C';
  }
  return 'D';
}).join('\n'));
