var test = require('taptap');
var assert = require('assert');
var dolgarep = require('../dolgarep');

test(function (done) {
  var w = 0.5;

  var gdtvi = [1, 1, 1];
  var lcsvi = [2, 1, 1];

  var oldsfunc = dolgarep.sfunc;

  dolgarep.sfunc = function (obj) {
    return obj[0];
  };

  assert.equal(dolgarep(lcsvi, gdtvi, w), 1.5);

  dolgarep.sfunc = oldsfunc;

  done();
});

test(function (done) {
  var w = 0.3;

  var gdtvi = [1, 1, 1];
  var lcsvi = [2, 1, 1];

  var oldsfunc = dolgarep.sfunc;

  dolgarep.sfunc = function (obj) {
    return obj[0];
  };

  assert.equal(dolgarep(lcsvi, gdtvi, w), 1.7);

  dolgarep.sfunc = oldsfunc;

  done();
});