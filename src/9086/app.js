console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) {
  var s = e.split('');
  return s[0] + s[s.length - 1];
}).join('\n'));
