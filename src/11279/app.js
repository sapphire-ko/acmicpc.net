var a = [];
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).forEach(function(e) {
  if(e === 0) {
    if(a.length > 0) {
      a.sort(function(a, b) { return (b - a); });
      console.log(a.pop());
    }
    else {
      console.log(0);
    }
  }
  else {
    a.push(e);
  }
});
