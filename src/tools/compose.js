const compose = function(...funcs) {
  return data => funcs.reduceRight((data, x) => x(data), data);
};

module.exports = {
  compose
};