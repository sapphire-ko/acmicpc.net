var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
while(s.length > 0) {
  var x = s.splice(0, 6).filter(function(e, i) { return (i % 2 === 1); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
  var a = {};
  for(var i = 0; i < x[0].length; ++i) {
    for(var j = 0; j < x[1].length; ++j) {
      for(var k = 0; k < x[2].length; ++k) {
        a[x[0][i] + x[1][j] + x[2][k]] = true;
      }
    }
  }
  console.log(Object.keys(a).filter(function(e) {
    return (e.toString().match(/^[5|8]+$/) !== null);
  }).length);
}
