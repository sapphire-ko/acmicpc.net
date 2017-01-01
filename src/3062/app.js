console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return parseInt(e) + parseInt(e.split('').reverse().join('')); }).map(function(e) {
  e = e.toString().split('');
  while(e.length > 1) {
    if(e.pop() !== e.reverse().pop()) {
      return 'NO';
    }
  }
  return 'YES';
}).join('\n'));
