var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(var i = 1; i <= 30; ++i) {
  if(n.indexOf(i.toString()) === -1) {
    console.log(i);
  }
}
