var s = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var x = s[1].split('');
console.log(s[0].split('').map(function(e, i) {
  var a = e.charCodeAt() - 97;
  var b = x[(i % x.length)].charCodeAt() - 97;
  return (a === -65 ? ' ' : String.fromCharCode(((a - b + 25) % 26) + 97));
}).join(''));
