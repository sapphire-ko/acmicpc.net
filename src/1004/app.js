var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
console.log(Array.apply(null, Array(parseInt(input.pop()))).map(function() {
  var c = input.pop().split(' ').map(function(e) { return parseInt(e); });
  var a = {};
  Array.apply(null, Array(parseInt(input.pop()))).forEach(function(e, i) {
    var x = input.pop().split(' ').map(function(e) { return parseInt(e); });
    if(Math.pow(c[0] - x[0], 2) + Math.pow(c[1] - x[1], 2) < Math.pow(x[2], 2)) {
      a[i] = true;
    }
    if(Math.pow(c[2] - x[0], 2) + Math.pow(c[3] - x[1], 2) < Math.pow(x[2], 2)) {
      if(a[i] === true) {
        delete a[i];
      }
      else {
        a[i] = true;
      }
    }
  });
  return Object.keys(a).length;
}).join('\n'));
