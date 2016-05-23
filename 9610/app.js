var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = {
  'Q1': 0,
  'Q2': 0,
  'Q3': 0,
  'Q4': 0,
  'AXIS': 0
}
n.forEach(function(e) {
  if(e[0] === 0 || e[1] === 0) {
    ++x['AXIS'];
  }
  else if(e[0] > 0) {
    if(e[1] > 0) {
      ++x['Q1'];
    }
    else {
      ++x['Q4'];
    }
  }
  else {
    if(e[1] > 0) {
      ++x['Q2'];
    }
    else {
      ++x['Q3'];
    }
  }
});
console.log(Object.keys(x).map(function(e) {
  return e + ': ' + x[e];
}).join('\n'));
