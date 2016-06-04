console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).map(function(e) {
  var x = [];
  for(var i = 0; i < e; ++i) {
    var s = [];
    for(var j = 0; j < e; ++j) {
      if(i === 0 || i === (e - 1) || j === 0 || j === (e - 1)) {
        s.push('#');
      }
      else {
        s.push('J');
      }
    }
    x.push(s.join(''));
  }
  return x.join('\n');
}).join('\n\n'));
