var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = parseInt(s.shift().split(' ')[1]);
var x = s.pop().split('');
var v = {};
var u = [];
for(var i = 0; i < k; ++i) {
  var t = [];
  for(var j = 0; j < x.length; ++j) {
    var a = (j === 0 ? x[x.length - 1] : x[j - 1]);
    var b = x[j];
    var c = (j === (x.length - 1) ? x[0] : x[j + 1]);
    if((a === b && a === c) || (a !== b) && (b !== c) && (c !== a)) {
      t.push('B');
    }
    else {
      var z = [a, b, c].sort(function(p, q) { return (p.charCodeAt() - q.charCodeAt()); }).join('');
      if((z === 'GRR') || (z === 'BGG') || (z === 'BBR')) {
        t.push('R');
      }
      else {
        t.push('G');
      }
    }
  }
  x = t;
  var z = x.join('');
  if(v[z] === undefined) {
    v[z] = i;
    u.push(z);
  }
  else {
    break;
  }
}
var w = (i - v[z]);
var y = (k - v[z]);
var a = { 'R': 0, 'G': 0, 'B': 0 };
u[y % w].split('').forEach(function(e) {
  ++a[e];
});
console.log(a['R'] + ' ' + a['G'] + ' ' + a['B']);
