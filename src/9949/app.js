var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var c = 1;
while(s[0] !== '# #') {
  var k = s.shift().split(' ');
  var n = parseInt(s.shift());
  console.log('Case ' + (c++));
  for(var i = 0; i < n; ++i) {
    console.log(s.shift().split('').map(function(e) {
      if(e.toLowerCase() === k[0] || e.toLowerCase() === k[1]) {
        return '_';
      }
      else {
        return e;
      }
    }).join(''));
  }
  console.log();
}
