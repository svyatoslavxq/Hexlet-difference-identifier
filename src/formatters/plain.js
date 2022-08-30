import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  } if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const makePlainTree = (tree) => {
  const format = (nodes, parent) => nodes
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      const property = parent ? `${parent}.${node.key}` : node.key;
      switch (node.type) {
        case 'added':
          return `Property '${property}' was added with value: ${stringify(node.value)}`;
        case 'removed':
          return `Property '${property}' was removed`;
        case 'updated':
          return `Property '${property}' was updated. From ${stringify(node.valueOne)} to ${stringify(node.valueTwo)}`;
        case 'nested':
          return `${format(node.children, property)}`;
        default:
          throw new Error(`Такого типа не существует ${node.type}`);
      }
    }).join('\n');
  return format(tree, 0);
};

export default makePlainTree;
