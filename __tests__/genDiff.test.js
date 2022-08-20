import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedFormattedResult = readFile('expected.txt');

const formatsOfFiles = ['json'];

test.each(formatsOfFiles)('diff formats of files (.json)', (extension) => {
  const firstFileName = `${process.cwd()}/__fixtures__/file1.${extension}`;
  const secondFileName = `${process.cwd()}/__fixtures__/file2.${extension}`;

  expect(genDiff(firstFileName, secondFileName, 'formatted')).toEqual(expectedFormattedResult);
});
