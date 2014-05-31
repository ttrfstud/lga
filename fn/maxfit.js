function maxfit(lcsres, lprot1, lprot2) {
  var res;

  res = lcsres.length * 2 / (lprot1 + lprot2);

  return res;
}

module.exports = maxfit;