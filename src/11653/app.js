var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
if(n >= 2) {
  var k = 2;
  while(n > 1) {
    if(n % k === 0) {
      console.log(k);
      n /= k;
    }
    else {
      ++k;
    }
  }
}
