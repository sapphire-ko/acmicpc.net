console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = e.split(' ');
  return x[1].split('').filter(function(e, i) { return (i !== (parseInt(x[0]) - 1)); }).join('');
}).join('\n'));
