var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = [];
var w = {
  '1': 4,
  '2': 8,
  '3': 7,
  '4': 2,
  '5': 1,
  '6': 6,
  '7': 5,
  '8': 0,
  '9': 3,
  '0': 9
};
for(var i = n[0]; i <= n[1]; ++i) {
  a.push(i.toString().split(''));
}
var t = a.sort(function(x, y) {
  var p = w[x[0]];
  var q = w[y[0]];
  var r = (x[1] === undefined ? -1 : w[x[1]]);
  var s = (y[1] === undefined ? -1 : w[y[1]]);
  return (p - q) || (r - s);
}).map(function(e) { return e.join(''); });
var z = '';
var c = 0;
while(t.length > 0) {
  z += t.shift() + ' ';
  ++c;
  if(c === 10) {
    console.log(z.trim());
    c = 0;
    z = '';
  }
}
console.log(z.trim());
