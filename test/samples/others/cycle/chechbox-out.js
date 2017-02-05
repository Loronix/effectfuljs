'use strict';

// *- DEFAULT
var M = require('./mfjscore');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var _cycleCore = require('@cycle/core');

var _cycleCore2 = _interopRequireDefault(_cycleCore);

var _cycleDom = require('@cycle/dom');

var RxM = require('@mfjs/rx')(require('rx'));

function main(sources) {
  function toggledM() {
    M.yield(false);
    // could be just `yield false` if corresponding babel transform is disabled
    var a = sources.DOM.select('input');
    return M(a.events('change')).mapply(b => {
      return b.target.checked;
    });
  }

  var sinks = {
    DOM: RxM.run(function () {
      return (0, _cycleDom.div)([(0, _cycleDom.input)({
        type: 'checkbox'
      }), 'Toggle me', (0, _cycleDom.p)(toggledM() ? 'ON' : 'off')]);
    })
  };
  return sinks;
}

_cycleCore2['default'].run(main, {
  DOM: (0, _cycleDom.makeDOMDriver)('#main-container')
});

function modelM(action$) {
  eff(1);
  M.$.scan(function (acc, key) {
    index = acc.indexOf(key);

    if (index === -1) {
      return acc.concat(key).sort();
    }

    newAcc = acc.slice();
    newAcc.splice(index, 1);
    return newAcc;
  });
}

function expandAsRenderingFrames(point$) {
  var point;
  return M(point$).mbind(a => {
    point = a;
    return M(Observable.interval(10)).mapply(() => {
      return M.$(point).take(100);
    });
  });
}