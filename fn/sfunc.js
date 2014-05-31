function sfunc(vi) {
  var i, len;

  var y, x;

  len = vi.length;

  x = 0;

  for (i = 0; i < len; i++) {
    y = (len - i) / len;
    x += y * vi[i];
  }

  return x / ((1 + len) * len / 2);
}

module.exports = sfunc;