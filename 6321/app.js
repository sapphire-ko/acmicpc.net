var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(''); });
console.log(s.map(function(e, i) { return 'String #' + (i + 1) + '\n' + e.map(function(e) {
  if(e === 'Z') {
    return 'A';
  }
  else {
    return String.fromCharCode(e.charCodeAt() + 1);
  }
}).join(''); }).join('\n\n'));
