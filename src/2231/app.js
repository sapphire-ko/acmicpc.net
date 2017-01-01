var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = 1;
while(true) {
  if(a === n) {
    a = 0;
    break;
  }
  var x = a + a.toString().split('').reduce(function(prev, curr) { return prev + parseInt(curr); }, 0);
  if(x === n) {
    x = a;
    break;
  }
  ++a;
}
console.log(a);
