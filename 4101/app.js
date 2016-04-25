console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse().filter(function(e, i) { return (i !== 0); }).reverse().map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  return (e[0] > e[1] ? 'Yes' : 'No');
}).join('\n'));
