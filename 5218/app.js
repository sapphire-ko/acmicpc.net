console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) {
  var s = e.split(' ');
  var a = s[0].split(''), b = s[1].split('');
  return 'Distances: ' + a.map(function(e, i) {
    var k = b[i].charCodeAt() - a[i].charCodeAt();
    if(k < 0) {
      k = 26 + k;
    }
    return k;
  }).join(' ');
}).join('\n'));
