import * as M from '@effectful/core';

function a1() {
  var a1 = M.context();
  return M.scopeH(a1_1, a1_4);
}

function a2() {
  var a2 = M.context();
  return M.scopeH(a2_1, a2_4);
}

function a3() {
  var a3 = M.context();
  return M.scopeH(a3_1, a3_5);
}

function a4() {
  var a4 = M.context();
  return M.scopeH(a4_1, a4_5);
}

function a5() {
  var a5 = M.context();
  return M.scopeH(a5_1, a5_3);
}

function a6() {
  var a6 = M.context();
  return M.scopeH(a6_1, a6_3);
}

function a7() {
  var a7 = M.context();
  return M.scopeH(a7_1, a7_3);
}

function a8() {
  var a8 = M.context();
  return M.scopeH(a8_1, a8_3);
}

function a9() {
  var a9 = M.context();
  return M.scopeH(a9_1, a9_3);
}

function a10() {
  var a10 = M.context();
  return M.scopeH(a10_1, a10_3);
}

function a11() {
  var a11 = M.context();
  return M.scopeH(a11_1, a11_3);
}

function a12() {
  var a12 = M.context();
  return M.scopeH(a12_1, a12_3);
}

function a13() {
  var a13 = M.context();
  return M.scopeH(a13_1, a13_4);
}

function a14() {
  var a14 = M.context();
  return M.scopeH(_a14_1, a14_4);
}

function a14_1() {
  var a14_1 = M.context();
  return M.scopeH(a14_1_1, a14_1_4);
}

function a15() {
  var a15 = M.context();
  return M.scopeH(a15_1, a15_4);
}

function a16() {
  var a16 = M.context();
  return M.scopeH(a16_1, a16_3);
}

function a17() {
  var a17 = M.context();
  return M.scopeH(a17_1, a17_3);
}

function a18() {
  var a18 = M.context();
  return M.scopeH(_a18_1, a18_4);
}

function a18_1() {
  var a18_1 = M.context();
  return M.scopeH(a18_1_1, a18_1_4);
}

function a19() {
  var a19 = M.context();
  return M.scopeH(_a19_1, a19_7);
}

function a19_1() {
  var a19_1 = M.context();
  return M.scopeH(a19_1_1, a19_1_7);
}

function b() {
  var b = M.context();
  return M.scopeH(b_1, b_22);
}

function a1() {
  var a1 = M.generator();
  return M.scopeH(_a1_1, a1_30);
}

function a1_1(a1) {
  return M.chainBH(eff(1), a1_2, a1_4);
}

function a1_2(a1, a) {
  if (!a) {
    return M.chainBH(eff(2), a1_3, a1_4);
  } else {
    return M.pure(a);
  }
}

function a1_3(a1) {
  return M.pure();
}

function a1_4(a1, e) {
  return M.raise(e);
}

function a2_1(a2) {
  return M.chainBH(eff(1), a2_2, a2_4);
}

function a2_2(a2, a) {
  if (a) {
    return M.chainBH(eff(2), a2_3, a2_4);
  } else {
    return M.pure(a);
  }
}

function a2_3(a2) {
  return M.pure();
}

function a2_4(a2, e) {
  return M.raise(e);
}

function a3_1(a3) {
  return M.chainBH(eff(1), a3_2, a3_5);
}

function a3_2(a3, a) {
  a3._ = a;
  return M.chainBH(eff(2), a3_3, a3_5);
}

function a3_3(a3, b) {
  var a;
  a = a3._ || b;

  if (!a) {
    return M.chainBH(eff(3), a3_4, a3_5);
  } else {
    return M.pure(a);
  }
}

function a3_4(a3) {
  return M.pure();
}

function a3_5(a3, e) {
  return M.raise(e);
}

function a4_1(a4) {
  return M.chainBH(eff(1), a4_2, a4_5);
}

