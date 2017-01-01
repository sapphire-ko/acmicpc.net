var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = [];
n[0].forEach(function(e, i) {
  var x = [];
  for(var j = 0; j < n.length; ++j) {
    x.push(n[j][i]);
  }

  return x;
});
