var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.pop();
console.log(s.map(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  
}));
