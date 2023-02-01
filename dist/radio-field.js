import { defineComponent as v, resolveDirective as q, openBlock as h, createElementBlock as c, normalizeClass as b, withDirectives as J, createElementVNode as C, mergeProps as K, renderSlot as f, createTextVNode as W, toDisplayString as g, createCommentVNode as y } from "vue";
const o = {};
function l(...e) {
  if (!e.length)
    return o;
  const [t, u] = e;
  return typeof t == "string" ? typeof o[t] < "u" ? o[t] : u : Array.isArray(t) ? t.reduce((i, s) => Object.assign(i, {
    [s]: o[s]
  }), {}) : Object.assign(o, ...e);
}
const Q = v({
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
var X = typeof global == "object" && global && global.Object === Object && global;
const _ = X;
var ee = typeof self == "object" && self && self.Object === Object && self, te = _ || ee || Function("return this")();
const ue = te;
var ie = ue.Symbol;
const a = ie;
var x = Object.prototype, se = x.hasOwnProperty, ne = x.toString, d = a ? a.toStringTag : void 0;
function ae(e) {
  var t = se.call(e, d), u = e[d];
  try {
    e[d] = void 0;
    var i = !0;
  } catch {
  }
  var s = ne.call(e);
  return i && (t ? e[d] = u : delete e[d]), s;
}
var re = Object.prototype, oe = re.toString;
function le(e) {
  return oe.call(e);
}
var de = "[object Null]", he = "[object Undefined]", m = a ? a.toStringTag : void 0;
function ce(e) {
  return e == null ? e === void 0 ? he : de : m && m in Object(e) ? ae(e) : le(e);
}
function fe(e) {
  return e != null && typeof e == "object";
}
var pe = "[object Symbol]";
function ve(e) {
  return typeof e == "symbol" || fe(e) && ce(e) == pe;
}
function be(e, t) {
  for (var u = -1, i = e == null ? 0 : e.length, s = Array(i); ++u < i; )
    s[u] = t(e[u], u, e);
  return s;
}
var Ce = Array.isArray;
const ge = Ce;
var ye = 1 / 0, E = a ? a.prototype : void 0, F = E ? E.toString : void 0;
function j(e) {
  if (typeof e == "string")
    return e;
  if (ge(e))
    return be(e, j) + "";
  if (ve(e))
    return F ? F.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ye ? "-0" : t;
}
function B(e) {
  return e == null ? "" : j(e);
}
function me(e, t, u, i) {
  var s = -1, r = e == null ? 0 : e.length;
  for (i && r && (u = e[++s]); ++s < r; )
    u = t(u, e[s], s, e);
  return u;
}
function Ee(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var Fe = {
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
}, Ae = Ee(Fe);
const Se = Ae;
var $e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ke = "\\u0300-\\u036f", De = "\\ufe20-\\ufe2f", xe = "\\u20d0-\\u20ff", je = ke + De + xe, Be = "[" + je + "]", Oe = RegExp(Be, "g");
function we(e) {
  return e = B(e), e && e.replace($e, Se).replace(Oe, "");
}
var ze = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Le(e) {
  return e.match(ze) || [];
}
var Ie = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Te(e) {
  return Ie.test(e);
}
var O = "\\ud800-\\udfff", Ne = "\\u0300-\\u036f", Ve = "\\ufe20-\\ufe2f", Re = "\\u20d0-\\u20ff", Ue = Ne + Ve + Re, w = "\\u2700-\\u27bf", z = "a-z\\xdf-\\xf6\\xf8-\\xff", Ze = "\\xac\\xb1\\xd7\\xf7", Me = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", He = "\\u2000-\\u206f", Pe = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", L = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ge = "\\ufe0e\\ufe0f", I = Ze + Me + He + Pe, T = "['’]", A = "[" + I + "]", Ye = "[" + Ue + "]", N = "\\d+", qe = "[" + w + "]", V = "[" + z + "]", R = "[^" + O + I + N + w + z + L + "]", Je = "\\ud83c[\\udffb-\\udfff]", Ke = "(?:" + Ye + "|" + Je + ")", We = "[^" + O + "]", U = "(?:\\ud83c[\\udde6-\\uddff]){2}", Z = "[\\ud800-\\udbff][\\udc00-\\udfff]", n = "[" + L + "]", Qe = "\\u200d", S = "(?:" + V + "|" + R + ")", Xe = "(?:" + n + "|" + R + ")", $ = "(?:" + T + "(?:d|ll|m|re|s|t|ve))?", k = "(?:" + T + "(?:D|LL|M|RE|S|T|VE))?", M = Ke + "?", H = "[" + Ge + "]?", _e = "(?:" + Qe + "(?:" + [We, U, Z].join("|") + ")" + H + M + ")*", et = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", tt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ut = H + M + _e, it = "(?:" + [qe, U, Z].join("|") + ")" + ut, st = RegExp([
  n + "?" + V + "+" + $ + "(?=" + [A, n, "$"].join("|") + ")",
  Xe + "+" + k + "(?=" + [A, n + S, "$"].join("|") + ")",
  n + "?" + S + "+" + $,
  n + "+" + k,
  tt,
  et,
  N,
  it
].join("|"), "g");
function nt(e) {
  return e.match(st) || [];
}
function at(e, t, u) {
  return e = B(e), t = u ? void 0 : t, t === void 0 ? Te(e) ? nt(e) : Le(e) : e.match(t) || [];
}
var rt = "['’]", ot = RegExp(rt, "g");
function lt(e) {
  return function(t) {
    return me(at(we(t).replace(ot, "")), e, "");
  };
}
var dt = lt(function(e, t, u) {
  return e + (u ? "-" : "") + t.toLowerCase();
});
const P = dt;
function p(e, t, u = "-") {
  const i = String(t).replace(new RegExp(`^${e}${u}?`), "");
  return [
    P(i),
    e
  ].filter((s) => !!s).join(u);
}
function D(e) {
  return !Array.isArray(e) && typeof e == "object";
}
function ht(e) {
  return e === void 0;
}
const ct = v({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var u, i;
        (i = (u = t.instance) == null ? void 0 : u.bindEvents) == null || i.call(u, e);
      }
    }
  },
  mixins: [
    Q
  ],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => l("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => l("defaultControlClass", "form-control")
    },
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    feedback: {
      type: [String, Array],
      default: void 0
    },
    group: {
      type: Boolean,
      default: () => l("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: [String, Boolean],
      default: () => l("indicator", "spinner")
    },
    indicatorSize: {
      type: String,
      default: void 0
    },
    inline: Boolean,
    invalid: Boolean,
    label: {
      type: [Number, String],
      default: void 0
    },
    labelClass: {
      type: [Object, String],
      default: () => l("labelClass", "form-label")
    },
    modelValue: {
      default: void 0
    },
    pill: Boolean,
    plaintext: Boolean,
    size: {
      type: String,
      default: void 0
    },
    spacing: {
      type: String,
      default: void 0
    },
    valid: Boolean
  },
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
          ["class", this.controlClasses]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return p(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && p(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && p(this.size, "form-group")]: !!this.size,
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
        [P(this.componentName)]: !0
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
      var u;
      t || (t = this.onInput);
      const i = e instanceof HTMLSelectElement ? (u = e.querySelectorAll("option")) == null ? void 0 : u[e.selectedIndex] : null;
      ht(this.modelValue) ? i && (e.value = i == null ? void 0 : i.value) : e.value = this.modelValue, e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((s) => {
        e.addEventListener(s, (r) => {
          this.$emit(s, r);
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
      return this.errors && D(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || D(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
}), ft = (e, t) => {
  const u = e.__vccOpts || e;
  for (const [i, s] of t)
    u[i] = s;
  return u;
}, pt = v({
  name: "RadioField",
  mixins: [
    ct
  ],
  // model: {
  //     prop: 'checkedValue',
  //     event: 'change'
  // },
  props: {
    /**
     * The checked values
     *
     * @property String
     */
    checked: Boolean,
    /**
     * The checked value
     *
     * @property String
     */
    checkedValue: [Boolean, Number, String, Object],
    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: "form-check"
    },
    /**
     * Display the form field and label inline
     *
     * @property Function
     */
    inline: Boolean
  },
  computed: {
    controlClasses() {
      return {
        [this.spacing]: !!this.spacing,
        [this.inputClass]: !!this.inputClass,
        ["is-valid"]: !!(this.valid || this.validFeedback),
        ["is-invalid"]: !!(this.invalid || this.invalidFeedback)
      };
    },
    computedLabelClass() {
      return `${this.controlClass}-label`;
    },
    hash() {
      return Math.random().toString(20).substr(2, 6);
    },
    inputClass() {
      return `${this.controlClass}-input`;
    },
    inlineClass() {
      return this.inline && `${this.controlClass}-inline`;
    }
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
}), vt = ["id", "checked"], bt = ["for"], Ct = ["innerHTML"], gt = ["innerHTML"];
function yt(e, t, u, i, s, r) {
  const G = q("bind-events");
  return h(), c("div", {
    class: b({ [e.controlClass]: !!e.controlClass, [e.inlineClass]: e.inline })
  }, [
    J(C("input", K({
      id: e.$attrs.id || e.hash,
      ref: "field"
    }, e.controlAttributes, {
      type: "radio",
      checked: e.checkedValue === e.checked,
      "on:update:modelValue": t[0] || (t[0] = (...Y) => e.update && e.update(...Y))
    }), null, 16, vt), [
      [G]
    ]),
    C("label", {
      for: e.$attrs.id || e.hash,
      class: b({ [e.computedLabelClass]: !0, [e.labelClass]: !0 })
    }, [
      f(e.$slots, "default", {}, () => [
        W(g(e.label), 1)
      ])
    ], 10, bt),
    f(e.$slots, "feedback", {}, () => [
      e.invalidFeedback ? (h(), c("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, Ct)) : e.validFeedback ? (h(), c("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, gt)) : y("", !0)
    ]),
    f(e.$slots, "help", {}, () => [
      e.helpText ? (h(), c("small", {
        key: 0,
        ref: "help"
      }, g(e.helpText), 513)) : y("", !0)
    ])
  ], 2);
}
const Et = /* @__PURE__ */ ft(pt, [["render", yt]]);
export {
  Et as RadioField
};
//# sourceMappingURL=radio-field.js.map
