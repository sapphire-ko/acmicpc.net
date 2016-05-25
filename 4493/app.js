var x = {
  'R': {
    'R': 0, 'P': -1, 'S': 1
  },
  'P': {
    'R': 1, 'P': 0, 'S': -1
  },
  'S': {
    'R': -1, 'P': 1, 'S': 0
  }
};
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(s.shift());
for(var i = 0; i < t; ++i) {
  var n = parseInt(s.shift());
  var z = s.splice(0, n).map(function(e) {
    var k = e.split(' ');
    return x[k[0]][k[1]];
  }).reduce(function(p, c) { return (p + c); }, 0);
  if(z < 0) {
    console.log('Player 2');
  }
  else if(z > 0) {
    console.log('Player 1');
  }
  else {
    console.log('TIE');
  }
}
