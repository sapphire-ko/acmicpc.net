var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return parseInt(e); }).sort(function(a, b) { return b - a; });
if(n.pop() === 0) {
  if(n.reduce(function(prev, curr) { return prev + curr; }) % 3 === 0) {
    var s = '';
    while(n.length > 0) {
      s = n.pop() + s;
    }
    console.log(s + '0');
  }
  else {
    console.log(-1);
  }
}
else {
  console.log(-1);
}
