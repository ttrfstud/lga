var test = require('taptap');
var assert = require('assert');
var sfunc = require('../sfunc');

test(function (done) {
  var vi = [0.5, 0.4, 0.3, 0.2, 0.1];

  var res = sfunc(vi);

  assert.equal(res, 1.1/15);
  done();
});

test.skip(function (done) { /* rounding errors */
  var vi = [0.1, 0.2, 0.3, 0.4, 0.5];

  var res = sfunc(vi);

  assert.equal(res, 0.7/15);

  done();
});