console.log(Math.max.apply(Math, require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return i !== 0; }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return b - a; }); }).map(function(e) {
  if(e[0] === e[2]) {
    return 10000 + e[0] * 1000;
  }
  else {
    if(e[0] === e[1] || e[1] === e[2]) {
      return 1000 + e[1] * 100;
    }
    else {
      return e[0] * 100;
    }
  }
})));
