import _ from 'lodash';

const findDifference = (object1, object2, keys) => {
  if (keys.length === 0) {
      return '';
  }
  const [first, ...rest] = keys;

  const diff = findDifference(object1, object2, rest);

  const createString = (operator, key, object) => {
    return ` ${operator} ${key}: ${object[key]}`;
  }

  if (_.has(object1, first) && !_.has(object2, first)) {
    return `${createString('-', first, object1)}\n${diff}`;
  }

  if (!_.has(object1, first) && _.has(object2, first)) {
    return `${createString('+', first, object2)}\n${diff}`;
  }

  if (object1[first] !== object2[first]) {
    return `${createString('-', first, object1)}\n${createString('+', first, object2)}\n${diff}`;
  }

  if (object1[first] === object2[first]) {
    return `${createString(' ', first, object1)}\n${diff}`;
  }
};

const showDifference = (firstObject, secondObject) => {
  const firstKeys = Object.keys(firstObject);
  const secondKeys = Object.keys(secondObject);

  const keys = _.union(firstKeys, secondKeys);
  const sortedKeys = _.sortBy(keys);

  return `{\n${findDifference(firstObject, secondObject, sortedKeys)}}`;
};

export default showDifference;