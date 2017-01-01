console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = parseInt(e);
  var k;
  for(var i = 0; i <= Math.sqrt(x); ++i) {
    if((i + Math.pow(i, 2)) <= x) {
      k = i;
    }
  }
  return k;
}).join('\n'));
