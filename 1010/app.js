console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).map(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  var n = x[1];
  var k = x[0];

  var c = 1;
  if(x[0] > (x[1] / 2)) {
    for(var i = x[1]; i > x[0]; --i) {
      c *= i;
    }
    for(var i = (x[1] - x[0]); i > 0; --i) {
      c /= i;
    }
  }
  else {
    for(var i = x[1]; i > (x[1] - x[0]); --i) {
      c *= i;
    }
    for(var i = x[0]; i > 0; --i) {
      c /= i;
    }
  }
  return c;
}).join('\n'));
