var a = 0, b = 0;
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); }).forEach(function(e) {
  if(e !== 0) {
    a += Math.ceil((e + 1) / 30) * 10;
    b += Math.ceil((e + 1) / 60) * 15;
  }
});
if(a === b) {
  console.log('Y M ' + a);
}
else if(a < b) {
  console.log('Y ' + a);
}
else {
  console.log('M ' + b);
}
