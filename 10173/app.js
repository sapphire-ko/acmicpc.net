console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i, a) { return (i < (a.length - 1)); }).map(function(e) {
  return e.toLowerCase().split('nemo').length === 1 ? 'Missing' : 'Found';
}).join('\n'));
