import * as M from '@effectful/core';

function a() {
  var a;
  return M.chain(effc(3), _1, _4);

  function _1(b) {
    a = b;
    return M.chain(effb(2), _2, _4);
  }

  function _2(a) {
    return M.chain(eff(a + 4), _3, _4);
  }

  function _3(b) {
    5 + a + b;
    return M.pure();
  }

  function _4(e) {
    return M.raise(e);
  }
}