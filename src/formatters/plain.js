const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  } if (value === null) {
    return null;
  }
  return String(value);
};

const plain = (tree) => {
  const format = (nodes, parent) => nodes
    .filter((node) => node.type !== 'same')
    .map((node) => {
      const property = parent ? `${parent}.${node.key}` : node.key;
      switch (node.type) {
        case 'add':
          return `Property '${property}' was added with value: ${stringify(node.value)}`;
        case 'remove':
          return `Property '${property}' was removed`;
        case 'updated':
          return `Property '${property}' was updated. From ${stringify(node.valueOne)} to ${stringify(node.valueTwo)}`;
        case 'recursion':
          return `${format(node.children, property)}`;
        default:
          throw new Error(`Такого типа не существует ${node.type}`);
      }
    }).join('\n');
  return format(tree, 0);
};

export default plain;