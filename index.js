var lcs = require('longest-cont-segment');
var gdt = require('gdt');

var translcs = require('./fn/translcs');
var dolcsrep = require('./fn/dolcsrep');
var threeres = require('./fn/threeres');
var dogdtrep = require('./fn/dogdtrep');
var dolgarep = require('./fn/dolgarep');

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

  var lcs;
  var gdt;

  lcs = module.exports.lcs;
  gdt = module.exports.gdt;

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

  lcsrep = dolcsrep(lcss, protein1, protein2);

  lcss = lcss.concat(threeres(protein1, protein2));

  for (i = 0; i < lcss.length; i++) {
    for (j = 0; j < gdtcs.length; j++) {
      gdts.push(gdt(protein1, protein2, lcss[i], gdtcs[j]));
    }
  }

  gdtrep = dogdtrep(gdts);

  return dolgarep(lcsrep, gdtrep, w);
}

module.exports = lga;

module.exports.lcs = lcs;
module.exports.gdt = gdt;