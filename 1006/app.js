var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
console.log(Array.apply(null, Array(parseInt(input.pop()))).map(function() {
  var t = input.pop().split(' ').map(function(e) { return parseInt(e); });
  var n = t[0], w = t[1];
  var o = [input.pop(), input.pop()].map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); })});
  var z = [];
  for(var i = 0; i < 2; ++i) {
    z.push([]);
    for(var j = 0; j < n; ++j) {
      z[i].push(false);

      var a = o[i][j];
      var f = (i === 0 ? o[1][j] : w);
      var l = o[i][(j === 0 ? n : j) - 1];
      var r = o[i][(j + 1) % n];

      if((a + f) > w && (a + l) > w && (a + r) > w) {
        z[i][j] = true;
        continue;
      }
    }
  }
  console.log(o);
  console.log(z);
}));
