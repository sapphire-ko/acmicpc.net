var x = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('').forEach(function(e, i) { x[e] = ('00000' + i.toString(2)).substr(-5); });
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) {
  return (e === '=' ? '00000' : x[e]);
}).join('');
while(s.substr(-8) === '00000000') {
  s = s.substr(0, s.length - 8);
}
console.log(s.match(/.{8}/g).map(function(e) { return String.fromCharCode(parseInt(e, 2)); }).join(''));
