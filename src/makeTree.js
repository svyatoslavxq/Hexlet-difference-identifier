import _ from 'lodash';

const makeTree = (firstData, secondData) => {
  const keys = Object.keys({ ...firstData, ...secondData });
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.map((key) => {
    const firstValue = firstData[key];
    const secondValue = secondData[key];

    if (!_.has(firstData, key)) {
      return { type: 'add', key, value: secondValue };
    }
    if (!_.has(secondData, key)) {
      return { type: 'remove', key, value: firstValue };
    }
    if (_.isPlainObject(firstValue) && _.isPlainObject(secondValue)) {
      return { type: 'recursion', key, children: makeTree(firstValue, secondValue) };
    }
    if (!_.isEqual(firstValue, secondValue)) {
      return {
        type: 'updated', key, valueOne: firstValue, valueTwo: secondValue,
      };
    }

    return { type: 'same', key, value: firstValue };
  });
};

export default makeTree;
