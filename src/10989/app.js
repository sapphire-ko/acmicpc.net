var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) {
  if(a[e] === undefined) {
    a[e] = 1;
  }
  else {
    ++a[e];
  }
});
var c = '';
Object.keys(a).forEach(function(e) {
  for(var i = 0; i < a[e]; ++i) {
    c = c + e + '\n';
    if(c.length > 100000) {
      console.log(c.trim());
      c = '';
    }
  }
});
