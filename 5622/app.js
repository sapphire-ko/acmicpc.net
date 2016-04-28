console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) {
  var x = (Math.floor((e.charCodeAt() - 'A'.charCodeAt()) / 3) + 1) + 2;
  switch(e) {
  case 'S':
  case 'V':
  case 'Y':
  case 'Z':
    x -= 1;
    break;
  }
  return x;
}).reduce(function(prev, curr) { return prev + curr; }));
