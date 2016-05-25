var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = s.shift().split(' ').map(function(e) { return parseInt(e); });
s.shift();
var a = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var b = {};
Object.keys(a).forEach(function(e) {
  b[a[e]] = e;
});
console.log(parseInt(s[0].split(' ').map(function(e) { return parseInt(e); }).map(function(e) {
  return a[e];
}).join(''), k[0]).toString(k[1]).split('').map(function(e) {
  return b[e];
}).join(' '));
