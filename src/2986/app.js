var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
if(n === 1) {
  console.log(0);
}
else {
  var k;
  for(var i = 2; i <= Math.sqrt(n); ++i) {
    if(n % i === 0) {
      k = i;
      break;
    }
  }
  console.log(k === undefined ? (n - 1) : (n - (n / k)));
}
