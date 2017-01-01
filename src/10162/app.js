var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
if(n % 10 === 0) {
  var a = 0, b = 0, c = 0;
  while(n >= 5 * 60) {
    ++a;
    n -= 5 * 60;
  }
  while(n >= 60) {
    ++b;
    n -= 60;
  }
  while(n >= 10) {
    ++c;
    n -= 10;
  }
  console.log(a + ' ' + b + ' ' + c);
}
else {
  console.log(-1);
}
