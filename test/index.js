var test = require('taptap');
var assert = require('assert');
var lga = require('../');

test(function (done) {
  var rmsd1cutoffcalled;
  var rmsd2cutoffcalled;
  var rmsd5cutoffcalled;

  var lcsmock = function (p1, p2, cutoff) {
    if (cutoff === 1) {
      rmsd1cutoffcalled = true;

      return {
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
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          }
        ]
      };
    } else if (cutoff === 2) {
      rmsd2cutoffcalled = true;

      return {
        subs: [
          {
            tgt: [0, 0, 0, 0],
            exp: [0, 0, 0, 0]
          },
          {
            tgt: [0, 0],
            exp: [0, 0]
          },
          {
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          }
        ]
      };
    } else if (cutoff === 5) {
      rmsd5cutoffcalled = true;

      return {
        subs: [
          {
            tgt: [0, 0, 0, 0, 0],
            exp: [0, 0, 0, 0, 0]
          },
          {
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          },
          {
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          }
        ]
      };
    }
  };

  var numgdtcalled = 0;

  var gdtmock = function (p1, p2, equiv, cutoff) {
    numgdtcalled++;

    return {
      perc: equiv.tgt.length * cutoff
    };
  };

  var oldgdt = lga.gdt;
  var oldlcs = lga.lcs;

  lga.gdt = gdtmock;
  lga.lcs = lcsmock;

  var prot1 = [0, 0, 0, 0];
  var prot2 = [0, 0, 0, 0];

  var w = 1;

  var res = lga(prot1, prot2, w);

  assert.equal(res, 0.1288753799392097);

  assert(rmsd1cutoffcalled);
  assert(rmsd2cutoffcalled);
  assert(rmsd5cutoffcalled);

  assert.equal(numgdtcalled, 140);

  done();
});

test(function (done) {
  var rmsd1cutoffcalled;
  var rmsd2cutoffcalled;
  var rmsd5cutoffcalled;

  var lcsmock = function (p1, p2, cutoff) {
    if (cutoff === 1) {
      rmsd1cutoffcalled = true;

      return {
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
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          }
        ]
      };
    } else if (cutoff === 2) {
      rmsd2cutoffcalled = true;

      return {
        subs: [
          {
            tgt: [0, 0, 0, 0],
            exp: [0, 0, 0, 0]
          },
          {
            tgt: [0, 0],
            exp: [0, 0]
          },
          {
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          }
        ]
      };
    } else if (cutoff === 5) {
      rmsd5cutoffcalled = true;

      return {
        subs: [
          {
            tgt: [0, 0, 0, 0, 0],
            exp: [0, 0, 0, 0, 0]
          },
          {
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          },
          {
            tgt: [0, 0, 0],
            exp: [0, 0, 0]
          }
        ]
      };
    }
  };

  var numgdtcalled = 0;

  var gdtmock = function (p1, p2, equiv, cutoff) {
    numgdtcalled++;

    return {
      perc: equiv.tgt.length * cutoff
    };
  };

  var oldgdt = lga.gdt;
  var oldlcs = lga.lcs;

  lga.gdt = gdtmock;
  lga.lcs = lcsmock;

  var prot1 = [0, 0, 0, 0];
  var prot2 = [0, 0, 0, 0];

  var w = 0;

  var res = lga(prot1, prot2, w);

  assert.equal(res, 0.3055555555555555);

  assert(rmsd1cutoffcalled);
  assert(rmsd2cutoffcalled);
  assert(rmsd5cutoffcalled);

  assert.equal(numgdtcalled, 140);

  done();
});