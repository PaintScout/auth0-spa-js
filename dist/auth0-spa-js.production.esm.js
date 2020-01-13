var e =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function n(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var r,
  o,
  i,
  a = function(e) {
    return e && e.Math == Math && e;
  },
  c =
    a('object' == typeof globalThis && globalThis) ||
    a('object' == typeof window && window) ||
    a('object' == typeof self && self) ||
    a('object' == typeof e && e) ||
    Function('return this')(),
  u = function(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  s = !u(function() {
    return (
      7 !=
      Object.defineProperty({}, 'a', {
        get: function() {
          return 7;
        }
      }).a
    );
  }),
  f = {}.propertyIsEnumerable,
  l = Object.getOwnPropertyDescriptor,
  d = {
    f:
      l && !f.call({ 1: 2 }, 1)
        ? function(e) {
            var t = l(this, e);
            return !!t && t.enumerable;
          }
        : f
  },
  p = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
  h = {}.toString,
  v = function(e) {
    return h.call(e).slice(8, -1);
  },
  y = ''.split,
  m = u(function() {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function(e) {
        return 'String' == v(e) ? y.call(e, '') : Object(e);
      }
    : Object,
  w = function(e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  g = function(e) {
    return m(w(e));
  },
  b = function(e) {
    return 'object' == typeof e ? null !== e : 'function' == typeof e;
  },
  _ = function(e, t) {
    if (!b(e)) return e;
    var n, r;
    if (t && 'function' == typeof (n = e.toString) && !b((r = n.call(e))))
      return r;
    if ('function' == typeof (n = e.valueOf) && !b((r = n.call(e)))) return r;
    if (!t && 'function' == typeof (n = e.toString) && !b((r = n.call(e))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  k = {}.hasOwnProperty,
  S = function(e, t) {
    return k.call(e, t);
  },
  T = c.document,
  O = b(T) && b(T.createElement),
  E = function(e) {
    return O ? T.createElement(e) : {};
  },
  A =
    !s &&
    !u(function() {
      return (
        7 !=
        Object.defineProperty(E('div'), 'a', {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
  j = Object.getOwnPropertyDescriptor,
  I = {
    f: s
      ? j
      : function(e, t) {
          if (((e = g(e)), (t = _(t, !0)), A))
            try {
              return j(e, t);
            } catch (e) {}
          if (S(e, t)) return p(!d.f.call(e, t), e[t]);
        }
  },
  x = function(e) {
    if (!b(e)) throw TypeError(String(e) + ' is not an object');
    return e;
  },
  P = Object.defineProperty,
  C = {
    f: s
      ? P
      : function(e, t, n) {
          if ((x(e), (t = _(t, !0)), x(n), A))
            try {
              return P(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        }
  },
  U = s
    ? function(e, t, n) {
        return C.f(e, t, p(1, n));
      }
    : function(e, t, n) {
        return (e[t] = n), e;
      },
  D = function(e, t) {
    try {
      U(c, e, t);
    } catch (n) {
      c[e] = t;
    }
    return t;
  },
  F = c['__core-js_shared__'] || D('__core-js_shared__', {}),
  L = n(function(e) {
    (e.exports = function(e, t) {
      return F[e] || (F[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.4.1',
      mode: 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  }),
  R = L('native-function-to-string', Function.toString),
  M = c.WeakMap,
  W = 'function' == typeof M && /native code/.test(R.call(M)),
  q = 0,
  N = Math.random(),
  z = function(e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++q + N).toString(36)
    );
  },
  J = L('keys'),
  B = function(e) {
    return J[e] || (J[e] = z(e));
  },
  G = {},
  H = c.WeakMap;
if (W) {
  var Y = new H(),
    V = Y.get,
    K = Y.has,
    Q = Y.set;
  (r = function(e, t) {
    return Q.call(Y, e, t), t;
  }),
    (o = function(e) {
      return V.call(Y, e) || {};
    }),
    (i = function(e) {
      return K.call(Y, e);
    });
} else {
  var X = B('state');
  (G[X] = !0),
    (r = function(e, t) {
      return U(e, X, t), t;
    }),
    (o = function(e) {
      return S(e, X) ? e[X] : {};
    }),
    (i = function(e) {
      return S(e, X);
    });
}
var Z = {
    set: r,
    get: o,
    has: i,
    enforce: function(e) {
      return i(e) ? o(e) : r(e, {});
    },
    getterFor: function(e) {
      return function(t) {
        var n;
        if (!b(t) || (n = o(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required');
        return n;
      };
    }
  },
  $ = n(function(e) {
    var t = Z.get,
      n = Z.enforce,
      r = String(R).split('toString');
    L('inspectSource', function(e) {
      return R.call(e);
    }),
      (e.exports = function(e, t, o, i) {
        var a = !!i && !!i.unsafe,
          u = !!i && !!i.enumerable,
          s = !!i && !!i.noTargetGet;
        'function' == typeof o &&
          ('string' != typeof t || S(o, 'name') || U(o, 'name', t),
          (n(o).source = r.join('string' == typeof t ? t : ''))),
          e !== c
            ? (a ? !s && e[t] && (u = !0) : delete e[t],
              u ? (e[t] = o) : U(e, t, o))
            : u
            ? (e[t] = o)
            : D(t, o);
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && t(this).source) || R.call(this);
      });
  }),
  ee = c,
  te = function(e) {
    return 'function' == typeof e ? e : void 0;
  },
  ne = function(e, t) {
    return arguments.length < 2
      ? te(ee[e]) || te(c[e])
      : (ee[e] && ee[e][t]) || (c[e] && c[e][t]);
  },
  re = Math.ceil,
  oe = Math.floor,
  ie = function(e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? oe : re)(e);
  },
  ae = Math.min,
  ce = function(e) {
    return e > 0 ? ae(ie(e), 9007199254740991) : 0;
  },
  ue = Math.max,
  se = Math.min,
  fe = function(e) {
    return function(t, n, r) {
      var o,
        i = g(t),
        a = ce(i.length),
        c = (function(e, t) {
          var n = ie(e);
          return n < 0 ? ue(n + t, 0) : se(n, t);
        })(r, a);
      if (e && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((e || c in i) && i[c] === n) return e || c || 0;
      return !e && -1;
    };
  },
  le = { includes: fe(!0), indexOf: fe(!1) },
  de = le.indexOf,
  pe = function(e, t) {
    var n,
      r = g(e),
      o = 0,
      i = [];
    for (n in r) !S(G, n) && S(r, n) && i.push(n);
    for (; t.length > o; ) S(r, (n = t[o++])) && (~de(i, n) || i.push(n));
    return i;
  },
  he = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ],
  ve = he.concat('length', 'prototype'),
  ye = {
    f:
      Object.getOwnPropertyNames ||
      function(e) {
        return pe(e, ve);
      }
  },
  me = { f: Object.getOwnPropertySymbols },
  we =
    ne('Reflect', 'ownKeys') ||
    function(e) {
      var t = ye.f(x(e)),
        n = me.f;
      return n ? t.concat(n(e)) : t;
    },
  ge = function(e, t) {
    for (var n = we(t), r = C.f, o = I.f, i = 0; i < n.length; i++) {
      var a = n[i];
      S(e, a) || r(e, a, o(t, a));
    }
  },
  be = /#|\.prototype\./,
  _e = function(e, t) {
    var n = Se[ke(e)];
    return n == Oe || (n != Te && ('function' == typeof t ? u(t) : !!t));
  },
  ke = (_e.normalize = function(e) {
    return String(e)
      .replace(be, '.')
      .toLowerCase();
  }),
  Se = (_e.data = {}),
  Te = (_e.NATIVE = 'N'),
  Oe = (_e.POLYFILL = 'P'),
  Ee = _e,
  Ae = I.f,
  je = function(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u = e.target,
      s = e.global,
      f = e.stat;
    if ((n = s ? c : f ? c[u] || D(u, {}) : (c[u] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (a = Ae(n, r)) && a.value : n[r]),
          !Ee(s ? r : u + (f ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          ge(i, o);
        }
        (e.sham || (o && o.sham)) && U(i, 'sham', !0), $(n, r, i, e);
      }
  },
  Ie =
    !!Object.getOwnPropertySymbols &&
    !u(function() {
      return !String(Symbol());
    }),
  xe = c.Symbol,
  Pe = L('wks'),
  Ce = function(e) {
    return Pe[e] || (Pe[e] = (Ie && xe[e]) || (Ie ? xe : z)('Symbol.' + e));
  },
  Ue = Ce('match'),
  De = function(e) {
    if (
      (function(e) {
        var t;
        return b(e) && (void 0 !== (t = e[Ue]) ? !!t : 'RegExp' == v(e));
      })(e)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
  Fe = Ce('match'),
  Le = function(e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[Fe] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  Re = ''.startsWith,
  Me = Math.min;
je(
  { target: 'String', proto: !0, forced: !Le('startsWith') },
  {
    startsWith: function(e) {
      var t = String(w(this));
      De(e);
      var n = ce(Me(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = String(e);
      return Re ? Re.call(t, r, n) : t.slice(n, n + r.length) === r;
    }
  }
);
var We,
  qe,
  Ne,
  ze = function(e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function');
    return e;
  },
  Je = function(e, t, n) {
    if ((ze(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function() {
          return e.call(t);
        };
      case 1:
        return function(n) {
          return e.call(t, n);
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r);
        };
      case 3:
        return function(n, r, o) {
          return e.call(t, n, r, o);
        };
    }
    return function() {
      return e.apply(t, arguments);
    };
  },
  Be = Function.call,
  Ge = function(e, t, n) {
    return Je(Be, c[e].prototype[t], n);
  },
  He =
    (Ge('String', 'startsWith'),
    function(e) {
      return function(t, n) {
        var r,
          o,
          i = String(w(t)),
          a = ie(n),
          c = i.length;
        return a < 0 || a >= c
          ? e
            ? ''
            : void 0
          : (r = i.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === c ||
            (o = i.charCodeAt(a + 1)) < 56320 ||
            o > 57343
          ? e
            ? i.charAt(a)
            : r
          : e
          ? i.slice(a, a + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    }),
  Ye = { codeAt: He(!1), charAt: He(!0) },
  Ve = function(e) {
    return Object(w(e));
  },
  Ke = !u(function() {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  Qe = B('IE_PROTO'),
  Xe = Object.prototype,
  Ze = Ke
    ? Object.getPrototypeOf
    : function(e) {
        return (
          (e = Ve(e)),
          S(e, Qe)
            ? e[Qe]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? Xe
            : null
        );
      },
  $e = Ce('iterator'),
  et = !1;
[].keys &&
  ('next' in (Ne = [].keys())
    ? (qe = Ze(Ze(Ne))) !== Object.prototype && (We = qe)
    : (et = !0)),
  null == We && (We = {}),
  S(We, $e) ||
    U(We, $e, function() {
      return this;
    });
var tt = { IteratorPrototype: We, BUGGY_SAFARI_ITERATORS: et },
  nt =
    Object.keys ||
    function(e) {
      return pe(e, he);
    },
  rt = s
    ? Object.defineProperties
    : function(e, t) {
        x(e);
        for (var n, r = nt(t), o = r.length, i = 0; o > i; )
          C.f(e, (n = r[i++]), t[n]);
        return e;
      },
  ot = ne('document', 'documentElement'),
  it = B('IE_PROTO'),
  at = function() {},
  ct = function() {
    var e,
      t = E('iframe'),
      n = he.length;
    for (
      t.style.display = 'none',
        ot.appendChild(t),
        t.src = String('javascript:'),
        (e = t.contentWindow.document).open(),
        e.write('<script>document.F=Object</script>'),
        e.close(),
        ct = e.F;
      n--;

    )
      delete ct.prototype[he[n]];
    return ct();
  },
  ut =
    Object.create ||
    function(e, t) {
      var n;
      return (
        null !== e
          ? ((at.prototype = x(e)),
            (n = new at()),
            (at.prototype = null),
            (n[it] = e))
          : (n = ct()),
        void 0 === t ? n : rt(n, t)
      );
    };
G[it] = !0;
var st = C.f,
  ft = Ce('toStringTag'),
  lt = function(e, t, n) {
    e &&
      !S((e = n ? e : e.prototype), ft) &&
      st(e, ft, { configurable: !0, value: t });
  },
  dt = {},
  pt = tt.IteratorPrototype,
  ht = function() {
    return this;
  },
  vt =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function() {
          var e,
            t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function(n, r) {
            return (
              x(n),
              (function(e) {
                if (!b(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + ' as a prototype');
              })(r),
              t ? e.call(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  yt = tt.IteratorPrototype,
  mt = tt.BUGGY_SAFARI_ITERATORS,
  wt = Ce('iterator'),
  gt = function() {
    return this;
  },
  bt = Ye.charAt,
  _t = Z.set,
  kt = Z.getterFor('String Iterator');
!(function(e, t, n, r, o, i, a) {
  !(function(e, t, n) {
    var r = t + ' Iterator';
    (e.prototype = ut(pt, { next: p(1, n) })), lt(e, r, !1), (dt[r] = ht);
  })(n, t, r);
  var c,
    u,
    s,
    f = function(e) {
      if (e === o && y) return y;
      if (!mt && e in h) return h[e];
      switch (e) {
        case 'keys':
        case 'values':
        case 'entries':
          return function() {
            return new n(this, e);
          };
      }
      return function() {
        return new n(this);
      };
    },
    l = t + ' Iterator',
    d = !1,
    h = e.prototype,
    v = h[wt] || h['@@iterator'] || (o && h[o]),
    y = (!mt && v) || f(o),
    m = ('Array' == t && h.entries) || v;
  if (
    (m &&
      ((c = Ze(m.call(new e()))),
      yt !== Object.prototype &&
        c.next &&
        (Ze(c) !== yt &&
          (vt ? vt(c, yt) : 'function' != typeof c[wt] && U(c, wt, gt)),
        lt(c, l, !0))),
    'values' == o &&
      v &&
      'values' !== v.name &&
      ((d = !0),
      (y = function() {
        return v.call(this);
      })),
    h[wt] !== y && U(h, wt, y),
    (dt[t] = y),
    o)
  )
    if (
      ((u = {
        values: f('values'),
        keys: i ? y : f('keys'),
        entries: f('entries')
      }),
      a)
    )
      for (s in u) (!mt && !d && s in h) || $(h, s, u[s]);
    else je({ target: t, proto: !0, forced: mt || d }, u);
})(
  String,
  'String',
  function(e) {
    _t(this, { type: 'String Iterator', string: String(e), index: 0 });
  },
  function() {
    var e,
      t = kt(this),
      n = t.string,
      r = t.index;
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = bt(n, r)), (t.index += e.length), { value: e, done: !1 });
  }
);
var St = function(e, t, n, r) {
    try {
      return r ? t(x(n)[0], n[1]) : t(n);
    } catch (t) {
      var o = e.return;
      throw (void 0 !== o && x(o.call(e)), t);
    }
  },
  Tt = Ce('iterator'),
  Ot = Array.prototype,
  Et = function(e) {
    return void 0 !== e && (dt.Array === e || Ot[Tt] === e);
  },
  At = function(e, t, n) {
    var r = _(t);
    r in e ? C.f(e, r, p(0, n)) : (e[r] = n);
  },
  jt = Ce('toStringTag'),
  It =
    'Arguments' ==
    v(
      (function() {
        return arguments;
      })()
    ),
  xt = function(e) {
    var t, n, r;
    return void 0 === e
      ? 'Undefined'
      : null === e
      ? 'Null'
      : 'string' ==
        typeof (n = (function(e, t) {
          try {
            return e[t];
          } catch (e) {}
        })((t = Object(e)), jt))
      ? n
      : It
      ? v(t)
      : 'Object' == (r = v(t)) && 'function' == typeof t.callee
      ? 'Arguments'
      : r;
  },
  Pt = Ce('iterator'),
  Ct = function(e) {
    if (null != e) return e[Pt] || e['@@iterator'] || dt[xt(e)];
  },
  Ut = Ce('iterator'),
  Dt = !1;
try {
  var Ft = 0,
    Lt = {
      next: function() {
        return { done: !!Ft++ };
      },
      return: function() {
        Dt = !0;
      }
    };
  (Lt[Ut] = function() {
    return this;
  }),
    Array.from(Lt, function() {
      throw 2;
    });
} catch (e) {}
var Rt = !(function(e, t) {
  if (!t && !Dt) return !1;
  var n = !1;
  try {
    var r = {};
    (r[Ut] = function() {
      return {
        next: function() {
          return { done: (n = !0) };
        }
      };
    }),
      e(r);
  } catch (e) {}
  return n;
})(function(e) {
  Array.from(e);
});
je(
  { target: 'Array', stat: !0, forced: Rt },
  {
    from: function(e) {
      var t,
        n,
        r,
        o,
        i,
        a = Ve(e),
        c = 'function' == typeof this ? this : Array,
        u = arguments.length,
        s = u > 1 ? arguments[1] : void 0,
        f = void 0 !== s,
        l = 0,
        d = Ct(a);
      if (
        (f && (s = Je(s, u > 2 ? arguments[2] : void 0, 2)),
        null == d || (c == Array && Et(d)))
      )
        for (n = new c((t = ce(a.length))); t > l; l++)
          At(n, l, f ? s(a[l], l) : a[l]);
      else
        for (i = (o = d.call(a)).next, n = new c(); !(r = i.call(o)).done; l++)
          At(n, l, f ? St(o, s, [r.value, l], !0) : r.value);
      return (n.length = l), n;
    }
  }
);
ee.Array.from;
var Mt,
  Wt = C.f,
  qt = c.DataView,
  Nt = qt && qt.prototype,
  zt = c.Int8Array,
  Jt = zt && zt.prototype,
  Bt = c.Uint8ClampedArray,
  Gt = Bt && Bt.prototype,
  Ht = zt && Ze(zt),
  Yt = Jt && Ze(Jt),
  Vt = Object.prototype,
  Kt = Vt.isPrototypeOf,
  Qt = Ce('toStringTag'),
  Xt = z('TYPED_ARRAY_TAG'),
  Zt = !(!c.ArrayBuffer || !qt),
  $t = Zt && !!vt && 'Opera' !== xt(c.opera),
  en = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
  tn = function(e) {
    return b(e) && S(en, xt(e));
  };
for (Mt in en) c[Mt] || ($t = !1);
if (
  (!$t || 'function' != typeof Ht || Ht === Function.prototype) &&
  ((Ht = function() {
    throw TypeError('Incorrect invocation');
  }),
  $t)
)
  for (Mt in en) c[Mt] && vt(c[Mt], Ht);
if ((!$t || !Yt || Yt === Vt) && ((Yt = Ht.prototype), $t))
  for (Mt in en) c[Mt] && vt(c[Mt].prototype, Yt);
if (($t && Ze(Gt) !== Yt && vt(Gt, Yt), s && !S(Yt, Qt)))
  for (Mt in (!0,
  Wt(Yt, Qt, {
    get: function() {
      return b(this) ? this[Xt] : void 0;
    }
  }),
  en))
    c[Mt] && U(c[Mt], Xt, Mt);
Zt && vt && Ze(Nt) !== Vt && vt(Nt, Vt);
var nn = function(e) {
    if (tn(e)) return e;
    throw TypeError('Target is not a typed array');
  },
  rn = function(e) {
    if (vt) {
      if (Kt.call(Ht, e)) return e;
    } else
      for (var t in en)
        if (S(en, Mt)) {
          var n = c[t];
          if (n && (e === n || Kt.call(n, e))) return e;
        }
    throw TypeError('Target is not a typed array constructor');
  },
  on = function(e, t, n) {
    if (s) {
      if (n)
        for (var r in en) {
          var o = c[r];
          o && S(o.prototype, e) && delete o.prototype[e];
        }
      (Yt[e] && !n) || $(Yt, e, n ? t : ($t && Jt[e]) || t);
    }
  },
  an = Ce('species'),
  cn = nn,
  un = rn,
  sn = [].slice;
on(
  'slice',
  function(e, t) {
    for (
      var n = sn.call(cn(this), e, t),
        r = (function(e, t) {
          var n,
            r = x(e).constructor;
          return void 0 === r || null == (n = x(r)[an]) ? t : ze(n);
        })(this, this.constructor),
        o = 0,
        i = n.length,
        a = new (un(r))(i);
      i > o;

    )
      a[o] = n[o++];
    return a;
  },
  u(function() {
    new Int8Array(1).slice();
  })
);
var fn = Ce('unscopables'),
  ln = Array.prototype;
null == ln[fn] && U(ln, fn, ut(null));
var dn,
  pn = le.includes;
je(
  { target: 'Array', proto: !0 },
  {
    includes: function(e) {
      return pn(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }
),
  (dn = 'includes'),
  (ln[fn][dn] = !0);
Ge('Array', 'includes');
je(
  { target: 'String', proto: !0, forced: !Le('includes') },
  {
    includes: function(e) {
      return !!~String(w(this)).indexOf(
        De(e),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }
);
Ge('String', 'includes');
function hn(e) {
  var t = this.constructor;
  return this.then(
    function(n) {
      return t.resolve(e()).then(function() {
        return n;
      });
    },
    function(n) {
      return t.resolve(e()).then(function() {
        return t.reject(n);
      });
    }
  );
}
var vn = setTimeout;
function yn(e) {
  return Boolean(e && void 0 !== e.length);
}
function mn() {}
function wn(e) {
  if (!(this instanceof wn))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    Tn(e, this);
}
function gn(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      wn._immediateFn(function() {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var r;
          try {
            r = n(e._value);
          } catch (e) {
            return void _n(t.promise, e);
          }
          bn(t.promise, r);
        } else (1 === e._state ? bn : _n)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function bn(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof wn) return (e._state = 3), (e._value = t), void kn(e);
      if ('function' == typeof n)
        return void Tn(
          ((r = n),
          (o = t),
          function() {
            r.apply(o, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), kn(e);
  } catch (t) {
    _n(e, t);
  }
  var r, o;
}
function _n(e, t) {
  (e._state = 2), (e._value = t), kn(e);
}
function kn(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    wn._immediateFn(function() {
      e._handled || wn._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) gn(e, e._deferreds[t]);
  e._deferreds = null;
}
function Sn(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function Tn(e, t) {
  var n = !1;
  try {
    e(
      function(e) {
        n || ((n = !0), bn(t, e));
      },
      function(e) {
        n || ((n = !0), _n(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), _n(t, e);
  }
}
(wn.prototype.catch = function(e) {
  return this.then(null, e);
}),
  (wn.prototype.then = function(e, t) {
    var n = new this.constructor(mn);
    return gn(this, new Sn(e, t, n)), n;
  }),
  (wn.prototype.finally = hn),
  (wn.all = function(e) {
    return new wn(function(t, n) {
      if (!yn(e)) return n(new TypeError('Promise.all accepts an array'));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function i(e, a) {
        try {
          if (a && ('object' == typeof a || 'function' == typeof a)) {
            var c = a.then;
            if ('function' == typeof c)
              return void c.call(
                a,
                function(t) {
                  i(e, t);
                },
                n
              );
          }
          (r[e] = a), 0 == --o && t(r);
        } catch (e) {
          n(e);
        }
      }
      for (var a = 0; a < r.length; a++) i(a, r[a]);
    });
  }),
  (wn.resolve = function(e) {
    return e && 'object' == typeof e && e.constructor === wn
      ? e
      : new wn(function(t) {
          t(e);
        });
  }),
  (wn.reject = function(e) {
    return new wn(function(t, n) {
      n(e);
    });
  }),
  (wn.race = function(e) {
    return new wn(function(t, n) {
      if (!yn(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var r = 0, o = e.length; r < o; r++) wn.resolve(e[r]).then(t, n);
    });
  }),
  (wn._immediateFn =
    ('function' == typeof setImmediate &&
      function(e) {
        setImmediate(e);
      }) ||
    function(e) {
      vn(e, 0);
    }),
  (wn._unhandledRejectionFn = function(e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var On = (function() {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'Promise' in On
  ? On.Promise.prototype.finally || (On.Promise.prototype.finally = hn)
  : (On.Promise = wn),
  (function(e) {
    function t(e) {
      if ('utf-8' !== (e = void 0 === e ? 'utf-8' : e))
        throw new RangeError(
          "Failed to construct 'TextEncoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
    }
    function n(e, t) {
      if (
        ((t = void 0 === t ? { fatal: !1 } : t),
        'utf-8' !== (e = void 0 === e ? 'utf-8' : e))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function(e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            r = 0,
            o = Math.max(32, n + (n >> 1) + 7),
            i = new Uint8Array((o >> 3) << 3);
          t < n;

        ) {
          var a = e.charCodeAt(t++);
          if (55296 <= a && 56319 >= a) {
            if (t < n) {
              var c = e.charCodeAt(t);
              56320 == (64512 & c) &&
                (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= a && 56319 >= a) continue;
          }
          if (
            (r + 4 > i.length &&
              ((o += 8),
              (o = ((o *= 1 + (t / e.length) * 2) >> 3) << 3),
              (c = new Uint8Array(o)).set(i),
              (i = c)),
            0 == (4294967168 & a))
          )
            i[r++] = a;
          else {
            if (0 == (4294965248 & a)) i[r++] = ((a >> 6) & 31) | 192;
            else if (0 == (4294901760 & a))
              (i[r++] = ((a >> 12) & 15) | 224),
                (i[r++] = ((a >> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & a)) continue;
              (i[r++] = ((a >> 18) & 7) | 240),
                (i[r++] = ((a >> 12) & 63) | 128),
                (i[r++] = ((a >> 6) & 63) | 128);
            }
            i[r++] = (63 & a) | 128;
          }
        }
        return i.slice(0, r);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 }),
      (n.prototype.decode = function(e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        t = 0;
        for (var n = (e = new Uint8Array(e)).length, r = []; t < n; ) {
          var o = e[t++];
          if (0 === o) break;
          if (0 == (128 & o)) r.push(o);
          else if (192 == (224 & o)) {
            var i = 63 & e[t++];
            r.push(((31 & o) << 6) | i);
          } else if (224 == (240 & o)) {
            i = 63 & e[t++];
            var a = 63 & e[t++];
            r.push(((31 & o) << 12) | (i << 6) | a);
          } else if (240 == (248 & o)) {
            65535 <
              (o =
                ((7 & o) << 18) |
                ((i = 63 & e[t++]) << 12) |
                ((a = 63 & e[t++]) << 6) |
                (63 & e[t++])) &&
              ((o -= 65536),
              r.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
              r.push(o);
          }
        }
        return String.fromCharCode.apply(null, r);
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var En = function(e, t) {
  return (En =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(e, t) {
        e.__proto__ = t;
      }) ||
    function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(e, t);
};
var An = function() {
  return (An =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function jn(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function In(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function a(e) {
      try {
        u(r.next(e));
      } catch (e) {
        i(e);
      }
    }
    function c(e) {
      try {
        u(r.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function u(e) {
      e.done
        ? o(e.value)
        : new n(function(t) {
            t(e.value);
          }).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function xn(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
  return (
    (i = { next: c(0), throw: c(1), return: c(2) }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function() {
        return this;
      }),
    i
  );
  function c(i) {
    return function(c) {
      return (function(i) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                  (6 === i[0] || 2 === i[0])
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, c]);
    };
  }
}
var Pn = n(function(e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function() {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function(t, n) {
          var r = e.locked.get(t);
          void 0 === r
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
        }),
        (this.isLocked = function(t) {
          return e.locked.has(t);
        }),
        (this.lock = function(t) {
          return new Promise(function(n, r) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function(t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var r = n.pop();
            e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function() {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function() {
    return n.getInstance();
  };
});
t(Pn);
var Cn = t(
  n(function(t, n) {
    var r =
        (e && e.__awaiter) ||
        function(e, t, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              e.done
                ? o(e.value)
                : new n(function(t) {
                    t(e.value);
                  }).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
      o =
        (e && e.__generator) ||
        function(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function() {
                return this;
              }),
            i
          );
          function c(i) {
            return function(c) {
              return (function(i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(n, '__esModule', { value: !0 });
    var i = 'browser-tabs-lock-key';
    function a(e) {
      return new Promise(function(t) {
        return setTimeout(t, e);
      });
    }
    function c(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          r = 0;
        r < e;
        r++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var u = (function() {
      function e() {
        (this.acquiredIatSet = new Set()),
          (this.id = Date.now().toString() + c(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ = this.releaseLock__private__.bind(
            this
          )),
          (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
            this
          )),
          (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
            this
          )),
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function(e, t) {
          return (
            void 0 === t && (t = 5e3),
            r(this, void 0, void 0, function() {
              var n, r, u, f, l, d;
              return o(this, function(o) {
                switch (o.label) {
                  case 0:
                    (n = Date.now() + c(4)),
                      (r = Date.now() + t),
                      (u = i + '-' + e),
                      (f = window.localStorage),
                      (o.label = 1);
                  case 1:
                    return Date.now() < r
                      ? null !== f.getItem(u)
                        ? [3, 4]
                        : ((l = this.id + '-' + e + '-' + n),
                          [4, a(Math.floor(25 * Math.random()))])
                      : [3, 7];
                  case 2:
                    return (
                      o.sent(),
                      f.setItem(
                        u,
                        JSON.stringify({
                          id: this.id,
                          iat: n,
                          timeoutKey: l,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now()
                        })
                      ),
                      [4, a(30)]
                    );
                  case 3:
                    return (
                      o.sent(),
                      null !== (d = f.getItem(u)) &&
                      (d = JSON.parse(d)).id === this.id &&
                      d.iat === n
                        ? (this.acquiredIatSet.add(n),
                          this.refreshLockWhileAcquired(u, n),
                          [2, !0])
                        : [3, 6]
                    );
                  case 4:
                    return s(), [4, this.waitForSomethingToChange(r)];
                  case 5:
                    o.sent(), (o.label = 6);
                  case 6:
                    return (n = Date.now() + c(4)), [3, 1];
                  case 7:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (e.prototype.refreshLockWhileAcquired = function(e, t) {
          return r(this, void 0, void 0, function() {
            var n = this;
            return o(this, function(i) {
              return (
                setTimeout(function() {
                  return r(n, void 0, void 0, function() {
                    var n, r;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return [4, Pn.default().lock(t)];
                        case 1:
                          return (
                            o.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (r = n.getItem(e))
                                  ? (Pn.default().unlock(t), [2])
                                  : (((r = JSON.parse(
                                      r
                                    )).timeRefreshed = Date.now()),
                                    n.setItem(e, JSON.stringify(r)),
                                    Pn.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (Pn.default().unlock(t), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e.prototype.waitForSomethingToChange = function(t) {
          return r(this, void 0, void 0, function() {
            return o(this, function(n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function(n) {
                      var r = !1,
                        o = Date.now(),
                        i = 50,
                        a = !1;
                      function c() {
                        if (
                          (a ||
                            (window.removeEventListener('storage', c),
                            e.removeFromWaiting(c),
                            clearTimeout(u),
                            (a = !0)),
                          !r)
                        ) {
                          r = !0;
                          var t = i - (Date.now() - o);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', c), e.addToWaiting(c);
                      var u = setTimeout(c, Math.max(0, t - Date.now()));
                    })
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function(t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function(t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function(e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function() {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function(e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function(e) {
          return r(this, void 0, void 0, function() {
            return o(this, function(t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function(t) {
          return r(this, void 0, void 0, function() {
            var n, r, a;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (r = i + '-' + t),
                    null === (a = n.getItem(r))
                      ? [2]
                      : (a = JSON.parse(a)).id !== this.id
                      ? [3, 2]
                      : [4, Pn.default().lock(a.iat)]
                  );
                case 1:
                  o.sent(),
                    this.acquiredIatSet.delete(a.iat),
                    n.removeItem(r),
                    Pn.default().unlock(a.iat),
                    e.notifyWaiters(),
                    (o.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.waiters = void 0),
        e
      );
    })();
    function s() {
      for (
        var e = Date.now() - 5e3,
          t = window.localStorage,
          n = Object.keys(t),
          r = !1,
          o = 0;
        o < n.length;
        o++
      ) {
        var a = n[o];
        if (a.includes(i)) {
          var c = t.getItem(a);
          null !== c &&
            ((void 0 === (c = JSON.parse(c)).timeRefreshed &&
              c.timeAcquired < e) ||
              (void 0 !== c.timeRefreshed && c.timeRefreshed < e)) &&
            (t.removeItem(a), (r = !0));
        }
      }
      r && u.notifyWaiters();
    }
    n.default = u;
  })
);
function Un(e, t) {
  return (
    (t = t || {}),
    new Promise(function(n, r) {
      var o = new XMLHttpRequest(),
        i = [],
        a = [],
        c = {},
        u = function() {
          return {
            ok: 2 == ((o.status / 100) | 0),
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function() {
              return Promise.resolve(o.responseText);
            },
            json: function() {
              return Promise.resolve(JSON.parse(o.responseText));
            },
            blob: function() {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: u,
            headers: {
              keys: function() {
                return i;
              },
              entries: function() {
                return a;
              },
              get: function(e) {
                return c[e.toLowerCase()];
              },
              has: function(e) {
                return e.toLowerCase() in c;
              }
            }
          };
        };
      for (var s in (o.open(t.method || 'get', e, !0),
      (o.onload = function() {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
            i.push((t = t.toLowerCase())),
              a.push([t, n]),
              (c[t] = c[t] ? c[t] + ',' + n : n);
          }),
          n(u());
      }),
      (o.onerror = r),
      (o.withCredentials = 'include' == t.credentials),
      t.headers))
        o.setRequestHeader(s, t.headers[s]);
      o.send(t.body || null);
    })
  );
}
var Dn = { timeoutInSeconds: 60 },
  Fn = function(e) {
    return e.filter(function(t, n) {
      return e.indexOf(t) === n;
    });
  },
  Ln = { error: 'timeout', error_description: 'Timeout' },
  Rn = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = e.filter(Boolean).join();
    return Fn(n.replace(/\s/g, ',').split(','))
      .join(' ')
      .trim();
  },
  Mn = function() {
    var e = window.open(
      '',
      'auth0:authorize:popup',
      'left=100,top=100,width=400,height=600,resizable,scrollbars=yes,status=1'
    );
    if (!e) throw new Error('Could not open popup');
    return e;
  },
  Wn = function(e, t, n) {
    return (
      (e.location.href = t),
      new Promise(function(t, r) {
        var o = setTimeout(function() {
          r(An(An({}, Ln), { popup: e }));
        }, 1e3 * (n.timeoutInSeconds || 60));
        window.addEventListener('message', function(n) {
          if (n.data && 'authorization_response' === n.data.type) {
            if ((clearTimeout(o), e.close(), n.data.response.error))
              return r(n.data.response);
            t(n.data.response);
          }
        });
      })
    );
  },
  qn = function() {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Vn().getRandomValues(new Uint8Array(43))).forEach(function(n) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Nn = function(e) {
    return btoa(e);
  },
  zn = function(e) {
    return Object.keys(e)
      .filter(function(t) {
        return void 0 !== e[t];
      })
      .map(function(t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  Jn = function(e) {
    return In(void 0, void 0, void 0, function() {
      var t;
      return xn(this, function(n) {
        switch (n.label) {
          case 0:
            return (
              (t = Kn().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function(e, n) {
                      (t.oncomplete = function(t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function(e) {
                          n(e.error);
                        }),
                        (t.onabort = function() {
                          n('The digest operation was aborted');
                        });
                    })
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Bn = function(e) {
    return (function(e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function(e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  Gn = function(e) {
    var t = new Uint8Array(e);
    return (function(e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[\+\/=]/g, function(e) {
        return t[e];
      });
    })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
  },
  Hn = function(e, t) {
    return In(void 0, void 0, void 0, function() {
      var n, r, o, i, a, c, u;
      return xn(this, function(s) {
        switch (s.label) {
          case 0:
            return [4, Un(e, t)];
          case 1:
            return [4, (n = s.sent()).json()];
          case 2:
            if (
              ((r = s.sent()),
              (o = r.error),
              (i = r.error_description),
              (a = jn(r, ['error', 'error_description'])),
              !n.ok)
            )
              throw ((c = i || 'HTTP error. Unable to fetch ' + e),
              ((u = new Error(c)).error = o || 'request_error'),
              (u.error_description = c),
              u);
            return [2, a];
        }
      });
    });
  },
  Yn = function(e) {
    return In(void 0, void 0, void 0, function() {
      var t = e.baseUrl,
        n = jn(e, ['baseUrl']);
      return xn(this, function(e) {
        switch (e.label) {
          case 0:
            return [
              4,
              Hn(t + '/oauth/token', {
                method: 'POST',
                body: JSON.stringify(
                  An(
                    {
                      grant_type: 'authorization_code',
                      redirect_uri: window.location.origin
                    },
                    n
                  )
                ),
                headers: { 'Content-type': 'application/json' }
              })
            ];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  },
  Vn = function() {
    return window.crypto || window.msCrypto;
  },
  Kn = function() {
    var e = Vn();
    return e.subtle || e.webkitSubtle;
  },
  Qn = function() {
    if (!Vn())
      throw new Error(
        'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
      );
    if (void 0 === Kn())
      throw new Error(
        '\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    '
      );
  },
  Xn = function(e) {
    return e.audience + '::' + e.scope;
  },
  Zn = (function() {
    function e() {
      this.cache = {};
    }
    return (
      (e.prototype.save = function(e) {
        var t = this,
          n = Xn(e);
        this.cache[n] = e;
        var r,
          o,
          i,
          a =
            ((r = e.expires_in),
            (o = e.decodedToken.claims.exp),
            (i = (new Date(1e3 * o).getTime() - new Date().getTime()) / 1e3),
            1e3 * Math.min(r, i) * 0.8);
        setTimeout(function() {
          delete t.cache[n];
        }, a);
      }),
      (e.prototype.get = function(e) {
        return this.cache[Xn(e)];
      }),
      e
    );
  })(),
  $n = n(function(t, n) {
    var r =
      (e && e.__assign) ||
      function() {
        return (r =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function o(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function i(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function(e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            o('Expires', e.expires ? e.expires.toUTCString() : '') +
            o('Domain', e.domain) +
            o('Path', e.path) +
            o('Secure', e.secure) +
            o('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function a(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], r = /(%[\dA-F]{2})+/gi, o = 0;
        o < n.length;
        o++
      ) {
        var i = n[o].split('='),
          a = i.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[i[0].replace(r, decodeURIComponent)] = a.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function c() {
      return a(document.cookie);
    }
    function u(e, t, n) {
      document.cookie = i(e, t, r({ path: '/' }, n));
    }
    (n.__esModule = !0),
      (n.encode = i),
      (n.parse = a),
      (n.getAll = c),
      (n.get = function(e) {
        return c()[e];
      }),
      (n.set = u),
      (n.remove = function(e, t) {
        u(e, '', r(r({}, t), { expires: -1 }));
      });
  });
t($n);
$n.encode, $n.parse;
var er = $n.getAll,
  tr = $n.get,
  nr = $n.set,
  rr = $n.remove,
  or = function() {
    return Object.keys(er() || {});
  },
  ir = function(e) {
    var t = tr(e);
    if (void 0 !== t) return JSON.parse(t);
  },
  ar = function(e, t, n) {
    nr(e, JSON.stringify(t), { expires: n.daysUntilExpire });
  },
  cr = function(e) {
    rr(e);
  },
  ur = 'a0.spajs.txs.',
  sr = function(e) {
    return '' + ur + e;
  },
  fr = (function() {
    function e() {
      var e = this;
      (this.transactions = {}),
        or()
          .filter(function(e) {
            return e.startsWith(ur);
          })
          .forEach(function(t) {
            var n = t.replace(ur, '');
            e.transactions[n] = ir(t);
          });
    }
    return (
      (e.prototype.create = function(e, t) {
        (this.transactions[e] = t), ar(sr(e), t, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function(e) {
        return this.transactions[e];
      }),
      (e.prototype.remove = function(e) {
        delete this.transactions[e], cr(sr(e));
      }),
      e
    );
  })(),
  lr = function(e) {
    return 'number' == typeof e;
  },
  dr = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm'
  ],
  pr = function(e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function(e) {
      var t = e.split('.'),
        n = t[0],
        r = t[1],
        o = t[2];
      if (3 !== t.length || !n || !r || !o)
        throw new Error('ID token could not be decoded');
      var i = JSON.parse(Bn(r)),
        a = { __raw: e },
        c = {};
      return (
        Object.keys(i).forEach(function(e) {
          (a[e] = i[e]), dr.includes(e) || (c[e] = i[e]);
        }),
        {
          encoded: { header: n, payload: r, signature: o },
          header: JSON.parse(Bn(n)),
          claims: a,
          user: c
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "' +
          e.iss +
          '", found "' +
          t.claims.iss +
          '"'
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "' +
          t.header.alg +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but was not one of "' +
            t.claims.aud.join(', ') +
            '"'
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              e.aud +
              '", found "' +
              t.claims.azp +
              '"'
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          e.aud +
          '" but found "' +
          t.claims.aud +
          '"'
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "' +
            e.nonce +
            '", found "' +
            t.claims.nonce +
            '"'
        );
    }
    if (e.max_age && !lr(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!lr(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!lr(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      r = new Date(),
      o = new Date(0),
      i = new Date(0),
      a = new Date(0);
    if (
      (a.setUTCSeconds((parseInt(t.claims.auth_time) + e.max_age) / 1e3 + n),
      o.setUTCSeconds(t.claims.exp + n),
      i.setUTCSeconds(t.claims.nbf - n),
      r > o)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time (' +
          r +
          ') is after expiration time (' +
          o +
          ')'
      );
    if (lr(t.claims.nbf) && r < i)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          r +
          ') is before ' +
          i
      );
    if (lr(t.claims.auth_time) && r > a)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          r +
          ') is after last auth at ' +
          a
      );
    return t;
  },
  hr = (function(e) {
    function t(n, r, o) {
      var i = e.call(this, r) || this;
      return (
        (i.error = n),
        (i.error_description = r),
        (i.state = o),
        Object.setPrototypeOf(i, t.prototype),
        i
      );
    }
    return (
      (function(e, t) {
        function n() {
          this.constructor = e;
        }
        En(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      })(t, e),
      t
    );
  })(Error),
  vr = new Cn(),
  yr = (function() {
    function e(e) {
      (this.options = e),
        (this.DEFAULT_SCOPE = 'openid profile email'),
        (this.cache = new Zn()),
        (this.transactionManager = new fr()),
        (this.domainUrl = 'https://' + this.options.domain),
        (this.tokenIssuer = this.options.issuer
          ? 'https://' + this.options.issuer + '/'
          : this.domainUrl + '/');
    }
    return (
      (e.prototype._url = function(e) {
        var t = encodeURIComponent(
          btoa(JSON.stringify({ name: 'auth0-spa-js', version: '1.6.2' }))
        );
        return '' + this.domainUrl + e + '&auth0Client=' + t;
      }),
      (e.prototype._getParams = function(e, t, n, r, o) {
        var i = this.options,
          a = (i.domain, i.leeway, jn(i, ['domain', 'leeway']));
        return An(An(An({}, a), e), {
          scope: Rn(this.DEFAULT_SCOPE, this.options.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: t,
          nonce: n,
          redirect_uri: o || this.options.redirect_uri,
          code_challenge: r,
          code_challenge_method: 'S256'
        });
      }),
      (e.prototype._authorizeUrl = function(e) {
        return this._url('/authorize?' + zn(e));
      }),
      (e.prototype._verifyIdToken = function(e, t) {
        return pr({
          iss: this.tokenIssuer,
          aud: this.options.client_id,
          id_token: e,
          nonce: t,
          leeway: this.options.leeway,
          max_age: this._parseNumber(this.options.max_age)
        });
      }),
      (e.prototype._parseNumber = function(e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype.buildAuthorizeUrl = function(e) {
        return (
          void 0 === e && (e = {}),
          In(this, void 0, void 0, function() {
            var t, n, r, o, i, a, c, u, s, f, l;
            return xn(this, function(d) {
              switch (d.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (n = e.appState),
                    (r = jn(e, ['redirect_uri', 'appState'])),
                    (o = Nn(qn())),
                    (i = qn()),
                    (a = qn()),
                    [4, Jn(a)]
                  );
                case 1:
                  return (
                    (c = d.sent()),
                    (u = Gn(c)),
                    (s = e.fragment ? '#' + e.fragment : ''),
                    (f = this._getParams(r, o, i, u, t)),
                    (l = this._authorizeUrl(f)),
                    this.transactionManager.create(o, {
                      nonce: i,
                      code_verifier: a,
                      appState: n,
                      scope: f.scope,
                      audience: f.audience || 'default'
                    }),
                    [2, l + s]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function(e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = Dn),
          In(this, void 0, void 0, function() {
            var n, r, o, i, a, c, u, s, f, l, d, p, h;
            return xn(this, function(v) {
              switch (v.label) {
                case 0:
                  return [4, Mn()];
                case 1:
                  return (
                    (n = v.sent()),
                    (r = jn(e, [])),
                    (o = Nn(qn())),
                    (i = qn()),
                    (a = qn()),
                    [4, Jn(a)]
                  );
                case 2:
                  return (
                    (c = v.sent()),
                    (u = Gn(c)),
                    (s = this._getParams(
                      r,
                      o,
                      i,
                      u,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (f = this._authorizeUrl(
                      An(An({}, s), { response_mode: 'web_message' })
                    )),
                    [4, Wn(n, f, t)]
                  );
                case 3:
                  if (((l = v.sent()), o !== l.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    Yn({
                      baseUrl: this.domainUrl,
                      audience: e.audience || this.options.audience,
                      client_id: this.options.client_id,
                      code_verifier: a,
                      code: l.code
                    })
                  ];
                case 4:
                  return (
                    (d = v.sent()),
                    (p = this._verifyIdToken(d.id_token, i)),
                    (h = An(An({}, d), {
                      decodedToken: p,
                      scope: s.scope,
                      audience: s.audience || 'default'
                    })),
                    this.cache.save(h),
                    ar('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getUser = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience || 'default',
              scope: this.options.scope || this.DEFAULT_SCOPE
            }),
          In(this, void 0, void 0, function() {
            var t;
            return xn(this, function(n) {
              return (
                (e.scope = Rn(this.DEFAULT_SCOPE, e.scope)),
                [2, (t = this.cache.get(e)) && t.decodedToken.user]
              );
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience || 'default',
              scope: this.options.scope || this.DEFAULT_SCOPE
            }),
          In(this, void 0, void 0, function() {
            var t;
            return xn(this, function(n) {
              return (
                (e.scope = Rn(this.DEFAULT_SCOPE, e.scope)),
                [2, (t = this.cache.get(e)) && t.decodedToken.claims]
              );
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function(e) {
        return (
          void 0 === e && (e = {}),
          In(this, void 0, void 0, function() {
            var t;
            return xn(this, function(n) {
              switch (n.label) {
                case 0:
                  return [4, this.buildAuthorizeUrl(e)];
                case 1:
                  return (t = n.sent()), window.location.assign(t), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function(e) {
        return (
          void 0 === e && (e = window.location.href),
          In(this, void 0, void 0, function() {
            var t, n, r, o, i, a, c, u, s, f;
            return xn(this, function(l) {
              switch (l.label) {
                case 0:
                  if (0 === (t = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((n = (function(e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var t = e.split('&'),
                        n = {};
                      return (
                        t.forEach(function(e) {
                          var t = e.split('='),
                            r = t[0],
                            o = t[1];
                          n[r] = decodeURIComponent(o);
                        }),
                        An(An({}, n), { expires_in: parseInt(n.expires_in) })
                      );
                    })(t.join(''))),
                    (r = n.state),
                    (o = n.code),
                    (i = n.error),
                    (a = n.error_description),
                    i)
                  )
                    throw (this.transactionManager.remove(r), new hr(i, a, r));
                  if (!(c = this.transactionManager.get(r)))
                    throw new Error('Invalid state');
                  return (
                    this.transactionManager.remove(r),
                    [
                      4,
                      Yn({
                        baseUrl: this.domainUrl,
                        audience: this.options.audience,
                        client_id: this.options.client_id,
                        code_verifier: c.code_verifier,
                        code: o
                      })
                    ]
                  );
                case 1:
                  return (
                    (u = l.sent()),
                    (s = this._verifyIdToken(u.id_token, c.nonce)),
                    (f = An(An({}, u), {
                      decodedToken: s,
                      audience: c.audience,
                      scope: c.scope
                    })),
                    this.cache.save(f),
                    ar('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2, { appState: c.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getTokenSilently = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.DEFAULT_SCOPE,
              ignoreCache: !1
            }),
          In(this, void 0, void 0, function() {
            var t, n, r, o, i, a, c, u, s, f, l, d, p;
            return xn(this, function(h) {
              switch (h.label) {
                case 0:
                  (e.scope = Rn(this.DEFAULT_SCOPE, e.scope)), (h.label = 1);
                case 1:
                  return (
                    h.trys.push([1, 8, 9, 11]),
                    [4, vr.acquireLock('auth0.lock.getTokenSilently', 5e3)]
                  );
                case 2:
                  return (
                    h.sent(),
                    e.ignoreCache
                      ? [3, 4]
                      : (t = this.cache.get({
                          scope: e.scope,
                          audience: e.audience || 'default'
                        }))
                      ? [4, vr.releaseLock('auth0.lock.getTokenSilently')]
                      : [3, 4]
                  );
                case 3:
                  return h.sent(), [2, t.access_token];
                case 4:
                  return (n = Nn(qn())), (r = qn()), (o = qn()), [4, Jn(o)];
                case 5:
                  return (
                    (i = h.sent()),
                    (a = Gn(i)),
                    (c = { audience: e.audience, scope: e.scope }),
                    (u = this._getParams(
                      c,
                      n,
                      r,
                      a,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (s = this._authorizeUrl(
                      An(An({}, u), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    [
                      4,
                      ((v = s),
                      (y = this.domainUrl),
                      new Promise(function(e, t) {
                        var n = window.document.createElement('iframe');
                        n.setAttribute('width', '0'),
                          n.setAttribute('height', '0'),
                          (n.style.display = 'none');
                        var r = setTimeout(function() {
                            t(Ln), window.document.body.removeChild(n);
                          }, 6e4),
                          o = function(i) {
                            i.origin == y &&
                              i.data &&
                              'authorization_response' === i.data.type &&
                              (i.source.close(),
                              i.data.response.error
                                ? t(i.data.response)
                                : e(i.data.response),
                              clearTimeout(r),
                              window.removeEventListener('message', o, !1),
                              window.document.body.removeChild(n));
                          };
                        window.addEventListener('message', o, !1),
                          window.document.body.appendChild(n),
                          n.setAttribute('src', v);
                      }))
                    ]
                  );
                case 6:
                  if (((f = h.sent()), n !== f.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    Yn({
                      baseUrl: this.domainUrl,
                      audience: e.audience || this.options.audience,
                      client_id: this.options.client_id,
                      code_verifier: o,
                      code: f.code
                    })
                  ];
                case 7:
                  return (
                    (l = h.sent()),
                    (d = this._verifyIdToken(l.id_token, r)),
                    (p = An(An({}, l), {
                      decodedToken: d,
                      scope: u.scope,
                      audience: u.audience || 'default'
                    })),
                    this.cache.save(p),
                    ar('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2, l.access_token]
                  );
                case 8:
                  throw h.sent();
                case 9:
                  return [4, vr.releaseLock('auth0.lock.getTokenSilently')];
                case 10:
                  return h.sent(), [7];
                case 11:
                  return [2];
              }
              var v, y;
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function(e, t) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.DEFAULT_SCOPE
            }),
          void 0 === t && (t = Dn),
          In(this, void 0, void 0, function() {
            return xn(this, function(n) {
              switch (n.label) {
                case 0:
                  return (
                    (e.scope = Rn(
                      this.DEFAULT_SCOPE,
                      this.options.scope,
                      e.scope
                    )),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    n.sent(),
                    [
                      2,
                      this.cache.get({
                        scope: e.scope,
                        audience: e.audience || 'default'
                      }).access_token
                    ]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function() {
        return In(this, void 0, void 0, function() {
          return xn(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.logout = function(e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id,
          cr('auth0.is.authenticated');
        var t = e.federated,
          n = jn(e, ['federated']),
          r = t ? '&federated' : '',
          o = this._url('/v2/logout?' + zn(n));
        window.location.assign('' + o + r);
      }),
      e
    );
  })();
export default function(e) {
  Qn();
  var t = new yr(e);
  return (
    ir('auth0.is.authenticated') ||
      t
        .getTokenSilently({
          audience: e.audience,
          scope: e.scope,
          ignoreCache: !0
        })
        .catch(function(e) {
          return null;
        }),
    t
  );
}
//# sourceMappingURL=auth0-spa-js.production.esm.js.map
