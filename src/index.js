import fs from 'fs';
import path from 'path';
import process from 'node:process';
import makeTree from './makeTree.js';
import parse from './parser.js';
import format from './formatters/index.js';

const buildAbsolutePath = (pathToBuild) => path.resolve(process.cwd(), pathToBuild);

const readFile = (filePath) => {
  const fileData = fs.readFileSync(buildAbsolutePath(filePath), { encoding: 'utf-8' });

  return fileData;
};

const getFormatOfFile = (fileName) => path.extname(fileName).slice(1);

const genDiff = (firstFilePath, secondFilePath, formatName) => {
  const firstFileFormat = getFormatOfFile(firstFilePath);
  const secondFileFormat = getFormatOfFile(secondFilePath);

  const firstFileContent = readFile(firstFilePath);
  const secondFileContent = readFile(secondFilePath);

  const firstParsedData = parse(firstFileFormat, firstFileContent);
  const secondParsedData = parse(secondFileFormat, secondFileContent);

  const innerTree = makeTree(firstParsedData, secondParsedData);

  return format(innerTree, formatName);
};
export default genDiff;