function a4_2(a4, a) {
  a4._ = a;
  return M.chainBH(eff(2), a4_3, a4_5);
}

function a4_3(a4, b) {
  var a;
  a = a4._ && b;

  if (a) {
    return M.chainBH(eff(3), a4_4, a4_5);
  } else {
    return M.pure(a);
  }
}

function a4_4(a4) {
  return M.pure();
}

function a4_5(a4, e) {
  return M.raise(e);
}

function a5_1(a5) {
  var a;
  a = 1;

  if (!a) {
    return M.chainBH(eff(2), a5_2, a5_3);
  } else {
    return M.pure(a);
  }
}

function a5_2(a5) {
  return M.pure();
}

function a5_3(a5, e) {
  return M.raise(e);
}

function a6_1(a6) {
  return M.chainBH(eff(2), a6_2, a6_3);
}

function a6_2(a6, a) {
  if (!a) {
    a = 1;
  }

  return M.pure();
}

function a6_3(a6, e) {
  return M.raise(e);
}

function a7_1(a7) {
  var a;
  a = 1 + 1;

  if (!a) {
    return M.chainBH(eff(2), a7_2, a7_3);
  } else {
    return M.pure(a);
  }
}

function a7_2(a7) {
  return M.pure();
}

function a7_3(a7, e) {
  return M.raise(e);
}

function a8_1(a8) {
  return M.chainBH(eff(2), a8_2, a8_3);
}

function a8_2(a8, a) {
  if (!a) {
    a = 1 + 1;
  }

  return M.pure();
}

function a8_3(a8, e) {
  return M.raise(e);
}

function a9_1(a9) {
  var a;
  a = 1;

  if (a) {
    return M.chainBH(eff(2), a9_2, a9_3);
  } else {
    return M.pure(a);
  }
}

function a9_2(a9) {
  return M.pure();
}

function a9_3(a9, e) {
  return M.raise(e);
}

function a10_1(a10) {
  return M.chainBH(eff(2), a10_2, a10_3);
}

function a10_2(a10, a) {
  if (a) {
    a = 1;
  }

  return M.pure();
}

function a10_3(a10, e) {
  return M.raise(e);
}

function a11_1(a11) {
  var a;
  a = 1 + 1;

  if (a) {
    return M.chainBH(eff(2), a11_2, a11_3);
  } else {
    return M.pure(a);
  }
}

function a11_2(a11) {
  return M.pure();
}

function a11_3(a11, e) {
  return M.raise(e);
}

function a12_1(a12) {
  return M.chainBH(eff(2), a12_2, a12_3);
}

function a12_2(a12, a) {
  if (a) {
    a = 1 + 1;
  }

  return M.pure();
}

function a12_3(a12, e) {
  return M.raise(e);
}

function a13_1(a13) {
  return M.chainBH(eff(1), a13_2, a13_4);
}

function a13_2(a13, a) {
  if (a) {
    return M.chainBH(eff(2), a13_3, a13_4);
  } else {
    return M.chainBH(eff(3), a13_3, a13_4);
  }
}

function a13_3(a13) {
  return M.pure();
}

function a13_4(a13, e) {
  return M.raise(e);
}

function _a14_1(a14) {
  return M.chainBH(eff(1), a14_2, a14_4);
}

function a14_2(a14, a) {
  var b;

  if (a) {
    b = 2;
    return M.pure(b);
  } else {
    return M.chainBH(eff(3), a14_3, a14_4);
  }
}

function a14_3(a14) {
  return M.pure();
}

function a14_4(a14, e) {
  return M.raise(e);
}

function a14_1_1(a14_1) {
  return M.chainBH(eff(1), a14_1_2, a14_1_4);
}

function a14_1_2(a14_1, a) {
  var b;

  if (a) {
    b = 2;
    return M.jumpBH(b, a14_1_3, a14_1_4);
  } else {
    return M.chainBH(eff(3), a14_1_3, a14_1_4);
  }
}

