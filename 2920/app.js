switch(require('fs').readFileSync('/dev/stdin').toString().trim()) {
case '1 2 3 4 5 6 7 8':
  console.log('ascending');
  break;
case '8 7 6 5 4 3 2 1':
  console.log('descending');
  break;
default:
  console.log('mixed');
}
