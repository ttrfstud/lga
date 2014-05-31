function dolcsrep(lcss, lprot1, lprot2) {
  var i;
  var len;
  var lcsvi;

  lcsvi = [];

  len = lcss.length;

  for (i = 0; i < len; i++) {
    lcsvi = maxfit(lcss[i], lprot1, lprot2);
  }

  return lcsvi;
}

module.exports = dolcsrep;