console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = parseInt(e);
  var m = x;
  while(true) {
    if(x === 1 || x === 2 || x === 4) {
      break;
    }
    else if(x % 2 === 0) {
      x /= 2;
    }
    else {
      x *= 3;
      x += 1;
    }
    m = Math.max(m, x);
  }
  return m;
}).join('\n'));
