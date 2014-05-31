var test = require('taptap');
var assert = require('assert');
var threeres = require('../threeres');

test(function (done) {
  var prot1 = [0, 0, 0];
  var prot2 = [0, 0, 0, 0];

  var res = threeres(prot1, prot2);

  assert.deepEqual(res, [
    {
      tgt: [0, 1, 2],
      exp: [0, 1, 2]
    },
    {
      tgt: [0, 1, 2],
      exp: [1, 2, 3]
    }
  ]);

  done();
});

test(function (done) {
  var prot1 = [0, 0, 0, 0];
  var prot2 = [0, 0, 0, 0];

  var res = threeres(prot1, prot2);

  assert.deepEqual(res, [
    {
      tgt: [0, 1, 2],
      exp: [0, 1, 2]
    },
    {
      tgt: [0, 1, 2],
      exp: [1, 2, 3]
    },
    {
      tgt: [1, 2, 3],
      exp: [0, 1, 2]
    },
    {
      tgt: [1, 2, 3],
      exp: [1, 2, 3]
    }
  ]);

  done();
});

test(function (done) {
  var prot1 = [0, 0, 0, 0, 0];
  var prot2 = [0, 0, 0];

  var res = threeres(prot1, prot2);

  assert.deepEqual(res, [
    {
      tgt: [0, 1, 2],
      exp: [0, 1, 2]
    },
    {
      tgt: [1, 2, 3],
      exp: [0, 1, 2]
    },
    {
      tgt: [2, 3, 4],
      exp: [0, 1, 2]
    }
  ]);

  done();
});