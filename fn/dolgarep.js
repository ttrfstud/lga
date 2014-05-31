function dolgarep(lcsvi, gdtvi, w) {
  var res;

  res = w * sfunc(gdtvi) + (1 - w) * sfunc(lcsvi);

  return res;
}

module.exports = dolgarep;