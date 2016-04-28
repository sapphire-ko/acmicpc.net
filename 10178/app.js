console.log('You get ' + require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  return (Math.floor(x[0] / x[1]) + ' piece(s) and your dad gets ' + (x[0] % x[1]));
}).join(' piece(s).\nYou get ') + ' piece(s).');