function a14_1_3(a14_1, r) {
  return M.pure(r);
}

function a14_1_4(a14_1, e) {
  return M.raise(e);
}

function a15_1(a15) {
  return M.chainBH(eff(1), a15_2, a15_4);
}

function a15_2(a15, a) {
  var b;

  if (a) {
    return M.chainBH(eff(2), a15_3, a15_4);
  } else {
    b = 3;
    return M.pure(b);
  }
}

function a15_3(a15) {
  return M.pure();
}

function a15_4(a15, e) {
  return M.raise(e);
}

function a16_1(a16) {
  if (1) {
    return M.chainBH(eff(2), a16_2, a16_3);
  } else {
    return M.chainBH(eff(3), a16_2, a16_3);
  }
}

function a16_2(a16) {
  return M.pure();
}

function a16_3(a16, e) {
  return M.raise(e);
}

function a17_1(a17) {
  return M.chainBH(eff(1), a17_2, a17_3);
}

function a17_2(a17, a) {
  var b;

  if (a) {
    b = 2;
  } else {
    b = 3;
  }

  console.log(b);
  return M.pure();
}

function a17_3(a17, e) {
  return M.raise(e);
}

function _a18_1(a18) {
  return M.chainBH(eff(1), a18_2, a18_4);
}

function a18_2(a18, a) {
  a18._ = a;
  return M.chainBH(eff(2), a18_3, a18_4);
}

function a18_3(a18, a) {
  if (a18._ + a) {
    2;
  } else {
    3;
  }

  return M.pure();
}

function a18_4(a18, e) {
  return M.raise(e);
}

function a18_1_1(a18_1) {
  return M.chainBH(eff(1), a18_1_2, a18_1_4);
}

function a18_1_2(a18_1, a) {
  a18_1._ = a;
  return M.chainBH(eff(2), a18_1_3, a18_1_4);
}

function a18_1_3(a18_1, a) {
  var b;

  if (a18_1._ + a) {
    b = 2;
  } else {
    b = 3;
  }

  return M.pure(b);
}

function a18_1_4(a18_1, e) {
  return M.raise(e);
}

function _a19_1(a19) {
  return M.chainBH(eff(1), a19_2, a19_7);
}

function a19_2(a19, a) {
  if (!a) {
    return M.chainBH(eff(2), a19_3, a19_7);
  } else {
    return M.jumpBH(a, a19_5, a19_7);
  }
}

function a19_3(a19, a) {
  a19._ = a;
  return M.chainBH(eff(3), a19_4, a19_7);
}

function a19_4(a19, b) {
  var a;
  a = (a19._, b);
  return M.jumpH(a19_5, a19_7);
}

function a19_5(a19, a) {
  return M.chainBH(eff(a), a19_6, a19_7);
}

function a19_6(a19) {
  return M.pure();
}

function a19_7(a19, e) {
  return M.raise(e);
}

function a19_1_1(a19_1) {
  return M.chainBH(eff(1), a19_1_2, a19_1_7);
}

function a19_1_2(a19_1, a) {
  if (!a) {
    return M.chainBH(eff(2), a19_1_3, a19_1_7);
  } else {
    return M.jumpBH(a, a19_1_5, a19_1_7);
  }
}

function a19_1_3(a19_1, a) {
  a19_1._1 = a;
  return M.chainBH(eff(3), a19_1_4, a19_1_7);
}

function a19_1_4(a19_1, b) {
  var a;
  a = (a19_1._1, b);
  return M.jumpH(a19_1_5, a19_1_7);
}

function a19_1_5(a19_1, a) {
  return M.chainBH(eff(a), a19_1_6, a19_1_7);
}

function a19_1_6(a19_1, r) {
  return M.pure(r);
}

function a19_1_7(a19_1, e) {
  return M.raise(e);
}

function b_1(b) {
  return M.chainBH(eff(1), b_2, b_22);
}

