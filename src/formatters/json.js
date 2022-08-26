const makeJsonFormat = (tree) => JSON.stringify(tree, null, ' '.repeat(2));

export default makeJsonFormat;
