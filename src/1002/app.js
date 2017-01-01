console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).map(function(e) {
  var input = e.split(' ').map(function(e) { return parseInt(e); });
  if(input[0] === input[3] && input[1] === input[4] && input[2] === input[5]) {
    return -1;
  }
  var d1 = Math.pow(input[0] - input[3], 2) + Math.pow(input[1] - input[4], 2);
  var d2 = Math.pow(input[2] + input[5], 2);
  if(d1 < d2) {
    var d3 = Math.pow(Math.abs(input[2] - input[5]), 2);
    if(d3 > d1) {
      return 0;
    }
    else if(d3 === d1) {
      return 1;
    }
    else {
      return 2;
    }
  }
  else if(d1 === d2) {
    return 1;
  }
  else {
    return 0;
  }
}).join('\n'));
