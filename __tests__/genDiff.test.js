import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff', () => {
  describe.each([['stylish'], ['plain'], ['json']])('%s format', (outputFormat) => {
    const expectedOutput = readFile(`${outputFormat}ExpectedOutput.txt`);

    test.each([
      ['json'],
      ['yml'],
      ['yaml'],
    ])('%s files should return expected output', (fileFormat) => {
      const firstFilePath = getFixturePath(`file1.${fileFormat}`);
      const secondFilePath = getFixturePath(`file2.${fileFormat}`);

      expect(genDiff(firstFilePath, secondFilePath, outputFormat)).toBe(expectedOutput);
    });
  });
});
