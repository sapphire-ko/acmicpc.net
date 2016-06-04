console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return e.split(''); }); }).map(function(e) {
  var c = 0;
  var a, b;
  var x = [];
  while(e[0].length > 0 || e[1].length > 0) {
    a = e[0].length > 0 ? parseInt(e[0].pop()) : 0;
    b = e[1].length > 0 ? parseInt(e[1].pop()) : 0;
    if((a + b + c) < 2) {
      x.push(a + b + c);
      c = 0;
    }
    else {
      x.push(a + b + c - 2);
      c = 1;
    }
  }
  x.push(c);
  x = x.reverse().join('').replace(/^0+/, '');
  if(x.length > 0) {
    return x;
  }
  else {
    return 0;
  }
}).join('\n'));
