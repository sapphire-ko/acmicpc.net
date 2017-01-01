var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
function v(k) {
  for(var i = 0; i <= 30; ++i) {
    if(Math.pow(2, i) === n) {
      return true;
    }
  }
  return false;
}
console.log(v(n) ? 1 : 0);
