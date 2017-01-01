console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).map(function(e) {
  var x = [];
  for(var i = 1; i <= e - 1; ++i) {
    for(var j = (i + 1); j <= e; ++j) {
      if(i + j === e) {
        x.push(i + ' ' + j);
      }
    }
  }
  return 'Pairs for ' + e + ': ' + x.join(', ');
}).join('\n'));
