import { defineComponent as C, resolveDirective as P, openBlock as l, createElementBlock as d, normalizeClass as g, withDirectives as Y, createElementVNode as q, mergeProps as J, renderSlot as p, createCommentVNode as v, toDisplayString as K } from "vue";
const h = {};
function c(...e) {
  if (!e.length)
    return h;
  const [t, u] = e;
  return typeof t == "string" ? typeof h[t] < "u" ? h[t] : u : Array.isArray(t) ? t.reduce((i, s) => Object.assign(i, {
    [s]: h[s]
  }), {}) : Object.assign(h, ...e);
}
const W = C({
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
var Q = typeof global == "object" && global && global.Object === Object && global;
const X = Q;
var _ = typeof self == "object" && self && self.Object === Object && self, ee = X || _ || Function("return this")();
const te = ee;
var ue = te.Symbol;
const r = ue;
var $ = Object.prototype, ie = $.hasOwnProperty, se = $.toString, f = r ? r.toStringTag : void 0;
function ne(e) {
  var t = ie.call(e, f), u = e[f];
  try {
    e[f] = void 0;
    var i = !0;
  } catch {
  }
  var s = se.call(e);
  return i && (t ? e[f] = u : delete e[f]), s;
}
var re = Object.prototype, ae = re.toString;
function oe(e) {
  return ae.call(e);
}
var le = "[object Null]", de = "[object Undefined]", y = r ? r.toStringTag : void 0;
function he(e) {
  return e == null ? e === void 0 ? de : le : y && y in Object(e) ? ne(e) : oe(e);
}
function ce(e) {
  return e != null && typeof e == "object";
}
var fe = "[object Symbol]";
function pe(e) {
  return typeof e == "symbol" || ce(e) && he(e) == fe;
}
function ve(e, t) {
  for (var u = -1, i = e == null ? 0 : e.length, s = Array(i); ++u < i; )
    s[u] = t(e[u], u, e);
  return s;
}
var be = Array.isArray;
const Ce = be;
var ge = 1 / 0, m = r ? r.prototype : void 0, E = m ? m.toString : void 0;
function j(e) {
  if (typeof e == "string")
    return e;
  if (Ce(e))
    return ve(e, j) + "";
  if (pe(e))
    return E ? E.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ge ? "-0" : t;
}
function x(e) {
  return e == null ? "" : j(e);
}
function ye(e, t, u, i) {
  var s = -1, a = e == null ? 0 : e.length;
  for (i && a && (u = e[++s]); ++s < a; )
    u = t(u, e[s], s, e);
  return u;
}
function me(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var Ee = {
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
}, Fe = me(Ee);
const Ae = Fe;
var Se = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ke = "\\u0300-\\u036f", De = "\\ufe20-\\ufe2f", $e = "\\u20d0-\\u20ff", je = ke + De + $e, xe = "[" + je + "]", Be = RegExp(xe, "g");
function Oe(e) {
  return e = x(e), e && e.replace(Se, Ae).replace(Be, "");
}
var we = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function ze(e) {
  return e.match(we) || [];
}
var Le = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Te(e) {
  return Le.test(e);
}
var B = "\\ud800-\\udfff", Ie = "\\u0300-\\u036f", Ne = "\\ufe20-\\ufe2f", Me = "\\u20d0-\\u20ff", Re = Ie + Ne + Me, O = "\\u2700-\\u27bf", w = "a-z\\xdf-\\xf6\\xf8-\\xff", Ue = "\\xac\\xb1\\xd7\\xf7", Ve = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", He = "\\u2000-\\u206f", Ze = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", z = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ge = "\\ufe0e\\ufe0f", L = Ue + Ve + He + Ze, T = "['’]", F = "[" + L + "]", Pe = "[" + Re + "]", I = "\\d+", Ye = "[" + O + "]", N = "[" + w + "]", M = "[^" + B + L + I + O + w + z + "]", qe = "\\ud83c[\\udffb-\\udfff]", Je = "(?:" + Pe + "|" + qe + ")", Ke = "[^" + B + "]", R = "(?:\\ud83c[\\udde6-\\uddff]){2}", U = "[\\ud800-\\udbff][\\udc00-\\udfff]", n = "[" + z + "]", We = "\\u200d", A = "(?:" + N + "|" + M + ")", Qe = "(?:" + n + "|" + M + ")", S = "(?:" + T + "(?:d|ll|m|re|s|t|ve))?", k = "(?:" + T + "(?:D|LL|M|RE|S|T|VE))?", V = Je + "?", H = "[" + Ge + "]?", Xe = "(?:" + We + "(?:" + [Ke, R, U].join("|") + ")" + H + V + ")*", _e = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", et = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", tt = H + V + Xe, ut = "(?:" + [Ye, R, U].join("|") + ")" + tt, it = RegExp([
  n + "?" + N + "+" + S + "(?=" + [F, n, "$"].join("|") + ")",
  Qe + "+" + k + "(?=" + [F, n + A, "$"].join("|") + ")",
  n + "?" + A + "+" + S,
  n + "+" + k,
  et,
  _e,
  I,
  ut
].join("|"), "g");
function st(e) {
  return e.match(it) || [];
}
function nt(e, t, u) {
  return e = x(e), t = u ? void 0 : t, t === void 0 ? Te(e) ? st(e) : ze(e) : e.match(t) || [];
}
var rt = "['’]", at = RegExp(rt, "g");
function ot(e) {
  return function(t) {
    return ye(nt(Oe(t).replace(at, "")), e, "");
  };
}
var lt = ot(function(e, t, u) {
  return e + (u ? "-" : "") + t.toLowerCase();
});
const Z = lt;
function b(e, t, u = "-") {
  const i = String(t).replace(new RegExp(`^${e}${u}?`), "");
  return [
    Z(i),
    e
  ].filter((s) => !!s).join(u);
}
function D(e) {
  return !Array.isArray(e) && typeof e == "object";
}
function dt(e) {
  return e === void 0;
}
const ht = C({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var u, i;
        (i = (u = t.instance) == null ? void 0 : u.bindEvents) == null || i.call(u, e);
      }
    }
  },
  mixins: [
    W
  ],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => c("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => c("defaultControlClass", "form-control")
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
      default: () => c("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: [String, Boolean],
      default: () => c("indicator", "spinner")
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
      default: () => c("labelClass", "form-label")
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
      return b(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && b(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && b(this.size, "form-group")]: !!this.size,
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
        [Z(this.componentName)]: !0
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
      dt(this.modelValue) ? i && (e.value = i == null ? void 0 : i.value) : e.value = this.modelValue, e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((s) => {
        e.addEventListener(s, (a) => {
          this.$emit(s, a);
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
}), ct = C({
  name: "RadioField",
  mixins: [
    ht
  ],
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
     * The default class name assigned to the control element
     *
     * @param {String}
     * @default 'form-check'
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
    inline: {
      type: Boolean
    }
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
}), ft = (e, t) => {
  const u = e.__vccOpts || e;
  for (const [i, s] of t)
    u[i] = s;
  return u;
}, pt = ["id", "checked"], vt = ["for", "innerHTML"], bt = ["innerHTML"], Ct = ["innerHTML"];
function gt(e, t, u, i, s, a) {
  const G = P("bind-events");
  return l(), d("div", {
    class: g(e.formGroupClasses, { [e.controlClass]: !!e.controlClass, [e.inlineClass]: e.inline })
  }, [
    Y(q("input", J({
      id: e.id,
      ref: "field"
    }, e.controlAttributes, {
      type: "radio",
      checked: e.checkedValue === e.checked,
      "on:update:modelValue": t[0] || (t[0] = (...o) => e.update && e.update(...o)),
      onChange: t[1] || (t[1] = (...o) => e.update && e.update(...o))
    }), null, 16, pt), [
      [G]
    ]),
    p(e.$slots, "label", {}, () => [
      e.label ? (l(), d("label", {
        key: 0,
        ref: "label",
        for: e.id,
        class: g(e.labelClass),
        onClick: t[2] || (t[2] = (...o) => e.focus && e.focus(...o)),
        innerHTML: e.label
      }, null, 10, vt)) : v("", !0)
    ]),
    p(e.$slots, "feedback", {}, () => [
      e.invalidFeedback ? (l(), d("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, bt)) : e.validFeedback ? (l(), d("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, Ct)) : v("", !0)
    ]),
    p(e.$slots, "help", {}, () => [
      e.helpText ? (l(), d("small", {
        key: 0,
        ref: "help"
      }, K(e.helpText), 513)) : v("", !0)
    ])
  ], 2);
}
const mt = /* @__PURE__ */ ft(ct, [["render", gt]]);
export {
  mt as RadioField
};
//# sourceMappingURL=radio-field.js.map
