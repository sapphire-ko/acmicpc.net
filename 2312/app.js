console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).map(function(e) {
  var a = {};
  var i = 2;
  while(e !== 1) {
    if(e % i === 0) {
      e /= i;
      if(a[i] === undefined) {
        a[i] = 1;
      }
      else {
        ++a[i];
      }
    }
    else {
      ++i;
    }
  }
  return Object.keys(a).map(function(e) {
    return e + ' ' + a[e];
  }).join('\n');
}).join('\n'));
