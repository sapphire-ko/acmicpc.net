console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) {
  e = e.split(' ').map(function(e) { return parseInt(e); });
  return 2 - e[0] + e[1];
}).join('\n'));
