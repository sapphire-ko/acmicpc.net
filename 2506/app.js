var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); })[0];
var s = 0;
var c = 0;
for(var i = 0; i < n.length; ++i) {
  if(n[i] === 0) {
    c = 0;
  }
  else {
    ++c;
    s += c;
  }
}
console.log(s);
