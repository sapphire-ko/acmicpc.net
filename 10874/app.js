console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e, i) {
  if(e === '1 2 3 4 5 1 2 3 4 5') {
    return (i + 1);
  }
  else {
    return false;
  }
}).filter(function(e) { return e; }).join('\n'));
