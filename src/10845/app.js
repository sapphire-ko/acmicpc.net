var q = [];
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' '); }).map(function(e) {
  switch(e[0]) {
  case 'push':
    q.push(e[1]);
    return;
  case 'pop':
    return (q.length > 0 ? q.splice(0, 1) : -1);
  case 'size':
    return q.length;
  case 'empty':
    return (q.length > 0 ? 0 : 1);
  case 'front':
    return (q.length > 0 ? q[0] : -1);
  case 'back':
    return (q.length > 0 ? q[q.length - 1] : -1);
  }
}).filter(function(e) { return (e !== undefined); }).join('\n'));
