var j, o, i;
var max = 0;
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
for(var k = 0; k < s.length; ++k) {
  if(s[k] === 'J') {
    if(s[k - 1] === 'J') {
      ++j;
    }
    else {
      j = 1;
    }
  }
  else if(s[k] === 'O') {
    if(s[k - 1] === 'J') {
      o = 1;
    }
    else if(s[k - 1] === 'O') {
      ++o;
    }
  }
  else if(s[k] === 'I') {
    if(s[k - 1] === 'O') {
      i = 1;
    }
    else if(s[k - 1] === 'I') {
      ++i;
    }
    if(o <= j && o <= i) {
      max = Math.max(max, o);
    }
  }
}
console.log(max);
