var test = require('taptap');
var assert = require('assert');
var translcs = require('../translcs');

test(function (done) {
  var lcsress = {
    subs: [
      {
        tgt: [0, 0, 0],
        exp: [0, 0, 0]
      },
      {
        tgt: [0, 0],
        exp: [0, 0]
      },
      {
        tgt: [0, 0, 0, 0],
        exp: [0, 0, 0, 0]
      },
      {
        tgt: [0],
        exp: [0]
      }
    ]
  };

  var translated = translcs(lcsress);

  assert.deepEqual(translated, {
    tgt: [0, 0, 0, 0],
    exp: [0, 0, 0, 0]
  });

  done();
});

test(function (done) {
  var lcsress = {
    subs: [
      {
        tgt: [0, 0, 0],
        exp: [0, 0, 0]
      },
      {
        tgt: [0],
        exp: [0]
      }
    ]
  };

  var translated = translcs(lcsress);

  assert.deepEqual(translated, {
    tgt: [0, 0, 0],
    exp: [0, 0, 0]
  });

  done();
});