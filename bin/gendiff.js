#!/usr/bin/env node
// const { Command } = require('commander'); // (normal include)
const { Command } = require('/home/linux/frontend-project-lvl2/node_modules/commander/lib/command.js'); // include commander in git clone of commander repo
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0')

program.parse();