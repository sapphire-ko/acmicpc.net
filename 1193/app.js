var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var c = 1;
while(((c * (c + 1)) / 2) < n) {
  ++c;
}
--c;
var x = [];
for(var i = 1; i < (c + 2); ++i) {
  x.push(i + '/' + ((c + 2) - i));
}
if(c % 2 === 0) {
  x = x.reverse();
}
console.log(x[n - ((c * (c + 1)) / 2) - 1]);
