var test = require('taptap');
var assert = require('assert');
var dogdtrep = require('../dogdtrep');

test(function (done) {
  var gdtress = [
    {perc: 0.1},
    {perc: 0.2},
    {perc: 0.3}
  ];

  var res = dogdtrep(gdtress);

  assert.deepEqual(res, [ 0.1, 0.2, 0.3 ]);

  done();
});

test(function (done) {
  var gdtress = [
    {perc: 0.3},
    {perc: 0.2},
    {perc: 0.2}
  ];

  var res = dogdtrep(gdtress);

  assert.deepEqual(res, [ 0.3, 0.2, 0.2 ]);

  done();
});