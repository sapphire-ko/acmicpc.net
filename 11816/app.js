var s = require('fs').readFileSync('/dev/stdin').toString().trim();
if(s[0] === '0') {
  if(s.length === 1) {
    console.log(0);
  }
  else {
    if(s[1] === 'x') {
      console.log(parseInt(s, 16));
    }
    else {
      console.log(parseInt(s, 8));
    }
  }
}
else {
  console.log(s);
}
