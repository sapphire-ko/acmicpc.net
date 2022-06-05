process.stdin.on('data',x=>console.log(`${x}`.split('').map(Number).reduce((a,b)=>a+Math.pow(b,5),0)))
