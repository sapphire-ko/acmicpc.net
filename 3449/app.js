console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e, i, a) {
  if(i % 2 === 1) {
    return;
  }
  var x = e.split('');
  var y = a[i + 1].split('');
  return 'Hamming distance is ' + x.filter(function(e, i) {
    return (e !== y[i]);
  }).length + '.';
}).filter(function(e) { return (e !== undefined); }).join('\n'));
