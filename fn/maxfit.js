function maxfit(lcsres, prot1, prot2) {
  var res;
  var len1, len2;

  len1 = prot1.length;
  len2 = prot2.length;


  res = lcsres.tgt.length * 2 / (len1 + len2);

  return res;
}

module.exports = maxfit;