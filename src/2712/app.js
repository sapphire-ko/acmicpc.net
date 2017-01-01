var a = {
  'kg': [
    2.2046, 'lb'
  ],
  'lb': [
    0.4536, 'kg'
  ],
  'l': [
    0.2642, 'g'
  ],
  'g': [
    3.7854, 'l'
  ]
};
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = e.split(' ');
  return (parseFloat(x[0]) * a[x[1]][0]).toFixed(4) + ' ' + a[x[1]][1];
}).join('\n'));
