console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).map(function(e) {
  var x = [];
  x.push(Math.floor(e / 25));
  e %= 25;
  x.push(Math.floor(e / 10));
  e %= 10;
  x.push(Math.floor(e / 5));
  e %= 5;
  x.push(e);
  return x.join(' ');
}).join('\n'));
