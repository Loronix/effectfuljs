import * as M from '@effectful/core';

function a() {
  var i;
  return M.chain(eff0(), _1, _7);

  function _1() {
    i = 0;
    i++;
    return M.chain(eff1(i), _2, _7);
  }

  function _2() {
    if (t) {
      return M.chain(eff2(i), _3, _7);
    } else {
      return M.chain(eff3(), _4, _7);
    }
  }

  function _3() {
    i++;
    return M.chain(eff4(i), _4, _7);
  }

  function _4() {
    return M.chain(eff5(i), _5, _7);
  }

  function _5() {
    i++;
    return M.chain(eff6(i), _6, _7);
  }

  function _6() {
    return M.pure();
  }

  function _7(e) {
    return M.raise(e);
  }
}