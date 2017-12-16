'use strict';

import fs from 'fs-extra';
import path from 'path';
import child_process from 'child_process';

import Promise from 'bluebird';

import commands from '../config';

const srcDir = process.argv[2];
const buildDir = path.resolve(srcDir, 'builds');

function clean() {
	return fs.remove(buildDir);
}

function create() {
	return fs.mkdir(buildDir);
}

function check() {
	return Promise.all([
		checkSources(),
		checkTests(),
	])
	.then((results) => {
		return results.reduce((a, b) => {
			return Object.assign(a, b);
		});
	});
}

function checkSources() {
	const {
		sources,
	} = commands;

	const keys = Object.keys(sources);

	const promises = keys.map((key) => {
		return fs.stat(sources[key])
		.then((e) => {
			return Promise.resolve(key);
		})
		.catch((e) => {
			return Promise.resolve();
		});
	});

	return Promise.all(promises)
	.then((e) => {
		return {
			'languages': e.filter((e) => {
				return e !== undefined;
			}),
		};
	});
}

function checkTests() {
	return fs.readdir(srcDir)
	.then((files) => {
		const promises = files.map((file) => {
			return file.match(/^input(.*).txt$/);
		})
		.filter((e) => {
			return e !== null;
		})
		.map((token) => {
			const id = token[1];

			const input = path.resolve(srcDir, token[0]);
			const output = path.resolve(srcDir, `output${id}.txt`);

			return fs.stat(output)
			.then(() => {
				const promises = [
					input,
					output,
				].map((file) => {
					return fs.readFile(file)
					.then((data) => {
						return data.toString();
					});
				});

				return Promise.all(promises);
			})
			.then((results) => {
				return Promise.resolve({
					'name': token[0],
					'input': results[0],
					'output': results[1],
				});
			})
			.catch((err) => {
				return Promise.reject(`output file for ${token[0]} is missing`);
			});
		});

		return Promise.all(promises)
		.then((tests) => {
			if(tests.length === 0) {
				return Promise.reject('no files to test');
			}
			return {
				'tests': tests,
			}
		});
	});
}

function spawn(command, test) {
	return new Promise((resolve, reject) => {
		const argv = command.split(' ');
		
		const p = child_process.spawn(argv.shift(), argv);

		let output = '';

		p.stdout.on('data', (chunk) => {
			output += chunk;
		});

		p.stderr.on('data', (data) => {
			console.log(data.toString());
		});

		if(test != undefined) {
			p.stdin.write(test.input);
			p.stdin.end();
		}

		p.on('close', (code) => {
			if(code === 0) {
				resolve(output.trim());
			}
			else {
				reject(code);
			}
		});
	});
}

function compile(language) {
	const command = commands.compilation[language];

	if(command === undefined) {
		throw new Error(`compilation command for ${language} is missing`);
	}
	if(command === '') {
		return Promise.resolve();
	}

	return spawn(command)
	.catch((code) => {
		throw new Error(`compilation failed for ${language}: ${code}`);
	});
}

function execute(language, test) {
	const command = commands.execution[language];

	if(command === undefined) {
		throw new Error(`execution command for ${language} is missing`);
	}

	return spawn(command, test)
	.then((stdout) => {
		console.log(`\t${test.name}`);
		if(stdout === test.output) {
			console.log('\t\tpassed');
		}
		else {
			console.log('\t\tfailed');
		}
	})
	.catch((code) => {
		throw new Error(`execution failed for ${language}: ${code}`);
	});
}

clean()
.then(() => {
	return create();
})
.then(() => {
	return check();
})
.then((e) => {
	const {
		languages,
		tests,
	} = e;

	return Promise.each(languages, (language) => {
		return compile(language)
		.then(() => {
			console.log(language);
			return Promise.each(tests, (test) => {
				return execute(language, test);
			});
		});
	});
})
.catch((err) => {
	console.log(err);
})
.finally(() => {
	return clean();
})
.catch((err) => {
	console.log(err);
});
