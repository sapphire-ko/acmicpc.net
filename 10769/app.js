var s = require('fs').readFileSync('/dev/stdin').toString().trim();
var a = s.match(/:-\)/g);
var b = s.match(/:-\(/g);
a = (a === null ? 0 : a.length);
b = (b === null ? 0 : b.length);
if(a === 0 && b === 0) {
  console.log('none');
}
else if(a === b) {
  console.log('unsure');
}
else if(a > b) {
  console.log('happy');
}
else {
  console.log('sad');
}
