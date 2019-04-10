const { compose } = require('./tools/compose');

const doublePrint = x => x + x;

const scan = inital => x => inital + x;

const test = `Wynn`;

/**
 * without compose
 */
scan(`NodeJS`)(doublePrint(test));

/**
 * use compose
 */
const operate = compose(
  scan(`NodeJS`),
  doublePrint
);

operate(test);
