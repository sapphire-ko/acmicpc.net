console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) {
  var c = 0;
  return e.split('').map(function(e) {
    c = (e === 'O' ? c + 1 : 0);
    return c;
  }).reduce(function(prev, curr) { return prev + curr; });
}).join('\n'));
