var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var p = [2];
for(var i = 3; i <= Math.pow(10, n); i += 2) {
  if(p.map(function(e) { return (i % e !== 0); }).reduce(function(prev, curr) { return prev & curr; })) {
    p.push(i);
  }
  console.log(i + ' ' + p.length);
}
// for(var i = Math.pow(10, (n - 1)); i < Math.pow(10, n); ++i) {
//   var k = i.toString();
//   var f = true;
//   for(var j = 1; j <= k.length; ++j) {
//     f &= (p.indexOf(parseInt(k.substr(0, j))) !== -1);
//   }
//   if(f) {
//     console.log(i);
//   }
// }
//console.log(p);
