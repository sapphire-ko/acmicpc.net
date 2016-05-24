console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return (b - a); }); }).map(function(e) {
  if(e[0] === e[3]) {
    return 50000 + e[0] * 5000;
  }
  else if(e[0] === e[2] || e[1] === e[3]) {
    return 10000 + e[1] * 1000;
  }
  else if(e[0] === e[1] && e[2] === e[3]) {
    return 2000 + e[0] * 500 + e[2] * 500;
  }
  else if(e[0] === e[1]) {
    return 1000 + e[0] * 100;
  }
  else if(e[1] === e[2]) {
    return 1000 + e[1] * 100;
  }
  else if(e[2] === e[3]) {
    return 1000 + e[2] * 100;
  }
  else {
    return e[0] * 100;
  }
}).sort(function(a, b) { return (b - a); })[0]);
