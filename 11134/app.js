c=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');c.shift();console.log(c.map(function(e){x=e.split(' ');return Math.ceil(parseInt(x[0])/parseInt(x[1]))}).join('\n'));
