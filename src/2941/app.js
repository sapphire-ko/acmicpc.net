var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
var i = 0;
var c = 0;
while(s.length > 0) {
  var x = s.shift();
  switch(x) {
  case 'c':
    if(s[0] === '=' || s[0] === '-') {
      s.shift();
    }
    break;
  case 'd':
    if(s[0] === '-') {
      s.shift();
    }
    else if(s[0] === 'z' && s[1] === '=') {
      s.shift();
      s.shift();
    }
    break;
  case 'l':
    if(s[0] === 'j') {
      s.shift();
    }
    break;
  case 'n':
    if(s[0] === 'j') {
      s.shift();
    }
    break;
  case 's':
    if(s[0] === '=') {
      s.shift();
    }
    break;
  case 'z':
    if(s[0] === '=') {
      s.shift();
    }
    break;
  }
  ++c;
};
console.log(c);
