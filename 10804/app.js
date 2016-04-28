var x = [];
for(var i = 1; i <= 20; ++i) {
  x.push(i);
}
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).forEach(function(e) {
  var a = x.splice((e[0] - 1), (e[1] - e[0] + 1));
  a.forEach(function(f) {
    x.splice((e[0] - 1), 0, f);
  });
});
console.log(x.join(' '));
