function a_1(b, a_v, a) {
  var c;
  c = a_v.j++;
  return M.jMB(eff3(b, c), a_2, a_v, a);
}

function a_2(b, a_v, a) {
  return M.jMB(eff5(a_v.i), a_3, a_v, a, b);
}

function a_3(c, a_v, a, b) {
  return M.jMB(eff2(a, b, c), a_4, a_v);
}

function a_4(a, a_v) {
  var b;
  b = a_v.i++;
  return M.jMB(eff1(a, b), a_5, a_v);
}

function a_5(a, a_v) {
  return eff0(a, a_v.i);
}

function a() {
  var a_v = {
    i: undefined,
    j: undefined
  },
      a;
  a_v.i = 0;
  a_v.j = 0;
  a = a_v.i++;
  return M.jMB(eff4(a_v.i, a_v.j), a_1, a_v, a);
}