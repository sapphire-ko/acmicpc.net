var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(''); });
s.forEach(function(e) {
  var c = 0;
  while(e.length > 0 && c >= 0) {
    var k = e.shift();
    if(k === '(') {
      ++c;
    }
    else {
      --c;
    }
  }
  console.log(c === 0 ? 'YES' : 'NO');
});
