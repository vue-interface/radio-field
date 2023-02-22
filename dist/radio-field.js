import { defineComponent as b, computed as Ue, openBlock as j, createElementBlock as O, Fragment as de, renderList as fe, unref as w, renderSlot as u, normalizeProps as E, guardReactiveProps as k, resolveComponent as D, resolveDirective as Ze, normalizeClass as R, withDirectives as _e, createElementVNode as g, mergeProps as Ge, vModelRadio as qe, createTextVNode as U, toDisplayString as $, createBlock as He, withCtx as Z, createCommentVNode as _, createVNode as We } from "vue";
const y = {};
function i(...e) {
  if (!e.length)
    return y;
  const [t, r] = e;
  return typeof t == "string" ? typeof y[t] < "u" ? y[t] : r : Array.isArray(t) ? t.reduce((o, s) => Object.assign(o, {
    //@ts-ignore
    [s]: y[s]
  }), {}) : Object.assign(y, ...e);
}
const he = b({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const e = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, t = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${e}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${t}`]: !!this.shadow
      };
    }
  }
});
var Je = typeof global == "object" && global && global.Object === Object && global;
const pe = Je;
var Ye = typeof self == "object" && self && self.Object === Object && self, Ke = pe || Ye || Function("return this")();
const a = Ke;
var Qe = a.Symbol;
const p = Qe;
var be = Object.prototype, Xe = be.hasOwnProperty, et = be.toString, m = p ? p.toStringTag : void 0;
function tt(e) {
  var t = Xe.call(e, m), r = e[m];
  try {
    e[m] = void 0;
    var o = !0;
  } catch {
  }
  var s = et.call(e);
  return o && (t ? e[m] = r : delete e[m]), s;
}
var rt = Object.prototype, ot = rt.toString;
function nt(e) {
  return ot.call(e);
}
var st = "[object Null]", it = "[object Undefined]", G = p ? p.toStringTag : void 0;
function c(e) {
  return e == null ? e === void 0 ? it : st : G && G in Object(e) ? tt(e) : nt(e);
}
function S(e) {
  return e != null && typeof e == "object";
}
var at = "[object Symbol]";
function lt(e) {
  return typeof e == "symbol" || S(e) && c(e) == at;
}
function ut(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, s = Array(o); ++r < o; )
    s[r] = t(e[r], r, e);
  return s;
}
var ct = Array.isArray;
const ve = ct;
var dt = 1 / 0, q = p ? p.prototype : void 0, H = q ? q.toString : void 0;
function ye(e) {
  if (typeof e == "string")
    return e;
  if (ve(e))
    return ut(e, ye) + "";
  if (lt(e))
    return H ? H.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -dt ? "-0" : t;
}
function P(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ft = "[object AsyncFunction]", ht = "[object Function]", pt = "[object GeneratorFunction]", bt = "[object Proxy]";
function me(e) {
  if (!P(e))
    return !1;
  var t = c(e);
  return t == ht || t == pt || t == ft || t == bt;
}
var vt = a["__core-js_shared__"];
const B = vt;
var W = function() {
  var e = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yt(e) {
  return !!W && W in e;
}
var mt = Function.prototype, gt = mt.toString;
function d(e) {
  if (e != null) {
    try {
      return gt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jt = /[\\^$.*+?()[\]{}|]/g, Ct = /^\[object .+?Constructor\]$/, St = Function.prototype, At = Object.prototype, $t = St.toString, Ot = At.hasOwnProperty, Et = RegExp(
  "^" + $t.call(Ot).replace(jt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kt(e) {
  if (!P(e) || yt(e))
    return !1;
  var t = me(e) ? Et : Ct;
  return t.test(d(e));
}
function xt(e, t) {
  return e == null ? void 0 : e[t];
}
function A(e, t) {
  var r = xt(e, t);
  return kt(r) ? r : void 0;
}
var Ft = A(a, "WeakMap");
const I = Ft;
var wt = 9007199254740991;
function ge(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wt;
}
function Bt(e) {
  return e != null && ge(e.length) && !me(e);
}
var zt = Object.prototype;
function je(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || zt;
  return e === r;
}
var Vt = "[object Arguments]";
function J(e) {
  return S(e) && c(e) == Vt;
}
var Ce = Object.prototype, It = Ce.hasOwnProperty, Nt = Ce.propertyIsEnumerable, Tt = J(function() {
  return arguments;
}()) ? J : function(e) {
  return S(e) && It.call(e, "callee") && !Nt.call(e, "callee");
};
const Mt = Tt;
function Lt() {
  return !1;
}
var Se = typeof exports == "object" && exports && !exports.nodeType && exports, Y = Se && typeof module == "object" && module && !module.nodeType && module, Pt = Y && Y.exports === Se, K = Pt ? a.Buffer : void 0, Dt = K ? K.isBuffer : void 0, Rt = Dt || Lt;
const Ut = Rt;
var Zt = "[object Arguments]", _t = "[object Array]", Gt = "[object Boolean]", qt = "[object Date]", Ht = "[object Error]", Wt = "[object Function]", Jt = "[object Map]", Yt = "[object Number]", Kt = "[object Object]", Qt = "[object RegExp]", Xt = "[object Set]", er = "[object String]", tr = "[object WeakMap]", rr = "[object ArrayBuffer]", or = "[object DataView]", nr = "[object Float32Array]", sr = "[object Float64Array]", ir = "[object Int8Array]", ar = "[object Int16Array]", lr = "[object Int32Array]", ur = "[object Uint8Array]", cr = "[object Uint8ClampedArray]", dr = "[object Uint16Array]", fr = "[object Uint32Array]", n = {};
n[nr] = n[sr] = n[ir] = n[ar] = n[lr] = n[ur] = n[cr] = n[dr] = n[fr] = !0;
n[Zt] = n[_t] = n[rr] = n[Gt] = n[or] = n[qt] = n[Ht] = n[Wt] = n[Jt] = n[Yt] = n[Kt] = n[Qt] = n[Xt] = n[er] = n[tr] = !1;
function hr(e) {
  return S(e) && ge(e.length) && !!n[c(e)];
}
function pr(e) {
  return function(t) {
    return e(t);
  };
}
var Ae = typeof exports == "object" && exports && !exports.nodeType && exports, C = Ae && typeof module == "object" && module && !module.nodeType && module, br = C && C.exports === Ae, z = br && pe.process, vr = function() {
  try {
    var e = C && C.require && C.require("util").types;
    return e || z && z.binding && z.binding("util");
  } catch {
  }
}();
const Q = vr;
var X = Q && Q.isTypedArray, yr = X ? pr(X) : hr;
const mr = yr;
function $e(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var gr = $e(Object.keys, Object);
const jr = gr;
var Cr = Object.prototype, Sr = Cr.hasOwnProperty;
function Ar(e) {
  if (!je(e))
    return jr(e);
  var t = [];
  for (var r in Object(e))
    Sr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var $r = A(a, "Map");
const N = $r;
function Oe(e) {
  return e == null ? "" : ye(e);
}
var Or = $e(Object.getPrototypeOf, Object);
const Er = Or;
var kr = "[object Object]", xr = Function.prototype, Fr = Object.prototype, Ee = xr.toString, wr = Fr.hasOwnProperty, Br = Ee.call(Object);
function zr(e) {
  if (!S(e) || c(e) != kr)
    return !1;
  var t = Er(e);
  if (t === null)
    return !0;
  var r = wr.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ee.call(r) == Br;
}
function Vr(e, t, r, o) {
  var s = -1, f = e == null ? 0 : e.length;
  for (o && f && (r = e[++s]); ++s < f; )
    r = t(r, e[s], s, e);
  return r;
}
function Ir(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var Nr = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Tr = Ir(Nr);
const Mr = Tr;
var Lr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pr = "\\u0300-\\u036f", Dr = "\\ufe20-\\ufe2f", Rr = "\\u20d0-\\u20ff", Ur = Pr + Dr + Rr, Zr = "[" + Ur + "]", _r = RegExp(Zr, "g");
function Gr(e) {
  return e = Oe(e), e && e.replace(Lr, Mr).replace(_r, "");
}
var qr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Hr(e) {
  return e.match(qr) || [];
}
var Wr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Jr(e) {
  return Wr.test(e);
}
var ke = "\\ud800-\\udfff", Yr = "\\u0300-\\u036f", Kr = "\\ufe20-\\ufe2f", Qr = "\\u20d0-\\u20ff", Xr = Yr + Kr + Qr, xe = "\\u2700-\\u27bf", Fe = "a-z\\xdf-\\xf6\\xf8-\\xff", eo = "\\xac\\xb1\\xd7\\xf7", to = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ro = "\\u2000-\\u206f", oo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", we = "A-Z\\xc0-\\xd6\\xd8-\\xde", no = "\\ufe0e\\ufe0f", Be = eo + to + ro + oo, ze = "['’]", ee = "[" + Be + "]", so = "[" + Xr + "]", Ve = "\\d+", io = "[" + xe + "]", Ie = "[" + Fe + "]", Ne = "[^" + ke + Be + Ve + xe + Fe + we + "]", ao = "\\ud83c[\\udffb-\\udfff]", lo = "(?:" + so + "|" + ao + ")", uo = "[^" + ke + "]", Te = "(?:\\ud83c[\\udde6-\\uddff]){2}", Me = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "[" + we + "]", co = "\\u200d", te = "(?:" + Ie + "|" + Ne + ")", fo = "(?:" + h + "|" + Ne + ")", re = "(?:" + ze + "(?:d|ll|m|re|s|t|ve))?", oe = "(?:" + ze + "(?:D|LL|M|RE|S|T|VE))?", Le = lo + "?", Pe = "[" + no + "]?", ho = "(?:" + co + "(?:" + [uo, Te, Me].join("|") + ")" + Pe + Le + ")*", po = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", bo = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", vo = Pe + Le + ho, yo = "(?:" + [io, Te, Me].join("|") + ")" + vo, mo = RegExp([
  h + "?" + Ie + "+" + re + "(?=" + [ee, h, "$"].join("|") + ")",
  fo + "+" + oe + "(?=" + [ee, h + te, "$"].join("|") + ")",
  h + "?" + te + "+" + re,
  h + "+" + oe,
  bo,
  po,
  Ve,
  yo
].join("|"), "g");
function go(e) {
  return e.match(mo) || [];
}
function jo(e, t, r) {
  return e = Oe(e), t = r ? void 0 : t, t === void 0 ? Jr(e) ? go(e) : Hr(e) : e.match(t) || [];
}
var Co = "['’]", So = RegExp(Co, "g");
function Ao(e) {
  return function(t) {
    return Vr(jo(Gr(t).replace(So, "")), e, "");
  };
}
var $o = A(a, "DataView");
const T = $o;
var Oo = A(a, "Promise");
const M = Oo;
var Eo = A(a, "Set");
const L = Eo;
var ne = "[object Map]", ko = "[object Object]", se = "[object Promise]", ie = "[object Set]", ae = "[object WeakMap]", le = "[object DataView]", xo = d(T), Fo = d(N), wo = d(M), Bo = d(L), zo = d(I), l = c;
(T && l(new T(new ArrayBuffer(1))) != le || N && l(new N()) != ne || M && l(M.resolve()) != se || L && l(new L()) != ie || I && l(new I()) != ae) && (l = function(e) {
  var t = c(e), r = t == ko ? e.constructor : void 0, o = r ? d(r) : "";
  if (o)
    switch (o) {
      case xo:
        return le;
      case Fo:
        return ne;
      case wo:
        return se;
      case Bo:
        return ie;
      case zo:
        return ae;
    }
  return t;
});
const Vo = l;
var Io = "[object Map]", No = "[object Set]", To = Object.prototype, Mo = To.hasOwnProperty;
function Lo(e) {
  if (e == null)
    return !0;
  if (Bt(e) && (ve(e) || typeof e == "string" || typeof e.splice == "function" || Ut(e) || mr(e) || Mt(e)))
    return !e.length;
  var t = Vo(e);
  if (t == Io || t == No)
    return !e.size;
  if (je(e))
    return !Ar(e).length;
  for (var r in e)
    if (Mo.call(e, r))
      return !1;
  return !0;
}
var Po = Ao(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const x = Po, Do = /* @__PURE__ */ b({
  __name: "FormControlErrors",
  props: {
    error: null,
    errors: null,
    name: null,
    id: null
  },
  setup(e) {
    const t = e, r = String((t == null ? void 0 : t.id) || (t == null ? void 0 : t.name)), o = Ue(() => t.error ? /* @__PURE__ */ new Map(
      [[r, [t.error]]]
    ) : zr(t.errors) ? new Map(
      Object.entries(t.errors)
    ) : Array.isArray(t.errors) ? /* @__PURE__ */ new Map(
      [[r, t.errors]]
    ) : /* @__PURE__ */ new Map());
    return (s, f) => (j(!0), O(de, null, fe(w(o).get(w(r)), (F) => u(s.$slots, "default", E(k({ key: w(r), error: F })))), 256));
  }
}), Ro = /* @__PURE__ */ b({
  __name: "FormControlFeedback",
  props: {
    feedback: null
  },
  setup(e) {
    return (t, r) => (j(!0), O(de, null, fe([].concat(e.feedback), (o) => u(t.$slots, "default", E(k({ feedback: o })))), 256));
  }
});
function ue(e, t, r = "-") {
  const o = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    x(o),
    e
  ].filter((s) => !!s).join(r);
}
const Uo = b({
  components: {
    FormControlErrors: Do,
    FormControlFeedback: Ro
  },
  directives: {
    bindEvents: {
      created(e, t) {
        var r, o;
        (o = (r = t.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, e);
      }
    }
  },
  mixins: [
    he
  ],
  inheritAttrs: !1,
  props: {
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => i("animated", !1)
    },
    /**
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
      type: [Array, Object, String],
      default: void 0
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
      type: [Array, Object, String],
      default: () => i("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => i("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [Object, String, Boolean],
      default: () => i("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be invalid.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => i("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Boolean, Number, String, Array, Object],
      default: void 0
    },
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be valid.
     */
    valid: Boolean
  },
  emits: [
    "focus",
    "blur",
    "change",
    "click",
    "keypress",
    "keyup",
    "keydown",
    "progress",
    "paste",
    "update:modelValue"
  ],
  data() {
    return {
      currentValue: null,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1
    };
  },
  computed: {
    model: {
      get() {
        return this.getModelValue();
      },
      set(e) {
        this.setModelValue(e);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    isEmpty() {
      return Lo(this.model);
    },
    isInvalid() {
      return !!(this.invalid || this.error || (Array.isArray(this.errors) ? this.errors.length : this.errors[this.$attrs.id || this.$attrs.name]));
    },
    isValid() {
      return !!(this.valid || this.feedback);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses
        // value: this.model
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": this.isValid,
        "is-invalid": this.isInvalid
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return ue(this.size, this.formControlClass);
    },
    formGroupClasses() {
      return Object.assign({
        animated: this.animated,
        "form-group": this.group,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-dirty": this.isDirty,
        "is-empty": this.isEmpty,
        "is-invalid": this.isInvalid,
        "is-valid": this.isValid,
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && ue(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [x(this.componentName)]: !0
      });
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  methods: {
    bindEvents(e) {
      for (const t of this.$options.emits)
        e.addEventListener(t, (r) => {
          this.$emit(t, r);
        });
      e.addEventListener("focus", () => {
        this.isDirty = !0, this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      });
    },
    blur() {
      var e;
      (e = this.$refs.field) == null || e.blur();
    },
    focus() {
      var e;
      (e = this.$refs.field) == null || e.focus();
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && !Array.isArray(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || P(e) ? e : [e];
    },
    getModelValue() {
      return this.modelValue !== void 0 ? this.modelValue : this.currentValue;
    },
    setModelValue(e) {
      this.hasChanged = !0, this.currentValue = e, this.$emit("update:modelValue", e);
    }
  }
});
function V(e, t, r = "-") {
  const o = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    x(o),
    e
  ].filter((s) => !!s).join(r);
}
function ce(e) {
  return !Array.isArray(e) && typeof e == "object";
}
b({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, o;
        (o = (r = t.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, e);
      }
    }
  },
  mixins: [
    he
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => i("animated", !1)
    },
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
      type: String,
      default: () => i("defaultControlClass", "form-control")
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => i("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: Boolean,
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [String, Boolean],
      default: () => i("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Display the form field inline.
     */
    inline: Boolean,
    /**
     * The invalid property.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => i("labelClass", "form-label")
    },
    /**
     * Should the control look like a pill.
     */
    pill: Boolean,
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
      type: String,
      default: void 0
    },
    /**
     * The valid property.
     */
    valid: Boolean
  },
  emits: [
    "blur",
    "change",
    "click",
    "focus",
    "keydown",
    "keypress",
    "keyup",
    "update:modelValue"
  ],
  data() {
    return {
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !0
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || (Math.random() + 1).toString(36).substring(7);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.fromEntries(
        Object.entries(this.$attrs).concat([
          ["id", this.id],
          ["class", this.controlClasses],
          ["value", this.modelValue]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return V(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && V(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && V(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      }, !!this.componentName && {
        [x(this.componentName)]: !0
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        [this.pillClasses]: this.pill,
        [this.plaintextClass]: this.plaintext,
        [this.spacing]: !!this.spacing
      }, this.shadowableClass);
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
    },
    pillClasses() {
      return "rounded rounded-pill";
    },
    plaintextClass() {
      return "form-control-plaintext";
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    }
  },
  watch: {
    hasFocus() {
      this.shouldChangeOnFocus() && (this.hasChanged = !0);
    },
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(e, t) {
      var r;
      t || (t = this.onInput);
      const o = e instanceof HTMLSelectElement ? (r = e.querySelectorAll("option")) == null ? void 0 : r[e.selectedIndex] : null;
      o && (e.value = o == null ? void 0 : o.value), e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((s) => {
        e.addEventListener(s, (f) => {
          this.$emit(s, f);
        });
      });
    },
    blur() {
      this.getInputField() && this.getInputField().blur();
    },
    focus() {
      this.getInputField() && this.getInputField().focus();
    },
    getInputField() {
      return this.$el.querySelector(
        ".form-control, input, select, textarea"
      );
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && ce(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || ce(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
const Zo = b({
  name: "RadioField",
  extends: Uo,
  props: {
    /**
     * The checked values
     *
     * @property String
     */
    checked: Boolean,
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: !1
    },
    /**
     * The checked values.
     *
     * @property any
     */
    value: {
      default: void 0
    },
    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    formControlClass: {
      type: String,
      default: "form-check-input"
    },
    /**
     * Display the form field and label inline
     *
     * @property Function
     */
    inline: Boolean,
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: "form-check-label"
    }
  },
  // data: () => ({
  //     checkedValues: []
  // }),
  computed: {
    inlineClass() {
      return this.inline && "form-check-inline";
    }
  }
}), _o = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, s] of t)
    r[o] = s;
  return r;
}, Go = ["id", "value"], qo = ["for"], Ho = {
  invalid: "",
  class: "invalid-feedback"
}, Wo = /* @__PURE__ */ g("br", null, null, -1), Jo = {
  valid: "",
  class: "valid-feedback"
};
function Yo(e, t, r, o, s, f) {
  const F = D("FormControlErrors"), De = D("FormControlFeedback"), Re = Ze("bind-events");
  return j(), O("div", {
    class: R(["form-check", { [e.inlineClass]: e.inline, ...e.formGroupClasses }])
  }, [
    _e(g("input", Ge({
      id: e.id,
      ref: "field",
      "onUpdate:modelValue": t[0] || (t[0] = (v) => e.model = v)
    }, e.controlAttributes, {
      value: e.value,
      type: "radio"
    }), null, 16, Go), [
      [qe, e.model],
      [Re]
    ]),
    u(e.$slots, "label", {}, () => [
      g("label", {
        ref: "label",
        class: R({ [e.labelClass]: !0 }),
        for: e.id
      }, [
        u(e.$slots, "default", {}, () => [
          U($(e.label), 1)
        ])
      ], 10, qo)
    ]),
    u(e.$slots, "errors", E(k({ error: e.error, errors: e.errors, id: e.$attrs.id, name: e.$attrs.name })), () => [
      e.error || e.errors ? (j(), He(F, {
        key: 0,
        id: e.$attrs.id,
        name: e.$attrs.name,
        error: e.error,
        errors: e.errors
      }, {
        default: Z(({ error: v }) => [
          g("div", Ho, [
            U($(v), 1),
            Wo
          ])
        ]),
        _: 1
      }, 8, ["id", "name", "error", "errors"])) : _("", !0)
    ]),
    u(e.$slots, "feedback", E(k({ feedback: e.feedback })), () => [
      We(De, { feedback: e.feedback }, {
        default: Z(({ feedback: v }) => [
          g("div", Jo, $(v), 1)
        ]),
        _: 1
      }, 8, ["feedback"])
    ]),
    u(e.$slots, "help", {}, () => [
      e.helpText ? (j(), O("small", {
        key: 0,
        ref: "help"
      }, $(e.helpText), 513)) : _("", !0)
    ])
  ], 2);
}
const Qo = /* @__PURE__ */ _o(Zo, [["render", Yo]]);
export {
  Qo as RadioField
};
//# sourceMappingURL=radio-field.js.map
