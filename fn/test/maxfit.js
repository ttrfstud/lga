var test = require('taptap');
var assert = require('assert');
var maxfit = require('../maxfit');

test(function (done) {
  var res = {
    tgt: [0, 0, 0, 0, 0, 0, 0],
    exp: [0, 0, 0, 0, 0, 0, 0]
  };  

  var prot1 = [0, 0, 0, 0, 0, 0, 0];
  var prot2 = [0, 0, 0, 0, 0, 0, 0];

  var fit = maxfit(res, prot1, prot2);

  assert.deepEqual(fit, 1);

  done();
});

test(function (done) {
  var res = {
    tgt: [0, 0, 0, 0, 0, 0],
    exp: [0, 0, 0, 0, 0, 0]
  };

  var prot1 = [0, 0, 0, 0];
  var prot2 = [0, 0, 0, 0];

  var fit = maxfit(res, prot1, prot2);

  assert.deepEqual(fit, 12/8);

  done();
});