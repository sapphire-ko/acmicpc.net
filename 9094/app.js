console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  var c = 0;
  for(var i = 1; i < (e[0] - 1); ++i) {
    for(var j = (i + 1); j < e[0]; ++j) {
      if((Math.pow(i, 2) + Math.pow(j, 2) + e[1]) % (i * j) === 0) {
        ++c;
      }
    }
  }
  return c;
}).join('\n'));
