var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
console.log(Array.apply(null, Array(parseInt(input.pop()))).map(function() {
  var p = [];
  Array.apply(null, Array(parseInt(input.pop()))).map(function() {
    p.push(input.pop().split(' ').map(function(e) { return parseInt(e); }));
  });
  var b = Array.from(p);
  p.forEach(function(e, i, a) {
    a.splice(i, 1);

    console.log(a);
  })
  return p;
}));
