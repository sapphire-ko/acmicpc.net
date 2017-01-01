function p(k) {
  if(k < 2) {
    return false;
  }
  var x = Math.floor(Math.sqrt(k));
  for(var i = 2; i <= x; ++i) {
    if(k % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); }).filter(function(e) { return p(e); }).length);
