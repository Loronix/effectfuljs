function a_1(a_v) {
  if (ee) return a_2(a_v);else return a_3(a_v);
}

function a_2(a_v) {
  var a;
  a = a_v.i++;
  return M.jM(eff7(a), a_3, a_v);
}

function a_3(a_v) {
  return eff8(a_v.i);
}

function a() {
  var a_v = {
    i: undefined
  },
      a;
  a_v.i = 0;
  a = a_v.i++;
  return M.jM(eff5(a), a_1, a_v);
}