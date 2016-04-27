console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i, a) { return (i < (a.length - 1)); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  return (Math.min(e[2], e[3]) - Math.max(e[0], e[1])) + ' ' + (Math.max(e[2], e[3]) - Math.min(e[0], e[1]));
}).join('\n'));
