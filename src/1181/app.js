console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).filter(function(e, i, a) { return (a.indexOf(e) === i); }).sort(function(a, b) {
  if(a.length < b.length) {
    return -1;
  }
  else if(a.length > b.length) {
    return 1;
  }
  else {
    if(a < b) {
      return -1;
    }
    else {
      return 1;
    }
  }
}).join('\n'));
