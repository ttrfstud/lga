function threeres(prot1, prot2) {
  var len1;
  var len2;

  var i, j;

  var res;

  len1 = prot1.length;
  len2 = prot2.length;

  res = [];

  for (i = 0; i < len1; i++) {
    for (j = 0; j < len2; j++) {
      if (prot1.length > i + 2 && prot2.length > j + 2) {
        res.push({
          tgt: [i, i + 1, i + 2],
          exp: [j, j + 1, j + 2]
        });
      }
    }
  }

  return res;
}

module.exports = threeres;