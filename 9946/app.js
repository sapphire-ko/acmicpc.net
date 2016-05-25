var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.pop();
s.pop();
console.log(s.map(function(e, i) {
  if(i % 2 === 1) {
    return;
  }
  var x = 'Case ' + (Math.floor(i / 2) + 1) + ': ' + (e.split('').sort(function(a, b) { return (a.charCodeAt() - b.charCodeAt()); }).join('') === s[i + 1].split('').sort(function(a, b) { return (a.charCodeAt() - b.charCodeAt()); }).join('') ? 'same' : 'different');
}).filter(function(e) { return (e !== undefined); }).join('\n'));
