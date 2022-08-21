import fs from 'fs';
import path from 'path';
import process from 'node:process';
import makeTree from './makeTree.js';
import parse from './parser.js';
import format from './formatters/index.js';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const fileData = fs.readFileSync(fullPath, { encoding: 'utf-8', flag: 'r' }).toString();

  return fileData;
};

const fileFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (firstFilePath, secondFilePath, formatName = 'stylish') => {
  const firstFileFormat = fileFormat(firstFilePath);
  const secondFileFormat = fileFormat(secondFilePath);

  const firstFileContent = readFile(firstFilePath);
  const secondFileContent = readFile(secondFilePath);

  const firstParsedData = parse(firstFileFormat, firstFileContent);
  const secondParsedData = parse(secondFileFormat, secondFileContent);

  const tree = makeTree(firstParsedData, secondParsedData);

  return format(tree, formatName);
};
export default genDiff;