function b_2(b, a) {
  if (!a) {
    return M.chainBH(eff(2), b_3, b_22);
  } else {
    return M.jumpBH(a, b_3, b_22);
  }
}

function b_3(b) {
  return M.chainBH(eff(1), b_4, b_22);
}

function b_4(b, a) {
  if (a) {
    return M.chainBH(eff(2), b_5, b_22);
  } else {
    return M.jumpBH(a, b_5, b_22);
  }
}

function b_5(b) {
  var a;
  a = 1;

  if (!a) {
    return M.chainBH(eff(2), b_6, b_22);
  } else {
    return M.jumpBH(a, b_6, b_22);
  }
}

function b_6(b) {
  return M.chainBH(eff(2), b_7, b_22);
}

function b_7(b, a) {
  var c;

  if (!a) {
    a = 1;
  }

  c = 1 + 1;

  if (!c) {
    return M.chainBH(eff(2), b_8, b_22);
  } else {
    return M.jumpBH(c, b_8, b_22);
  }
}

function b_8(b) {
  return M.chainBH(eff(2), b_9, b_22);
}

function b_9(b, a) {
  var c;

  if (!a) {
    a = 1 + 1;
  }

  c = 1;

  if (c) {
    return M.chainBH(eff(2), b_10, b_22);
  } else {
    return M.jumpBH(c, b_10, b_22);
  }
}

function b_10(b) {
  return M.chainBH(eff(2), b_11, b_22);
}

function b_11(b, a) {
  var c;

  if (a) {
    a = 1;
  }

  c = 1 + 1;

  if (c) {
    return M.chainBH(eff(2), b_12, b_22);
  } else {
    return M.jumpBH(c, b_12, b_22);
  }
}

function b_12(b) {
  return M.chainBH(eff(2), b_13, b_22);
}

function b_13(b, a) {
  if (a) {
    a = 1 + 1;
  }

  return M.chainBH(eff(1), b_14, b_22);
}

function b_14(b, a) {
  if (a) {
    return M.chainBH(eff(2), b_15, b_22);
  } else {
    return M.chainBH(eff(3), b_15, b_22);
  }
}

function b_15(b) {
  return M.chainBH(eff(1), b_16, b_22);
}

function b_16(b, a) {
  var c;

  if (a) {
    c = 2;
    return M.jumpBH(c, b_17, b_22);
  } else {
    return M.chainBH(eff(3), b_17, b_22);
  }
}

function b_17(b) {
  return M.chainBH(eff(1), b_18, b_22);
}

function b_18(b, a) {
  var c;

  if (a) {
    return M.chainBH(eff(2), b_19, b_22);
  } else {
    c = 3;
    return M.jumpBH(c, b_19, b_22);
  }
}

function b_19(b) {
  if (1) {
    return M.chainBH(eff(2), b_20, b_22);
  } else {
    return M.chainBH(eff(3), b_20, b_22);
  }
}

function b_20(b) {
  return M.chainBH(eff(1), b_21, b_22);
}

function b_21(b, a) {
  var c;

  if (a) {
    c = 2;
  } else {
    c = 3;
  }

  return M.pure(c);
}

function b_22(b, e) {
  return M.raise(e);
}

function _a1_1(a1) {
  return M.yldStarBH(M.yld('a1'), _a1_2, a1_30);
}

function _a1_2(a1, a) {
  if (a) {
    return M.yldStarBH(M.yld('a2'), _a1_3, a1_30);
  } else {
    return M.yldStarBH(M.yld('a3'), _a1_3, a1_30);
  }
}

function _a1_3(a1) {
  return M.yldStarBH(M.yld('b1'), _a1_4, a1_30);
}

function _a1_4(a1, a) {
  var b;

  if (a % 2) {
    b = 'b2';
  } else {
    b = 'b3';
  }

  return M.yldStarBH(M.yld(b), a1_5, a1_30);
}

