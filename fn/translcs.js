function translcs(lcsres) {
  var subs;
  var len;
  var i, mi, max = -1;

  subs = lcsres.subs;
  len = subs.length;

  for (i = 0; i < len; i++) {
    if (subs[i].tgt.length > max) {
      max = subs[i].tgt.length;
      mi = i;
    }
  }

  return lcsres.subs[mi];
}

module.exports = translcs;