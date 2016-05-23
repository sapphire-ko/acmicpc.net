var k = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var s = k.shift().split(' ').map(function(e) { return parseInt(e); });
var n = s[0], m = s[1];
var a = k.splice(0, n).map(function(e) { return parseInt(e); });
var b = k.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = [a];
var z = Math.ceil(Math.log2(a.length));
for(var i = 1; i <= z; ++i) {
  var t = z - i + 1;
  x.push([]);
  for(var j = 0; j < Math.pow(2, t); j += 2) {
    var p = x[i - 1][j];
    var q = x[i - 1][j + 1];
    p = (p === undefined ? Infinity : p);
    q = (q === undefined ? Infinity : q);
    x[i].push(Math.min(p, q));
  }
}
console.log(x);
console.log(b.map(function(e) {
  var i = e[0];
  var w = [];
  while(i !== e[1]) {
    if(i % 2 === 0) {
      w.push(x[0][i]);
      ++i;
    }
    else {
      var r = Math.floor(Math.log2())
    }
  }
  console.log(w);
}));
