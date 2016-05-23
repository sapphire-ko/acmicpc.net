var x = ['2', '22', '222', '3', '33', '333', '4', '44', '444', '5', '55', '555', '6', '66', '666', '7', '77', '777', '7777', '8', '88', '888', '9', '99', '999', '9999'];
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var a = {};
s[0].split(' ').forEach(function(e, i) {
  a[e] = (i + 1);
});
var n = parseInt(s[0]);
console.log(s[1].split('').map(function(e) {
  var t = e.charCodeAt() - 'a'.charCodeAt();
  return x[t].split('').map(function(e) { return a[e]; }).join('');
}).map(function(e, i, a) {
  if(i === 0) {
    return e;
  }
  else {
    if(a[i][0] === a[i - 1][0]) {
      return '#' + e;
    }
    else {
      return e;
    }
  }
}).join(''));
