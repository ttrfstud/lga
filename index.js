var lcs = require('longest-cont-segment');
var gdt = require('gdt');

function lga(protein1, protein2, w) {
  var lcss;
  var gdts;

  var lcsrep;
  var gdtrep;
  var lgarep;

  var lcscs;
  var gdtcs;

  var i;
  var j;

  lcss = [];
  gdts = [];

  lcscs = [1, 2, 5];
  gdtcs = [];

  for (i = .5; i < 10.5; i += 0.5) {
    gdtcs.push(i);
  }

  for (i = 0; i < lcscs.length; i++) {
    lcss.push(translcs(lcs(protein1, protein2, lcscs[i])));
  }

  lcsrep = dolcsrep(lcsrep);

  lcss = lcss.concat(threeres(protein1, protein2));

  for (i = 0; i < lcss.length; i++) {
    for (j = 0; j < gdtcs.length; j++) {
      gdts.push(gdt(protein1, protein2, lcss[i], gdtcs[j]);
    }
  }

  gdtrep = dogdtrep(gdts);

  return dolgarep(lcsrep, gdtrep);
}

module.exports = lga;