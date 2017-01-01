var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
while(s.length > 0) {
  if(s.shift().split(' ')[1] === 'C') {
    console.log(s.shift().split(' ').map(function(e) {
      return e.charCodeAt() - 'A'.charCodeAt() + 1;
    }).join(' '));
  }
  else {
    console.log(s.shift().split(' ').map(function(e) {
      return String.fromCharCode(parseInt(e) + 'A'.charCodeAt() - 1);
    }).join(' '));
  }
}
