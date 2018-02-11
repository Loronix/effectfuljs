import * as M from '@effectful/core';

(function () {
  return M.chain(eff(2), _1, _3);

  function _1() {
    return M.chain(eff(4), _2, _3);
  }

  function _2() {
    return M.pure();
  }

  function _3(e) {
    return M.raise(e);
  }
});