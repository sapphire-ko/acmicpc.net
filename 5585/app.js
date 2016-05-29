var n = 1000 - parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = [500, 100, 50, 10, 5, 1];
var c = 0;
var i = 0;
while(n > 0) {
  if(n >= a[i]) {
    ++c;
    n -= a[i];
  }
  else {
    ++i;
  }
}
console.log(c);
