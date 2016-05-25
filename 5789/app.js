console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  return (e[e.length / 2 - 1] === e[e.length / 2] ? 'Do-it' : 'Do-it-Not');
}).join('\n'));
