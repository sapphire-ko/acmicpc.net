var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split('').sort(); });
var a = [];
s[0].forEach(function(e) {
  var k = s[1].indexOf(e);
  if(k === -1) {
    a.push(e);
  }
  else {
    s[1].splice(k, 1);
  }
});
console.log(a.length + s[1].length);
