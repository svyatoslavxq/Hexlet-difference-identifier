import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatTree = (innerTree, fileFormat) => {
  switch (fileFormat) {
    case 'stylish': {
      return stylish(innerTree);
    }
    case 'plain': {
      return plain(innerTree);
    }
    case 'json': {
      return json(innerTree);
    }
    default:
      throw new Error(`${fileFormat} is wrong format.`);
  }
};

export default formatTree;
