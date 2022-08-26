import fs from 'fs';
import path from 'path';
import process from 'node:process';
import makeTree from './makeTree.js';
import parse from './parser.js';
import format from './formatters/index.js';

const buildAbsolutePath = (pathToBuild) => {
  const absolutePath = path.resolve(process.cwd(), pathToBuild);

  return absolutePath;
};

const readFile = (filePath) => {
  const fileData = fs.readFileSync(buildAbsolutePath(filePath), { encoding: 'utf-8', flag: 'r' }).toString();

  return fileData;
};

const fileFormat = (fileName) => path.extname(fileName).slice(1);

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
