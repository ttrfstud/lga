function translcs(lcsres) {
  // According to description here: https://www.npmjs.org/package/longest-cont-segment

  var subs;
  var len;
  var i, mi, max = -1;

  subs = lcsres.subs;
  len = subs.length;

  for (i = 0; i < len; i++) {
    if (subs.tgt.length > max) {
      max = subs.tgt.length;
      mi = i;
    }
  }

  return lcsres.subs[mi];
}

module.exports = translcs;