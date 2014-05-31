var test = require('taptap');
var assert = require('assert');
var dolcsrep = require('../dolcsrep');

test(function (done) {
  var lcss = [
    {
      tgt: [0, 0, 0, 0],
      exp: [0, 0, 0, 0]
    },
    {
      tgt: [0, 0, 0, 0, 0],
      exp: [0, 0, 0, 0, 0]
    },
    {
      tgt: [0, 0, 0, 0, 0, 0],
      exp: [0, 0, 0, 0, 0, 0]
    }
  ];

  var prot1 = [0];
  var prot2 = [0];

  var res = dolcsrep(lcss, prot1, prot2);

  assert.deepEqual(res, [4, 5, 6]);

  done();
});

test(function (done) {
  var lcss = [
    {
      tgt: [0, 0, 0, 0, 0, 0, 0, 0],
      exp: [0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      tgt: [0, 0],
      exp: [0, 0]
    }
  ];

  var prot1 = [0, 0, 0, 0];
  var prot2 = [0, 0, 0, 0];

  var res = dolcsrep(lcss, prot1, prot2);

  assert.deepEqual(res, [2, .5]);

  done();
});