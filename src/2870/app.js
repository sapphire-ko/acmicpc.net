console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  return e.match(/[\d]*/g).filter(function(e) { return (e.length > 0); }).map(function(e) { var x = e.replace(/^0*/, ''); x = (x === '' ? '0' : x); return [x, parseInt(x)]; });
}).reduce(function(prev, curr) { return prev.concat(curr); }, []).sort(function(a, b) { return (a[1] - b[1]); }).map(function(e) { return e[0]; }).join('\n'));
