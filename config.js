'use strict';

import path from 'path';

const versions = {
	'node': '0.10.48',
	// 'g++': '7.2.0',
	'g++': 'local',
	'go': '1.9.2',
}

const compilers = {
	'javascript': '',
	'c++': 'g++',
	'go': 'go',
};

const name = 'main';

const extensions = {
	'javascript': 'js',
	'c++': 'cpp',
	'go': 'go',
};

const binDir = path.resolve(__dirname, './binaries');

function commands() {
	if(process.env.NODE_ENV === 'make') {
		return;
	}

	const cwd = process.argv[2];
	const sources = Object.keys(extensions).map((key) => {
		return {
			[key]: path.resolve(cwd, `${name}.${extensions[key]}`),
		};
	})
	.reduce((a, b) => {
		return Object.assign(a, b);
	});

	const executables = [
		'c++',
		'go',
	].map((key) => {
		return {
			[key]: path.resolve(cwd, 'builds', `${name}-${key}`),
		};
	})
	.reduce((a, b) => {
		return Object.assign(a, b);
	});
	
	return {
		'sources': sources,
		'executables': executables,
		'compilation': {
			'javascript': '',
			'c++': `${binDir}/g++-${versions['g++']} ${sources['c++']} -o ${executables['c++']} -O2 -Wall -lm -std=c++14 -DONLINE_JUDGE`,
			'go': `${binDir}/go-${versions['go']} build -o ${executables['go']} ${sources['go']}`,
		},
		'execution': {
			'javascript': `${binDir}/node-${versions['node']} ${sources['javascript']}`,
			'c++': `${executables['c++']}`,
			'go': `${executables['go']}`,
		},
	};
}

function sanitize(key) {
	return key.replace(/\+/g, 'p');
}

if(process.env.NODE_ENV === 'make') {
	const keys = Object.keys(versions);

	const env = keys.map((key) => {
		return `${sanitize(key).toUpperCase()}_VERSION=${versions[key]}`;
	}).join(' ');

	console.log(env);
}

export default commands();
