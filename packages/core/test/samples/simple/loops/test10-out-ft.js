import * as M from '@effectful/core';

function a() {
  var a = M.context();
  return M.scope(a_1, a_9);
}

function a_1(a) {
  return M.chain(init(), a_2, a_9);
}

function a_2(a, b) {
  a._i = b;
  return M.jump(void 0, a_3, a_9);
}

function a_3(a) {
  return M.chain(check(), a_4, a_9);
}

function a_4(a, b) {
  if (b === true) {
    return M.chain(initJ(), a_5, a_9);
  } else {
    return M.pure();
  }
}

function a_5(a, b) {
  a._j = b;
  return M.jump(void 0, a_6, a_9);
}

function a_6(a) {
  return M.chain(checkJ(), a_7, a_9);
}

function a_7(a, b) {
  if (b === true) {
    if (a._i === a._j) {
      return M.chain(updJ(), a_6, a_9);
    } else {
      return M.jump(void 0, a_8, a_9);
    }
  } else {
    return M.jump(void 0, a_8, a_9);
  }
}

function a_8(a) {
  return M.chain(upd(), a_3, a_9);
}

function a_9(a, e) {
  return M.raise(e);
}