console.time(1);
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  var c = 0;
  for(var i = e[0]; i <= e[1]; ++i) {
    i.toString().split('').forEach(function(e) {
      if(e === '0') {
        ++c;
      }
    });
  }
  return c;
}).join('\n'));
console.timeEnd(1);
