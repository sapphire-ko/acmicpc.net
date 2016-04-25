console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e, i) {
  if(i === 0) {
    return;
  }
  var x = e.split(' ').map(function(e) { return parseInt(e); });

  var c = 1;
  for(var i = 0; i < x[1]; ++i) {
    c *= x[0];
    c %= 10;
  }
  return (c === 0 ? 10 : c);
}).filter(function(e) { return e; }).join('\n'));
