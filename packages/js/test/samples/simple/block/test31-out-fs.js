function a() {
  var i, j, a;
  i = 0;
  j = 0;
  a = j;
  return M.chain(eff1(i, a), _1, _5, i);

  function _1(i) {
    var a;
    i++, j++;
    a = j;
    return M.chain(function b(i, k) {
      var z, a;
      z = 0;
      a = j;
      return M.chain(eff2(i, a, k, z), _1, _4, i, k, z);

      function _1(i, k, z) {
        var a;
        i++, j++, k++, z++;
        a = j;
        return M.chain(eff3(i, a, k, z), _2, _4, i, k, z);
      }

      function _2(i, k, z) {
        var a;
        a = j;
        return M.chain(eff4(i, a, k, z), _3, _4);
      }

      function _3() {
        return M.pure();
      }

      function _4(e) {
        return M.raise(e);
      }
    }(i, a), _2, _5, i);
  }

  function _2(i) {
    var a;
    i++, j++;
    a = j;
    return M.chain(eff5(i, a), _3, _5, i);
  }

  function _3(i) {
    var a;
    a = j;
    return M.chain(eff6(i, a), _4, _5);
  }

  function _4() {
    return M.pure();
  }

  function _5(e) {
    return M.raise(e);
  }
}