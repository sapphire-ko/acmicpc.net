const fs = require('fs-extra');
const path = require('path');

const rootPath = path.resolve(__dirname, '..');

const main = async () => {
  const id = process.argv[2];
  if (!id) {
    throw new Error('problem id is not given');
  }
  const src = path.resolve(rootPath, 'template');
  const dest = path.resolve(rootPath, 'src', id);

  try {
    await fs.lstat(dest);
    throw new Error(`directory ${id} already exists`);
  }
  catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await fs.copy(src, dest);
      }
      catch (error) {
        console.log(error);
      }
    } else {
      console.log(erorr);
    }
  }
};

(async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
})();
