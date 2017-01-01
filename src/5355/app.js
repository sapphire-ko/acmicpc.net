console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').reduce(function(prev, curr, i) {
  if(i === 0) {
    return parseFloat(curr);
  }
  else {
    switch(curr) {
    case '@':
      return prev * 3;
    case '%':
      return prev + 5;
    case '#':
      return prev - 7;
    }
  }
}, 0).toFixed(2); }).join('\n'));
