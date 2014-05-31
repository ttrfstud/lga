var sfunc = require('./sfunc');

function dolgarep(lcsvi, gdtvi, w) {
  var res;

  res = w * module.exports.sfunc(gdtvi) + (1 - w) * module.exports.sfunc(lcsvi);

  return res;
}

module.exports = dolgarep;

module.exports.sfunc = sfunc;