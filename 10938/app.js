var x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('');
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return ('00000000' + e.charCodeAt().toString(2)).substr(-8); }).join('');
while(s.length % 5 !== 0) {
  s += '20000000';
}
var f = true;
console.log(s.match(/.{5}/g).map(function(e) {
  if(e.split('').indexOf('2') === -1 && f) {
    return x[parseInt(e, 2)];
  }
  else if(f) {
    f = false;
    return x[parseInt(e.replace(/2/g, 0), 2)];
  }
  else {
    return '=';
  }
}).join(''));
