function c(k) {
  var c = 0;
  var i = 1;
  while(true) {
    var b = Math.floor(k / i);
    var c = (k % i);
    var a = Math.floor(b / 10);
    b %=  10;

    if(a === 0) {
      return c;
    }
    if(b === 0) {
      c += (a - 1) * i + c + 1;
    }
    else {
      c += (a * i);
    }
    i *= 10;
  }
}
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  return c(e[1]);
}));
