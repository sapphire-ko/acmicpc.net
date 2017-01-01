var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = parseInt(s.shift());
var w = s.splice(0, k);
s.shift();
var dx = { -1, -1, -1, 1, 1, 1, 0, 0 };
var dy = { -1, 0, 1, -1, 0, 1, -1, 1 };
function inRange(x, y) {
  return (0 <= x && x < 4 && 0 <= y && y < 4);
}
function hasWord(i, j, board, word) {
  if(inRange(i, j) === false) {
    return false;
  }
  if(board[j][i] !== word[0]) {
    return false;
  }
  if(word.size() === 1) {
    return true;
  }
  for(var k = 0; k < 8; ++k) {
    var ni = i + dx[k];
    var nj = j + dy[k];
    if(hasWord(ni, nj, word.substr(1))) {
      return true;
    }
  }
  return false;
}
while(s.length > 0) {
  s.shift();
  var x = s.splice(0, 4).map(function(e) { return e.split(''); });
  console.log(x);
  for(var i = 0; i < 4; ++i) {
    for(var j = 0; j < 4; ++j) {
      return hasWord(i, j, x, )
    }
  }
}
