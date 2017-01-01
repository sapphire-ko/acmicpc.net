var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
var c = 0;
var x = 0;
s.forEach(function(e, i) {
  if(e === '(') {
    ++c;
  }
  else if(e === ')') {
    if(s[i - 1] === '(') {
      --c;
      x += c;
    }
    else {
      --c;
      ++x;
    }
  }
});
console.log(x);
