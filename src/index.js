import fs from 'fs';
import path from 'path';
import process from 'node:process';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath); 
  const data = fs.readFileSync(fullPath, {encoding: 'utf-8', flag: 'r'}).toString();
  return JSON.parse(data);
}

export default readFile;
