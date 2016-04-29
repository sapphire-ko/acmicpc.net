var z = {
  'UTC': 0,
  'GMT': 0,
  'BST': 1,
  'IST': 1,
  'WET': 0,
  'WEST': 1,
  'CET': 1,
  'CEST': 2,
  'EET': 2,
  'EEST': 3,
  'MSK': 3,
  'MSD': 4,
  'AST': -4,
  'ADT': -3,
  'NST': -3.5,
  'NDT': -2.5,
  'EST': -5,
  'EDT': -4,
  'CST': -6,
  'CDT': -5,
  'MST': -7,
  'MDT': -6,
  'PST': -8,
  'PDT': -7,
  'HST': -10,
  'AKST': -9,
  'AKDT': -8,
  'AEST': 10,
  'AEDT': 11,
  'ACST': 9.5,
  'ACDT': 10.5,
  'AWST': 8
};
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = e.split(' ');
  var t = x.pop();
  var s = x.pop();

  var m;
  switch(x.pop()) {
  case 'noon':
    m = 12 * 60;
    break;
  case 'midnight':
    m = 0;
    break;
  case 'a.m.':
    var y = x.pop().split(':').map(function(e) { return parseInt(e); });
    m = (y[0] === 12 ? 0 : y[0]) * 60 + y[1];
    break;
  case 'p.m.':
    var y = x.pop().split(':').map(function(e) { return parseInt(e); });
    m = (y[0] === 12 ? 12 : (y[0] + 12)) * 60 + y[1];
    break;
  }

  var d = (z[t] - z[s]) * 60;
  m += d + 24 * 60;
  m %= 24 * 60;
  h = Math.floor(m / 60);
  m %= 60;

  if(h === 0 && m === 0) {
    return 'midnight';
  }
  else if(h === 12 && m === 0) {
    return 'noon';
  }
  else if(h >= 12 && m >= 0) {
    return (h === 12 ? 12 : (h % 12)) + ':' + ('0' + m).substr(-2) + ' p.m.';
  }
  else if(h < 12 && m >= 0) {
    return (h === 0 ? 12 : h) + ':' + ('0' + m).substr(-2) + ' a.m.';
  }
}).join('\n'));
