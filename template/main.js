const fs = require('fs');
const input = `${fs.readFileSync('/dev/stdin')}`;

const main = () => {
    console.log('input', input);
};
main();
