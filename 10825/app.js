console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' '); }).sort(function(a, b) {
  if(a[0] < b[0]) {
    return -1;
  }
  if(a[0] > b[0]) {
    return 1;
  }
  return 0;
}).map(function(e, i) { e.push(i); return e; }).sort(function(a, b) { return (parseInt(b[1]) - parseInt(a[1]) || parseInt(a[2]) - parseInt(b[2]) || parseInt(b[3] - a[3]) || a[4] - b[4]); }).map(function(e) { return e[0]; }).join('\n'));
