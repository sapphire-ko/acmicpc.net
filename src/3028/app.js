var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

var x = [true, false, false];
function a() {
  var tmp = x[0];
  x[0] = x[1];
  x[1] = tmp;
}
function b() {
  var tmp = x[1];
  x[1] = x[2];
  x[2] = tmp;
}
function c() {
  var tmp = x[0];
  x[0] = x[2];
  x[2] = tmp;
}

s.forEach(function(e) {
  switch(e) {
  case 'A': a(); break;
  case 'B': b(); break;
  case 'C': c(); break;
  }
});
console.log(x.indexOf(true) + 1);
