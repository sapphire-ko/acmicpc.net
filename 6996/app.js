console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = e.split(' ');
  var a = x[0].split('').sort(function(a, b) { return (a.charCodeAt() - b.charCodeAt()); }).join('');
  var b = x[1].split('').sort(function(a, b) { return (a.charCodeAt() - b.charCodeAt()); }).join('');
  return x.join(' & ') + ' are ' + (a === b ? '' : 'NOT ') + 'anagrams.';
}).join('\n'));
