var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
if(n % 4 === 0) {
  if(n % 100 === 0) {
    if(n % 400 === 0) {
      console.log(1);
    }
    else {
      console.log(0);
    }
  }
  else {
    console.log(1);
  }
}
else {
  console.log(0);
}
