import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { request } from 'gaxios';
import { JSDOM } from 'jsdom';

const id = process.argv[2];
assert(id, 'cannot find id');

const rootPath = path.resolve(__dirname, '..', '..');
const srcPath = path.resolve(rootPath, 'src', id);
const dataPath = path.resolve(srcPath, 'data');

const create = async (filename: string, element: Element) => {
	assert(element.textContent, `cannot find ${filename} element`);

	const text = element.textContent.trim();

	const filePath = path.resolve(dataPath, filename);
	await fs.promises.writeFile(filePath, `${text}\n`);
};

const main = async () => {
	const { data } = await request<string>({
		url: `https://www.acmicpc.net/problem/${id}`,
	});

	const dom = new JSDOM(data);
	const { window } = dom;
	const { document } = window;

	const inputEls = document.querySelectorAll('[id^="sample-input-"]');
	const outputEls = document.querySelectorAll('[id^="sample-output-"]');

	assert(inputEls.length === outputEls.length, 'input/output pairs does not match');

	for (let i = 0; i < inputEls.length; ++i) {
		await create(`input.${i}.txt`, inputEls.item(i));
		await create(`output.${i}.txt`, outputEls.item(i));
	}
};

(async () => {
	await main();
})();
