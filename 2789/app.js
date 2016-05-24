var x = 'CAMBRIDGE'.split('');
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').filter(function(e) { return (x.indexOf(e) === -1); }).join(''));
