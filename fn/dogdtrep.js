function dogdtrep(gdtress) {
  var i;
  var len;

  var gdtvi;

  len = gdtress.length;

  gdtvi = [];

  for (i = 0; i < len; i++) {
    gdtvi.push(gdtress[i].perc);
  }

  return gdtvi;
}

module.exports = dogdtrep;