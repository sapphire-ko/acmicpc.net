console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) {
  var x = e.split('-');
  return (Math.abs(x[0].split('').map(function(e, i, a) { return (e.charCodeAt() - 65) * Math.pow(26, a.length - 1 - i); }).reduce(function(prev, curr) { return prev + curr; }) - parseInt(x[1])) <= 100 ? 'nice' : 'not nice');
}).join('\n'));
