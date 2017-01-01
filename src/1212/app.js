console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return ('  ' + parseInt(e, 8).toString(2)).substr(-3); }).join('').trim().replace(/ /g, '0'));
