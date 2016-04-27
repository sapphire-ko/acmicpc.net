console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return ('00' + parseInt(e).toString(2)).substr(-3); }).reverse());
