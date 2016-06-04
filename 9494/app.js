var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
while(true) {
  var k = parseInt(s.shift());
  if(k === 0) {
    break;
  }
  var x = 0;
  s.splice(0, k).forEach(function(e) {
    if(e.length <= x) {
      return;
    }
    var a = e.split('');
    for(var i = x; i < a.length; ++i) {
      if(a[i] === ' ') {
        x = i;
        return;
      }
    }
    x = i;
  });
  console.log(x + 1);
}