function a1_5(a1) {
  return M.yldStarBH(M.yld('c1'), a1_6, a1_30);
}

function a1_6(a1, a) {
  var b;

  if (a % 2) {
    return M.yldStarBH(M.yld('c2'), a1_7, a1_30);
  } else {
    b = 'c3';
    return M.jumpBH(b, a1_7, a1_30);
  }
}

function a1_7(a1, a) {
  return M.yldStarBH(M.yld(a), a1_8, a1_30);
}

function a1_8(a1) {
  return M.yldStarBH(M.yld('d1'), a1_9, a1_30);
}

function a1_9(a1, a) {
  var b;

  if (a % 2) {
    b = 'd2';
    return M.jumpBH(b, a1_10, a1_30);
  } else {
    return M.yldStarBH(M.yld('d3'), a1_10, a1_30);
  }
}

function a1_10(a1, a) {
  return M.yldStarBH(M.yld(a), a1_11, a1_30);
}

function a1_11(a1) {
  return M.yldStarBH(M.yld('e1'), a1_12, a1_30);
}

function a1_12(a1, a) {
  if (a % 2) {
    return M.yldStarBH(M.yld('e2'), a1_13, a1_30);
  } else {
    return M.yldStarBH(M.yld('e3'), a1_13, a1_30);
  }
}

function a1_13(a1, a) {
  return M.yldStarBH(M.yld(a), a1_14, a1_30);
}

function a1_14(a1) {
  var a;
  a = 'a1l' && 'a1r';
  return M.yldStarBH(M.yld(a), a1_15, a1_30);
}

function a1_15(a1) {
  var a;
  a = 'a2l' && 'a2r';
  return M.yldStarBH(M.yld(a), a1_16, a1_30);
}

function a1_16(a1, a) {
  return M.yldStarBH(M.yld(a), a1_17, a1_30);
}

function a1_17(a1) {
  var a;
  a = 'a3l';

  if (a) {
    return M.yldStarBH(M.yld('a3r'), a1_18, a1_30);
  } else {
    return M.jumpBH(a, a1_18, a1_30);
  }
}

function a1_18(a1, a) {
  return M.yldStarBH(M.yld(a), a1_19, a1_30);
}

function a1_19(a1) {
  var a;
  a = 'a4l';

  if (a) {
    return M.yldStarBH(M.yld('a4r'), a1_20, a1_30);
  } else {
    return M.jumpBH(a, a1_20, a1_30);
  }
}

function a1_20(a1, a) {
  return M.yldStarBH(M.yld(a), a1_21, a1_30);
}

function a1_21(a1, a) {
  return M.yldStarBH(M.yld(a), a1_22, a1_30);
}

function a1_22(a1) {
  var a;
  a = 'o1l' || 'o1r';
  return M.yldStarBH(M.yld(a), a1_23, a1_30);
}

function a1_23(a1) {
  return M.yldStarBH(M.yld('o2l'), a1_24, a1_30);
}

function a1_24(a1, a) {
  if (a) {
    a = 'o2r';
  }

  return M.yldStarBH(M.yld(a), a1_25, a1_30);
}

function a1_25(a1) {
  var a;
  a = 'o3l';

  if (a) {
    return M.yldStarBH(M.yld('o3r'), a1_26, a1_30);
  } else {
    return M.jumpBH(a, a1_26, a1_30);
  }
}

function a1_26(a1, a) {
  return M.yldStarBH(M.yld(a), a1_27, a1_30);
}

function a1_27(a1) {
  return M.yldStarBH(M.yld('o4l'), a1_28, a1_30);
}

function a1_28(a1, a) {
  if (a) {
    return M.yldStarBH(M.yld('o4r'), a1_29, a1_30);
  } else {
    return M.jumpBH(a, a1_29, a1_30);
  }
}

function a1_29(a1, r) {
  return M.pure(r);
}

function a1_30(a1, e) {
  return M.raise(e);
}