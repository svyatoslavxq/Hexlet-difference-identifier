import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const stylishResult = readFile('expectedOutputStylish.txt');
const plainResult = readFile('expectedOutputPlain.txt');
const jsonResult = readFile('expectedOutputJson.txt');

describe.each([
  ['__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish', stylishResult],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', 'plain', plainResult],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', 'json', jsonResult],
  ['__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'stylish', stylishResult],
  ['__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain', plainResult],
  ['__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json', jsonResult],
])('gendiff', (firstFilePath, secondFilePath, format, expectedOutput) => {
  test(`${format}`, () => {
    const result = genDiff(firstFilePath, secondFilePath, format);
    expect(result).toEqual(expectedOutput);
  });
});
