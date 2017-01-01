var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
if(n[0] < 2) {
  console.log('Before');
}
else if(n[0] === 2) {
  if(n[1] < 18) {
    console.log('Before');
  }
  else if(n[1] === 18) {
    console.log('Special');
  }
  else {
    console.log('After');
  }
}
else {
  console.log('After');
}
