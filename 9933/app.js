var a = {};
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).map(function(e) {
  var c = e.split('').splice(0, Math.floor(e.length / 2)).join('');
  var d = e.split('').reverse().splice(0, Math.floor(e.length / 2)).join('');
  if(c === d) {
    return e.length + ' ' + e.split('')[Math.floor(e.length / 2)];
  }
  if(a[e] === undefined) {
    var r = e.split('').reverse().join('');
    if(a[r]) {
      return e.length + ' ' + e.split('')[Math.floor(e.length / 2)];
    }
    else {
      a[e] = true;
    }
  }
}).filter(function(e) { return e; }).join(''));
