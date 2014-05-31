var maxfit = require('./maxfit');

function dolcsrep(lcss, prot1, prot2) {
  var i;
  var len;
  var lcsvi;

  lcsvi = [];

  len = lcss.length;

  for (i = 0; i < len; i++) {
    lcsvi.push(maxfit(lcss[i], prot1, prot2));
  }

  return lcsvi;
}

module.exports = dolcsrep;