var d = [];
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' '); }).map(function(e) {
  switch(e[0]) {
  case 'push_front': d.unshift(e[1]); return;
  case 'push_back': d.push(e[1]); return;
  case 'pop_front': return (d.length > 0 ? d.splice(0, 1)[0] : -1);
  case 'pop_back': return (d.length > 0 ? d.pop() : -1);
  case 'size': return d.length;
  case 'empty': return (d.length > 0 ? 0 : 1);
  case 'front': return (d.length > 0 ? d[0] : -1);
  case 'back': return (d.length > 0 ? d[d.length - 1] : -1);
  }
}).filter(function(e) { return (e !== undefined); }).join('\n'));
