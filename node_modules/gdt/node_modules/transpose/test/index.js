var test = require('test');
var assert  = require('assert');

var transpose = require('../');

it(function (done) { /* 1x1 */
  assert.deepEqual(transpose([[1]]), [[1]]);
  done();
});

it(function (done) { /* 2x2 */
  assert.deepEqual(transpose([[1, 2], [3, 4]]), [[1,3],[2,4]]);
  done();
});

it(function (done) { /* 4x4 */
  assert.deepEqual(transpose([
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [8, 4, 5, 6],
    [4, 5, 6, 7]
  ]), [
    [1, 2, 8, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7]
  ])
  done();
});
