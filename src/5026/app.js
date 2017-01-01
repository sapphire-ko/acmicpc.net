console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  if(e === 'P=NP') {
    return 'skipped';
  }
  else {
    return eval(e);
  }
}).join('\n'));
