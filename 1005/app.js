var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
console.log(Array.apply(null, Array(parseInt(input.pop()))).map(function() {
  var x = input.pop().split(' ').map(function(e) { return parseInt(e); });
  var d = input.pop().split(' ').map(function(e) { return parseInt(e); });
  var y = {};
  Array.apply(null, Array(x[1])).forEach(function(e, i) {
    var z = input.pop().split(' ').map(function(e) { return parseInt(e); });
    if(y[z[0]] === undefined) {
      y[z[0]] = {};
    }
    if(y[z[1]] === undefined) {
      y[z[1]] = {};
    }
    y[z[1]][z[0]] = d[z[0] - 1];
    y[z[0]][z[1]] = d[z[0] - 1];
    y[z[1]][z[1]] = 0;
  });
  var w = parseInt(input.pop());

  for(var i = w; i > 1; --i) {
    for(var k in y[i]) {
      if(k === w || i <= k) {
        continue;
      }
      if(y[i][w] !== undefined) {
        if(y[k][w] === undefined) {
          y[k][w] = y[i][k] + y[i][w];
        }
        else {
          y[k][w] = Math.max(y[k][w], y[i][k] + y[i][w]);
        }
      }
    }
  }
  return y[1][w] + d[w - 1];
}).join('\n'));
