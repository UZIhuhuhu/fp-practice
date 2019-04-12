const fs = require('fs');

const getAllFile = function(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getAllFile(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
};
