var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(s.shift());
var a = 'A'.charCodeAt();
for(var i = 0; i < t; ++i) {
  var c = {};
  var x = s.shift().split(' ').map(function(e) { return parseInt(e); });
  console.log(s.shift().trim().split('').map(function(e) {
    if(c[e] === undefined) {
      c[e] = String.fromCharCode((((e.charCodeAt() - a) * x[0] + x[1]) % 26) + a);
    }
    return c[e];
  }).join(''));
}
