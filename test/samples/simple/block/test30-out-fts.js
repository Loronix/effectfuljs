function b_1(i, a_v) {
  i++, a_v.j++;
  return eff2(i, a_v.j);
}

function a_1(i, b, a_v) {
  i++, a_v.j--;
  return M.jM(b(i), a_2, i, a_v);
}

function a_2(i, a_v) {
  i--, a_v.j++;
  return eff4(i, a_v.j);
}

function a() {
  var i,
      b,
      a_v = {
    j: undefined
  };

  b = function b(i) {
    var a_v;
    return M.jM(eff1(i, a_v.j), b_1, i, a_v);
  };

  i = 0;
  a_v.j = 0;
  return M.jM(eff3(i, a_v.j), a_1, i, b, a_v);
}