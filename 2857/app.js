var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var x = [];
s.forEach(function(e, i) {
  if(e.split('FBI').length !== 1) {
    x.push(i + 1);
  }
});
if(x.length === 0) {
  console.log('HE GOT AWAY!');
}
else {
  console.log(x.join(' '));
}
