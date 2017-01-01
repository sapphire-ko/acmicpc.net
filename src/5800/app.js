console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); }); }).map(function(e, i) {
  var g = 0;
  for(var j = 1; j < e.length; ++j) {
    var t = e[j] - e[j - 1];
    if(g < t) {
      g = t;
    }
  }
  return 'Class ' + (i + 1) + '\n' + 'Max ' + e[e.length - 1] + ', Min ' + e[0] + ', Largest gap ' + g;
}).join('\n'));
