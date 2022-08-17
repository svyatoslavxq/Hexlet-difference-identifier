#!/usr/bin/env node
import { program } from 'commander';
import readFile from '../src/index.js';
import findDifference from '../src/findDifference.js';

const genDiff = () => {

  program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2) => {
      if (filepath1.endsWith('.json') && filepath2.endsWith('.json')) {
        const file1Content = readFile(filepath1);
        const file2Content = readFile(filepath2);

        const difference = findDifference(file1Content, file2Content);

        console.log(difference);
      } else {
        console.log('gendiff is available only for json format');
      }
    });

  program.parse();
};

genDiff();