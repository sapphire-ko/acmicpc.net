console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = [0, 0];
  e.toLowerCase().split('').forEach(function(e) {
    if(e === 'b') {
      ++x[1];
    }
    else if(e === 'g') {
      ++x[0];
    }
  });
  return e + ' is ' + (x[0] === x[1] ? 'NEUTRAL' : (x[0] < x[1] ? 'A BADDY' : 'GOOD'));
}).join('\n'));
