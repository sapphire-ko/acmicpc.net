'use strict';

import fs from 'fs-extra';
import path from 'path';

const id = process.argv[2];

if(id === undefined) {
	console.log('problem id is not given');
}
else {
	const src = path.resolve(__dirname, '../template');
	const dest = path.resolve(__dirname, 'src', id);

	fs.stat(dest)
	.then((stats) => {
		console.log(`direcory ${id} already exists`);
	})
	.catch((err) => {
		if(err.code === 'ENOENT') {
			return fs.copy(src, dest)
			.catch((err) => {
				console.log(err);
			});
		}
		else {
			console.log(err);
		}
	});
}
