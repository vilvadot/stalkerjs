var ROT = {
  isSupported: function () {
    return !(
      !document.createElement("canvas").getContext || !Function.prototype.bind
    );
  },
  DEFAULT_WIDTH: 80,
  DEFAULT_HEIGHT: 25,
  DIRS: {
    4: [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ],
    8: [
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
      [-1, -1],
    ],
    6: [
      [-1, -1],
      [1, -1],
      [2, 0],
      [1, 1],
      [-1, 1],
      [-2, 0],
    ],
  },
  VK_CANCEL: 3,
  VK_HELP: 6,
  VK_BACK_SPACE: 8,
  VK_TAB: 9,
  VK_CLEAR: 12,
  VK_RETURN: 13,
  VK_ENTER: 14,
  VK_SHIFT: 16,
  VK_CONTROL: 17,
  VK_ALT: 18,
  VK_PAUSE: 19,
  VK_CAPS_LOCK: 20,
  VK_ESCAPE: 27,
  VK_SPACE: 32,
  VK_PAGE_UP: 33,
  VK_PAGE_DOWN: 34,
  VK_END: 35,
  VK_HOME: 36,
  VK_LEFT: 37,
  VK_UP: 38,
  VK_RIGHT: 39,
  VK_DOWN: 40,
  VK_PRINTSCREEN: 44,
  VK_INSERT: 45,
  VK_DELETE: 46,
  VK_0: 48,
  VK_1: 49,
  VK_2: 50,
  VK_3: 51,
  VK_4: 52,
  VK_5: 53,
  VK_6: 54,
  VK_7: 55,
  VK_8: 56,
  VK_9: 57,
  VK_COLON: 58,
  VK_SEMICOLON: 59,
  VK_LESS_THAN: 60,
  VK_EQUALS: 61,
  VK_GREATER_THAN: 62,
  VK_QUESTION_MARK: 63,
  VK_AT: 64,
  VK_A: 65,
  VK_B: 66,
  VK_C: 67,
  VK_D: 68,
  VK_E: 69,
  VK_F: 70,
  VK_G: 71,
  VK_H: 72,
  VK_I: 73,
  VK_J: 74,
  VK_K: 75,
  VK_L: 76,
  VK_M: 77,
  VK_N: 78,
  VK_O: 79,
  VK_P: 80,
  VK_Q: 81,
  VK_R: 82,
  VK_S: 83,
  VK_T: 84,
  VK_U: 85,
  VK_V: 86,
  VK_W: 87,
  VK_X: 88,
  VK_Y: 89,
  VK_Z: 90,
  VK_CONTEXT_MENU: 93,
  VK_NUMPAD0: 96,
  VK_NUMPAD1: 97,
  VK_NUMPAD2: 98,
  VK_NUMPAD3: 99,
  VK_NUMPAD4: 100,
  VK_NUMPAD5: 101,
  VK_NUMPAD6: 102,
  VK_NUMPAD7: 103,
  VK_NUMPAD8: 104,
  VK_NUMPAD9: 105,
  VK_MULTIPLY: 106,
  VK_ADD: 107,
  VK_SEPARATOR: 108,
  VK_SUBTRACT: 109,
  VK_DECIMAL: 110,
  VK_DIVIDE: 111,
  VK_F1: 112,
  VK_F2: 113,
  VK_F3: 114,
  VK_F4: 115,
  VK_F5: 116,
  VK_F6: 117,
  VK_F7: 118,
  VK_F8: 119,
  VK_F9: 120,
  VK_F10: 121,
  VK_F11: 122,
  VK_F12: 123,
  VK_F13: 124,
  VK_F14: 125,
  VK_F15: 126,
  VK_F16: 127,
  VK_F17: 128,
  VK_F18: 129,
  VK_F19: 130,
  VK_F20: 131,
  VK_F21: 132,
  VK_F22: 133,
  VK_F23: 134,
  VK_F24: 135,
  VK_NUM_LOCK: 144,
  VK_SCROLL_LOCK: 145,
  VK_CIRCUMFLEX: 160,
  VK_EXCLAMATION: 161,
  VK_DOUBLE_QUOTE: 162,
  VK_HASH: 163,
  VK_DOLLAR: 164,
  VK_PERCENT: 165,
  VK_AMPERSAND: 166,
  VK_UNDERSCORE: 167,
  VK_OPEN_PAREN: 168,
  VK_CLOSE_PAREN: 169,
  VK_ASTERISK: 170,
  VK_PLUS: 171,
  VK_PIPE: 172,
  VK_HYPHEN_MINUS: 173,
  VK_OPEN_CURLY_BRACKET: 174,
  VK_CLOSE_CURLY_BRACKET: 175,
  VK_TILDE: 176,
  VK_COMMA: 188,
  VK_PERIOD: 190,
  VK_SLASH: 191,
  VK_BACK_QUOTE: 192,
  VK_OPEN_BRACKET: 219,
  VK_BACK_SLASH: 220,
  VK_CLOSE_BRACKET: 221,
  VK_QUOTE: 222,
  VK_META: 224,
  VK_ALTGR: 225,
  VK_WIN: 91,
  VK_KANA: 21,
  VK_HANGUL: 21,
  VK_EISU: 22,
  VK_JUNJA: 23,
  VK_FINAL: 24,
  VK_HANJA: 25,
  VK_KANJI: 25,
  VK_CONVERT: 28,
  VK_NONCONVERT: 29,
  VK_ACCEPT: 30,
  VK_MODECHANGE: 31,
  VK_SELECT: 41,
  VK_PRINT: 42,
  VK_EXECUTE: 43,
  VK_SLEEP: 95,
  Text: {
    RE_COLORS: /%([bc]){([^}]*)}/g,
    TYPE_TEXT: 0,
    TYPE_NEWLINE: 1,
    TYPE_FG: 2,
    TYPE_BG: 3,
    measure: function (a, b) {
      for (
        var c = { width: 0, height: 1 }, d = this.tokenize(a, b), e = 0, f = 0;
        f < d.length;
        f++
      ) {
        var g = d[f];
        switch (g.type) {
          case this.TYPE_TEXT:
            e += g.value.length;
            break;
          case this.TYPE_NEWLINE:
            c.height++, (c.width = Math.max(c.width, e)), (e = 0);
        }
      }
      c.width = Math.max(c.width, e);
      return c;
    },
    tokenize: function (a, b) {
      var c = [],
        d = 0;
      a.replace(this.RE_COLORS, function (b, e, h, l) {
        var m = a.substring(d, l);
        m.length && c.push({ type: ROT.Text.TYPE_TEXT, value: m });
        c.push({
          type: "c" == e ? ROT.Text.TYPE_FG : ROT.Text.TYPE_BG,
          value: h.trim(),
        });
        d = l + b.length;
        return "";
      });
      var e = a.substring(d);
      e.length && c.push({ type: ROT.Text.TYPE_TEXT, value: e });
      return this._breakLines(c, b);
    },
    _breakLines: function (a, b) {
      b || (b = Infinity);
      for (var c = 0, d = 0, e = -1; c < a.length; ) {
        var f = a[c];
        f.type == ROT.Text.TYPE_NEWLINE && ((d = 0), (e = -1));
        if (f.type != ROT.Text.TYPE_TEXT) c++;
        else {
          for (; 0 == d && " " == f.value.charAt(0); )
            f.value = f.value.substring(1);
          var g = f.value.indexOf("\n");
          if (-1 != g) {
            f.value = this._breakInsideToken(a, c, g, !0);
            for (g = f.value.split(""); g.length && " " == g[g.length - 1]; )
              g.pop();
            f.value = g.join("");
          }
          if (f.value.length) {
            if (d + f.value.length > b) {
              for (g = -1; ; ) {
                var h = f.value.indexOf(" ", g + 1);
                if (-1 == h) break;
                if (d + h > b) break;
                g = h;
              }
              -1 != g
                ? (f.value = this._breakInsideToken(a, c, g, !0))
                : -1 != e
                ? ((f = a[e]),
                  (c = f.value.lastIndexOf(" ")),
                  (f.value = this._breakInsideToken(a, e, c, !0)),
                  (c = e))
                : (f.value = this._breakInsideToken(a, c, b - d, !1));
            } else (d += f.value.length), -1 != f.value.indexOf(" ") && (e = c);
            c++;
          } else a.splice(c, 1);
        }
      }
      a.push({ type: ROT.Text.TYPE_NEWLINE });
      d = null;
      for (c = 0; c < a.length; c++)
        switch (((f = a[c]), f.type)) {
          case ROT.Text.TYPE_TEXT:
            d = f;
            break;
          case ROT.Text.TYPE_NEWLINE:
            if (d) {
              for (g = d.value.split(""); g.length && " " == g[g.length - 1]; )
                g.pop();
              d.value = g.join("");
            }
            d = null;
        }
      a.pop();
      return a;
    },
    _breakInsideToken: function (a, b, c, d) {
      var e = { type: ROT.Text.TYPE_NEWLINE };
      d = {
        type: ROT.Text.TYPE_TEXT,
        value: a[b].value.substring(c + (d ? 1 : 0)),
      };
      a.splice(b + 1, 0, e, d);
      return a[b].value.substring(0, c);
    },
  },
};
Array.prototype.random =
  Array.prototype.random ||
  function () {
    return this.length
      ? this[Math.floor(ROT.RNG.getUniform() * this.length)]
      : null;
  };
Array.prototype.randomize =
  Array.prototype.randomize ||
  function () {
    for (var a = []; this.length; ) {
      var b = this.indexOf(this.random());
      a.push(this.splice(b, 1)[0]);
    }
    return a;
  };
Number.prototype.mod =
  Number.prototype.mod ||
  function (a) {
    return ((this % a) + a) % a;
  };
String.prototype.capitalize =
  String.prototype.capitalize ||
  function () {
    return this.charAt(0).toUpperCase() + this.substring(1);
  };
String.prototype.lpad =
  String.prototype.lpad ||
  function (a, b) {
    for (var c = a || "0", d = b || 2, e = ""; e.length < d - this.length; )
      e += c;
    e = e.substring(0, d - this.length);
    return e + this;
  };
String.prototype.rpad =
  String.prototype.rpad ||
  function (a, b) {
    for (var c = a || "0", d = b || 2, e = ""; e.length < d - this.length; )
      e += c;
    e = e.substring(0, d - this.length);
    return this + e;
  };
String.format =
  String.format ||
  function (a) {
    var b = String.format.map,
      c = Array.prototype.slice.call(arguments, 1);
    return a.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, function (d, e, f, g) {
      if ("%" == a.charAt(g - 1)) return d.substring(1);
      if (!c.length) return d;
      f = (e || f).split(",");
      e = f.shift();
      g = b[e.toLowerCase()];
      if (!g) return d;
      d = c.shift();
      d = d[g].apply(d, f);
      e = e.charAt(0);
      e != e.toLowerCase() && (d = d.capitalize());
      return d;
    });
  };
String.format.map = String.format.map || { s: "toString" };
String.prototype.format =
  String.prototype.format ||
  function () {
    var a = Array.prototype.slice.call(arguments);
    a.unshift(this);
    return String.format.apply(String, a);
  };
Object.create ||
  (Object.create = function (a) {
    var b = function () {};
    b.prototype = a;
    return new b();
  });
Function.prototype.extend =
  Function.prototype.extend ||
  function (a) {
    this.prototype = Object.create(a.prototype);
    this.prototype.constructor = this;
    return this;
  };
"undefined" != typeof window &&
  ((window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      return setTimeout(a, 1e3 / 60);
    }),
  (window.cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    function (a) {
      return clearTimeout(a);
    }));
ROT.Display = function (a) {
  this._context = document.createElement("canvas").getContext("2d");
  this._data = {};
  this._dirty = !1;
  this._options = {};
  this._backend = null;
  var b = {
      width: ROT.DEFAULT_WIDTH,
      height: ROT.DEFAULT_HEIGHT,
      transpose: !1,
      layout: "rect",
      fontSize: 15,
      spacing: 1,
      border: 0,
      forceSquareRatio: !1,
      fontFamily: "monospace",
      fontStyle: "",
      fg: "#ccc",
      bg: "#000",
      tileWidth: 32,
      tileHeight: 32,
      tileMap: {},
      tileSet: null,
      tileColorize: !1,
      termColor: "xterm",
    },
    c;
  for (c in a) b[c] = a[c];
  this.setOptions(b);
  this.DEBUG = this.DEBUG.bind(this);
  this._tick = this._tick.bind(this);
  requestAnimationFrame(this._tick);
};
ROT.Display.prototype.DEBUG = function (a, b, c) {
  var d = [this._options.bg, this._options.fg];
  this.draw(a, b, null, null, d[c % d.length]);
};
ROT.Display.prototype.clear = function () {
  this._data = {};
  this._dirty = !0;
};
ROT.Display.prototype.setOptions = function (a) {
  for (var b in a) this._options[b] = a[b];
  if (
    a.width ||
    a.height ||
    a.fontSize ||
    a.fontFamily ||
    a.spacing ||
    a.layout
  )
    a.layout &&
      (this._backend = new ROT.Display[a.layout.capitalize()](this._context)),
      (a =
        (this._options.fontStyle ? this._options.fontStyle + " " : "") +
        this._options.fontSize +
        "px " +
        this._options.fontFamily),
      (this._context.font = a),
      this._backend.compute(this._options),
      (this._context.font = a),
      (this._context.textAlign = "center"),
      (this._context.textBaseline = "middle"),
      (this._dirty = !0);
  return this;
};
ROT.Display.prototype.getOptions = function () {
  return this._options;
};
ROT.Display.prototype.getContainer = function () {
  return this._context.canvas;
};
ROT.Display.prototype.computeSize = function (a, b) {
  return this._backend.computeSize(a, b, this._options);
};
ROT.Display.prototype.computeFontSize = function (a, b) {
  return this._backend.computeFontSize(a, b, this._options);
};
ROT.Display.prototype.eventToPosition = function (a) {
  if (a.touches) {
    var b = a.touches[0].clientX;
    a = a.touches[0].clientY;
  } else (b = a.clientX), (a = a.clientY);
  var c = this._context.canvas.getBoundingClientRect(),
    b = b - c.left;
  a -= c.top;
  b *= this._context.canvas.width / this._context.canvas.clientWidth;
  a *= this._context.canvas.height / this._context.canvas.clientHeight;
  return 0 > b ||
    0 > a ||
    b >= this._context.canvas.width ||
    a >= this._context.canvas.height
    ? [-1, -1]
    : this._backend.eventToPosition(b, a);
};
ROT.Display.prototype.draw = function (a, b, c, d, e) {
  d || (d = this._options.fg);
  e || (e = this._options.bg);
  this._data[a + "," + b] = [a, b, c, d, e];
  !0 !== this._dirty &&
    (this._dirty || (this._dirty = {}), (this._dirty[a + "," + b] = !0));
};
ROT.Display.prototype.drawText = function (a, b, c, d) {
  var e = null,
    f = null,
    g = a,
    h = 1;
  d || (d = this._options.width - a);
  for (c = ROT.Text.tokenize(c, d); c.length; )
    switch (((d = c.shift()), d.type)) {
      case ROT.Text.TYPE_TEXT:
        for (var l, m = !1, n, q = !1, p = 0; p < d.value.length; p++) {
          l = d.value.charCodeAt(p);
          var r = d.value.charAt(p);
          n = (255 < l && 65377 > l) || (65500 < l && 65512 > l && 65518 < l);
          l = 32 == r.charCodeAt(0) || 12288 == r.charCodeAt(0);
          !q || n || l || g++;
          n && !m && g++;
          this.draw(g++, b, r, e, f);
          m = l;
          q = n;
        }
        break;
      case ROT.Text.TYPE_FG:
        e = d.value || null;
        break;
      case ROT.Text.TYPE_BG:
        f = d.value || null;
        break;
      case ROT.Text.TYPE_NEWLINE:
        (g = a), b++, h++;
    }
  return h;
};
ROT.Display.prototype._tick = function () {
  requestAnimationFrame(this._tick);
  if (this._dirty) {
    if (!0 === this._dirty) {
      this._context.fillStyle = this._options.bg;
      this._context.fillRect(
        0,
        0,
        this._context.canvas.width,
        this._context.canvas.height
      );
      for (var a in this._data) this._draw(a, !1);
    } else for (var b in this._dirty) this._draw(b, !0);
    this._dirty = !1;
  }
};
ROT.Display.prototype._draw = function (a, b) {
  var c = this._data[a];
  c[4] != this._options.bg && (b = !0);
  this._backend.draw(c, b);
};
ROT.Display.Backend = function (a) {
  this._context = a;
};
ROT.Display.Backend.prototype.compute = function (a) {};
ROT.Display.Backend.prototype.draw = function (a, b) {};
ROT.Display.Backend.prototype.computeSize = function (a, b) {};
ROT.Display.Backend.prototype.computeFontSize = function (a, b) {};
ROT.Display.Backend.prototype.eventToPosition = function (a, b) {};
ROT.Display.Rect = function (a) {
  ROT.Display.Backend.call(this, a);
  this._spacingY = this._spacingX = 0;
  this._canvasCache = {};
  this._options = {};
};
ROT.Display.Rect.extend(ROT.Display.Backend);
ROT.Display.Rect.cache = !1;
ROT.Display.Rect.prototype.compute = function (a) {
  this._canvasCache = {};
  this._options = a;
  var b = Math.ceil(this._context.measureText("W").width);
  this._spacingX = Math.ceil(a.spacing * b);
  this._spacingY = Math.ceil(a.spacing * a.fontSize);
  this._options.forceSquareRatio &&
    (this._spacingX = this._spacingY =
      Math.max(this._spacingX, this._spacingY));
  this._context.canvas.width = a.width * this._spacingX;
  this._context.canvas.height = a.height * this._spacingY;
};
ROT.Display.Rect.prototype.draw = function (a, b) {
  this.constructor.cache ? this._drawWithCache(a, b) : this._drawNoCache(a, b);
};
ROT.Display.Rect.prototype._drawWithCache = function (a, b) {
  var c = a[0],
    d = a[1],
    e = a[2],
    f = a[3],
    g = a[4],
    h = "" + e + f + g;
  if (h in this._canvasCache) var l = this._canvasCache[h];
  else {
    var m = this._options.border,
      l = document.createElement("canvas"),
      n = l.getContext("2d");
    l.width = this._spacingX;
    l.height = this._spacingY;
    n.fillStyle = g;
    n.fillRect(m, m, l.width - m, l.height - m);
    if (e)
      for (
        n.fillStyle = f,
          n.font = this._context.font,
          n.textAlign = "center",
          n.textBaseline = "middle",
          e = [].concat(e),
          f = 0;
        f < e.length;
        f++
      )
        n.fillText(e[f], this._spacingX / 2, Math.ceil(this._spacingY / 2));
    this._canvasCache[h] = l;
  }
  this._context.drawImage(l, c * this._spacingX, d * this._spacingY);
};
ROT.Display.Rect.prototype._drawNoCache = function (a, b) {
  var c = a[0],
    d = a[1],
    e = a[2],
    f = a[3],
    g = a[4];
  if (b) {
    var h = this._options.border;
    this._context.fillStyle = g;
    this._context.fillRect(
      c * this._spacingX + h,
      d * this._spacingY + h,
      this._spacingX - h,
      this._spacingY - h
    );
  }
  if (e)
    for (
      this._context.fillStyle = f, e = [].concat(e), f = 0;
      f < e.length;
      f++
    )
      this._context.fillText(
        e[f],
        (c + 0.5) * this._spacingX,
        Math.ceil((d + 0.5) * this._spacingY)
      );
};
ROT.Display.Rect.prototype.computeSize = function (a, b) {
  return [Math.floor(a / this._spacingX), Math.floor(b / this._spacingY)];
};
ROT.Display.Rect.prototype.computeFontSize = function (a, b) {
  var c = Math.floor(a / this._options.width),
    d = Math.floor(b / this._options.height),
    e = this._context.font;
  this._context.font = "100px " + this._options.fontFamily;
  var f = Math.ceil(this._context.measureText("W").width);
  this._context.font = e;
  c = ((f / 100) * d) / c;
  1 < c && (d = Math.floor(d / c));
  return Math.floor(d / this._options.spacing);
};
ROT.Display.Rect.prototype.eventToPosition = function (a, b) {
  return [Math.floor(a / this._spacingX), Math.floor(b / this._spacingY)];
};
ROT.Display.Hex = function (a) {
  ROT.Display.Backend.call(this, a);
  this._hexSize = this._spacingY = this._spacingX = 0;
  this._options = {};
};
ROT.Display.Hex.extend(ROT.Display.Backend);
ROT.Display.Hex.prototype.compute = function (a) {
  this._options = a;
  var b = Math.ceil(this._context.measureText("W").width);
  this._hexSize = Math.floor((a.spacing * (a.fontSize + b / Math.sqrt(3))) / 2);
  this._spacingX = (this._hexSize * Math.sqrt(3)) / 2;
  this._spacingY = 1.5 * this._hexSize;
  if (a.transpose)
    var b = "height",
      c = "width";
  else (b = "width"), (c = "height");
  this._context.canvas[b] = Math.ceil((a.width + 1) * this._spacingX);
  this._context.canvas[c] = Math.ceil(
    (a.height - 1) * this._spacingY + 2 * this._hexSize
  );
};
ROT.Display.Hex.prototype.draw = function (a, b) {
  var c = a[2],
    d = a[3],
    e = a[4],
    f = [(a[0] + 1) * this._spacingX, a[1] * this._spacingY + this._hexSize];
  this._options.transpose && f.reverse();
  b && ((this._context.fillStyle = e), this._fill(f[0], f[1]));
  if (c)
    for (
      this._context.fillStyle = d, c = [].concat(c), d = 0;
      d < c.length;
      d++
    )
      this._context.fillText(c[d], f[0], Math.ceil(f[1]));
};
ROT.Display.Hex.prototype.computeSize = function (a, b) {
  this._options.transpose && ((a += b), (b = a - b), (a -= b));
  return [
    Math.floor(a / this._spacingX) - 1,
    Math.floor((b - 2 * this._hexSize) / this._spacingY + 1),
  ];
};
ROT.Display.Hex.prototype.computeFontSize = function (a, b) {
  this._options.transpose && ((a += b), (b = a - b), (a -= b));
  var c = Math.min(
      (2 * a) / ((this._options.width + 1) * Math.sqrt(3)) - 1,
      b / (2 + 1.5 * (this._options.height - 1))
    ),
    d = this._context.font;
  this._context.font = "100px " + this._options.fontFamily;
  var e = Math.ceil(this._context.measureText("W").width);
  this._context.font = d;
  c = Math.floor(c) + 1;
  return (
    Math.ceil(
      (2 * c) / (this._options.spacing * (1 + e / 100 / Math.sqrt(3)))
    ) - 1
  );
};
ROT.Display.Hex.prototype.eventToPosition = function (a, b) {
  if (this._options.transpose) {
    a += b;
    b = a - b;
    a -= b;
    var c = this._context.canvas.width;
  } else c = this._context.canvas.height;
  b = Math.floor(b / (c / this._options.height));
  b.mod(2)
    ? ((a -= this._spacingX),
      (a = 1 + 2 * Math.floor(a / (2 * this._spacingX))))
    : (a = 2 * Math.floor(a / (2 * this._spacingX)));
  return [a, b];
};
ROT.Display.Hex.prototype._fill = function (a, b) {
  var c = this._hexSize,
    d = this._options.border;
  this._context.beginPath();
  this._options.transpose
    ? (this._context.moveTo(a - c + d, b),
      this._context.lineTo(a - c / 2 + d, b + this._spacingX - d),
      this._context.lineTo(a + c / 2 - d, b + this._spacingX - d),
      this._context.lineTo(a + c - d, b),
      this._context.lineTo(a + c / 2 - d, b - this._spacingX + d),
      this._context.lineTo(a - c / 2 + d, b - this._spacingX + d),
      this._context.lineTo(a - c + d, b))
    : (this._context.moveTo(a, b - c + d),
      this._context.lineTo(a + this._spacingX - d, b - c / 2 + d),
      this._context.lineTo(a + this._spacingX - d, b + c / 2 - d),
      this._context.lineTo(a, b + c - d),
      this._context.lineTo(a - this._spacingX + d, b + c / 2 - d),
      this._context.lineTo(a - this._spacingX + d, b - c / 2 + d),
      this._context.lineTo(a, b - c + d));
  this._context.fill();
};
ROT.Display.Tile = function (a) {
  ROT.Display.Rect.call(this, a);
  this._options = {};
  this._colorCanvas = document.createElement("canvas");
};
ROT.Display.Tile.extend(ROT.Display.Rect);
ROT.Display.Tile.prototype.compute = function (a) {
  this._options = a;
  this._context.canvas.width = a.width * a.tileWidth;
  this._context.canvas.height = a.height * a.tileHeight;
  this._colorCanvas.width = a.tileWidth;
  this._colorCanvas.height = a.tileHeight;
};
ROT.Display.Tile.prototype.draw = function (a, b) {
  var c = a[0],
    d = a[1],
    e = a[2],
    f = a[3],
    g = a[4],
    h = this._options.tileWidth,
    l = this._options.tileHeight;
  b &&
    (this._options.tileColorize
      ? this._context.clearRect(c * h, d * l, h, l)
      : ((this._context.fillStyle = g),
        this._context.fillRect(c * h, d * l, h, l)));
  if (e)
    for (var e = [].concat(e), m = 0; m < e.length; m++) {
      var n = this._options.tileMap[e[m]];
      if (!n) throw Error("Char '" + e[m] + "' not found in tileMap");
      if (this._options.tileColorize) {
        var q = this._colorCanvas,
          p = q.getContext("2d");
        p.clearRect(0, 0, h, l);
        p.drawImage(this._options.tileSet, n[0], n[1], h, l, 0, 0, h, l);
        "transparent" != f &&
          ((p.fillStyle = f),
          (p.globalCompositeOperation = "source-atop"),
          p.fillRect(0, 0, h, l));
        "transparent" != g &&
          ((p.fillStyle = g),
          (p.globalCompositeOperation = "destination-over"),
          p.fillRect(0, 0, h, l));
        this._context.drawImage(q, c * h, d * l, h, l);
      } else
        this._context.drawImage(
          this._options.tileSet,
          n[0],
          n[1],
          h,
          l,
          c * h,
          d * l,
          h,
          l
        );
    }
};
ROT.Display.Tile.prototype.computeSize = function (a, b) {
  return [
    Math.floor(a / this._options.tileWidth),
    Math.floor(b / this._options.tileHeight),
  ];
};
ROT.Display.Tile.prototype.computeFontSize = function (a, b) {
  return [
    Math.floor(a / this._options.width),
    Math.floor(b / this._options.height),
  ];
};
ROT.Display.Tile.prototype.eventToPosition = function (a, b) {
  return [
    Math.floor(a / this._options.tileWidth),
    Math.floor(b / this._options.tileHeight),
  ];
};
ROT.RNG = {
  getSeed: function () {
    return this._seed;
  },
  setSeed: function (a) {
    this._seed = a = 1 > a ? 1 / a : a;
    this._s0 = (a >>> 0) * this._frac;
    a = (69069 * a + 1) >>> 0;
    this._s1 = a * this._frac;
    this._s2 = ((69069 * a + 1) >>> 0) * this._frac;
    this._c = 1;
    return this;
  },
  getUniform: function () {
    var a = 2091639 * this._s0 + this._c * this._frac;
    this._s0 = this._s1;
    this._s1 = this._s2;
    this._c = a | 0;
    return (this._s2 = a - this._c);
  },
  getUniformInt: function (a, b) {
    var c = Math.max(a, b),
      d = Math.min(a, b);
    return Math.floor(this.getUniform() * (c - d + 1)) + d;
  },
  getNormal: function (a, b) {
    do
      var c = 2 * this.getUniform() - 1,
        d = 2 * this.getUniform() - 1,
        d = c * c + d * d;
    while (1 < d || 0 == d);
    return (a || 0) + c * Math.sqrt((-2 * Math.log(d)) / d) * (b || 1);
  },
  getPercentage: function () {
    return 1 + Math.floor(100 * this.getUniform());
  },
  getWeightedValue: function (a) {
    var b = 0,
      c;
    for (c in a) b += a[c];
    var b = this.getUniform() * b,
      d = 0;
    for (c in a) if (((d += a[c]), b < d)) break;
    return c;
  },
  getState: function () {
    return [this._s0, this._s1, this._s2, this._c];
  },
  setState: function (a) {
    this._s0 = a[0];
    this._s1 = a[1];
    this._s2 = a[2];
    this._c = a[3];
    return this;
  },
  clone: function () {
    var a = Object.create(this);
    a.setState(this.getState());
    return a;
  },
  _s0: 0,
  _s1: 0,
  _s2: 0,
  _c: 0,
  _frac: 2.3283064365386963e-10,
};
ROT.RNG.setSeed(Date.now());
ROT.StringGenerator = function (a) {
  this._options = { words: !1, order: 3, prior: 0.001 };
  for (var b in a) this._options[b] = a[b];
  this._suffix = this._boundary = String.fromCharCode(0);
  this._prefix = [];
  for (a = 0; a < this._options.order; a++) this._prefix.push(this._boundary);
  this._priorValues = {};
  this._priorValues[this._boundary] = this._options.prior;
  this._data = {};
};
ROT.StringGenerator.prototype.clear = function () {
  this._data = {};
  this._priorValues = {};
};
ROT.StringGenerator.prototype.generate = function () {
  for (
    var a = [this._sample(this._prefix)];
    a[a.length - 1] != this._boundary;

  )
    a.push(this._sample(a));
  return this._join(a.slice(0, -1));
};
ROT.StringGenerator.prototype.observe = function (a) {
  a = this._split(a);
  for (var b = 0; b < a.length; b++)
    this._priorValues[a[b]] = this._options.prior;
  a = this._prefix.concat(a).concat(this._suffix);
  for (b = this._options.order; b < a.length; b++)
    for (
      var c = a.slice(b - this._options.order, b), d = a[b], e = 0;
      e < c.length;
      e++
    ) {
      var f = c.slice(e);
      this._observeEvent(f, d);
    }
};
ROT.StringGenerator.prototype.getStats = function () {
  var a = [],
    b = 0,
    c;
  for (c in this._priorValues) b++;
  b--;
  a.push("distinct samples: " + b);
  var d = (b = 0);
  for (c in this._data) {
    b++;
    for (var e in this._data[c]) d++;
  }
  a.push("dictionary size (contexts): " + b);
  a.push("dictionary size (events): " + d);
  return a.join(", ");
};
ROT.StringGenerator.prototype._split = function (a) {
  return a.split(this._options.words ? /\s+/ : "");
};
ROT.StringGenerator.prototype._join = function (a) {
  return a.join(this._options.words ? " " : "");
};
ROT.StringGenerator.prototype._observeEvent = function (a, b) {
  var c = this._join(a);
  c in this._data || (this._data[c] = {});
  c = this._data[c];
  b in c || (c[b] = 0);
  c[b]++;
};
ROT.StringGenerator.prototype._sample = function (a) {
  a = this._backoff(a);
  a = this._join(a);
  a = this._data[a];
  var b = {};
  if (this._options.prior) {
    for (var c in this._priorValues) b[c] = this._priorValues[c];
    for (c in a) b[c] += a[c];
  } else b = a;
  return ROT.RNG.getWeightedValue(b);
};
ROT.StringGenerator.prototype._backoff = function (a) {
  for (
    a.length > this._options.order
      ? (a = a.slice(-this._options.order))
      : a.length < this._options.order &&
        (a = this._prefix.slice(0, this._options.order - a.length).concat(a));
    !(this._join(a) in this._data) && 0 < a.length;

  )
    a = a.slice(1);
  return a;
};
ROT.EventQueue = function () {
  this._time = 0;
  this._events = [];
  this._eventTimes = [];
};
ROT.EventQueue.prototype.getTime = function () {
  return this._time;
};
ROT.EventQueue.prototype.clear = function () {
  this._events = [];
  this._eventTimes = [];
  return this;
};
ROT.EventQueue.prototype.add = function (a, b) {
  for (var c = this._events.length, d = 0; d < this._eventTimes.length; d++)
    if (this._eventTimes[d] > b) {
      c = d;
      break;
    }
  this._events.splice(c, 0, a);
  this._eventTimes.splice(c, 0, b);
};
ROT.EventQueue.prototype.get = function () {
  if (!this._events.length) return null;
  var a = this._eventTimes.splice(0, 1)[0];
  if (0 < a) {
    this._time += a;
    for (var b = 0; b < this._eventTimes.length; b++) this._eventTimes[b] -= a;
  }
  return this._events.splice(0, 1)[0];
};
ROT.EventQueue.prototype.remove = function (a) {
  a = this._events.indexOf(a);
  if (-1 == a) return !1;
  this._remove(a);
  return !0;
};
ROT.EventQueue.prototype._remove = function (a) {
  this._events.splice(a, 1);
  this._eventTimes.splice(a, 1);
};
ROT.Scheduler = function () {
  this._queue = new ROT.EventQueue();
  this._repeat = [];
  this._current = null;
};
ROT.Scheduler.prototype.getTime = function () {
  return this._queue.getTime();
};
ROT.Scheduler.prototype.add = function (a, b) {
  b && this._repeat.push(a);
  return this;
};
ROT.Scheduler.prototype.clear = function () {
  this._queue.clear();
  this._repeat = [];
  this._current = null;
  return this;
};
ROT.Scheduler.prototype.remove = function (a) {
  var b = this._queue.remove(a),
    c = this._repeat.indexOf(a);
  -1 != c && this._repeat.splice(c, 1);
  this._current == a && (this._current = null);
  return b;
};
ROT.Scheduler.prototype.next = function () {
  return (this._current = this._queue.get());
};
ROT.Scheduler.Simple = function () {
  ROT.Scheduler.call(this);
};
ROT.Scheduler.Simple.extend(ROT.Scheduler);
ROT.Scheduler.Simple.prototype.add = function (a, b) {
  this._queue.add(a, 0);
  return ROT.Scheduler.prototype.add.call(this, a, b);
};
ROT.Scheduler.Simple.prototype.next = function () {
  this._current &&
    -1 != this._repeat.indexOf(this._current) &&
    this._queue.add(this._current, 0);
  return ROT.Scheduler.prototype.next.call(this);
};
ROT.Scheduler.Speed = function () {
  ROT.Scheduler.call(this);
};
ROT.Scheduler.Speed.extend(ROT.Scheduler);
ROT.Scheduler.Speed.prototype.add = function (a, b) {
  this._queue.add(a, 1 / a.getSpeed());
  return ROT.Scheduler.prototype.add.call(this, a, b);
};
ROT.Scheduler.Speed.prototype.next = function () {
  this._current &&
    -1 != this._repeat.indexOf(this._current) &&
    this._queue.add(this._current, 1 / this._current.getSpeed());
  return ROT.Scheduler.prototype.next.call(this);
};
ROT.Scheduler.Action = function () {
  ROT.Scheduler.call(this);
  this._duration = this._defaultDuration = 1;
};
ROT.Scheduler.Action.extend(ROT.Scheduler);
ROT.Scheduler.Action.prototype.add = function (a, b, c) {
  this._queue.add(a, c || this._defaultDuration);
  return ROT.Scheduler.prototype.add.call(this, a, b);
};
ROT.Scheduler.Action.prototype.clear = function () {
  this._duration = this._defaultDuration;
  return ROT.Scheduler.prototype.clear.call(this);
};
ROT.Scheduler.Action.prototype.remove = function (a) {
  a == this._current && (this._duration = this._defaultDuration);
  return ROT.Scheduler.prototype.remove.call(this, a);
};
ROT.Scheduler.Action.prototype.next = function () {
  this._current &&
    -1 != this._repeat.indexOf(this._current) &&
    (this._queue.add(this._current, this._duration || this._defaultDuration),
    (this._duration = this._defaultDuration));
  return ROT.Scheduler.prototype.next.call(this);
};
ROT.Scheduler.Action.prototype.setDuration = function (a) {
  this._current && (this._duration = a);
  return this;
};
ROT.Engine = function (a) {
  this._scheduler = a;
  this._lock = 1;
};
ROT.Engine.prototype.start = function () {
  return this.unlock();
};
ROT.Engine.prototype.lock = function () {
  this._lock++;
  return this;
};
ROT.Engine.prototype.unlock = function () {
  if (!this._lock) throw Error("Cannot unlock unlocked engine");
  for (this._lock--; !this._lock; ) {
    var a = this._scheduler.next();
    if (!a) return this.lock();
    (a = a.act()) && a.then && (this.lock(), a.then(this.unlock.bind(this)));
  }
  return this;
};
ROT.Map = function (a, b) {
  this._width = a || ROT.DEFAULT_WIDTH;
  this._height = b || ROT.DEFAULT_HEIGHT;
};
ROT.Map.prototype.create = function (a) {};
ROT.Map.prototype._fillMap = function (a) {
  for (var b = [], c = 0; c < this._width; c++) {
    b.push([]);
    for (var d = 0; d < this._height; d++) b[c].push(a);
  }
  return b;
};
ROT.Map.Arena = function (a, b) {
  ROT.Map.call(this, a, b);
};
ROT.Map.Arena.extend(ROT.Map);
ROT.Map.Arena.prototype.create = function (a) {
  for (var b = this._width - 1, c = this._height - 1, d = 0; d <= b; d++)
    for (var e = 0; e <= c; e++) a(d, e, d && e && d < b && e < c ? 0 : 1);
  return this;
};
ROT.Map.DividedMaze = function (a, b) {
  ROT.Map.call(this, a, b);
  this._stack = [];
};
ROT.Map.DividedMaze.extend(ROT.Map);
ROT.Map.DividedMaze.prototype.create = function (a) {
  var b = this._width,
    c = this._height;
  this._map = [];
  for (var d = 0; d < b; d++) {
    this._map.push([]);
    for (var e = 0; e < c; e++)
      this._map[d].push(0 == d || 0 == e || d + 1 == b || e + 1 == c ? 1 : 0);
  }
  this._stack = [[1, 1, b - 2, c - 2]];
  this._process();
  for (d = 0; d < b; d++) for (e = 0; e < c; e++) a(d, e, this._map[d][e]);
  this._map = null;
  return this;
};
ROT.Map.DividedMaze.prototype._process = function () {
  for (; this._stack.length; ) {
    var a = this._stack.shift();
    this._partitionRoom(a);
  }
};
ROT.Map.DividedMaze.prototype._partitionRoom = function (a) {
  for (var b = [], c = [], d = a[0] + 1; d < a[2]; d++) {
    var e = this._map[d][a[3] + 1];
    !this._map[d][a[1] - 1] || !e || d % 2 || b.push(d);
  }
  for (d = a[1] + 1; d < a[3]; d++)
    (e = this._map[a[2] + 1][d]),
      !this._map[a[0] - 1][d] || !e || d % 2 || c.push(d);
  if (b.length && c.length) {
    b = b.random();
    c = c.random();
    this._map[b][c] = 1;
    var e = [],
      f = [];
    e.push(f);
    for (d = a[0]; d < b; d++) (this._map[d][c] = 1), f.push([d, c]);
    f = [];
    e.push(f);
    for (d = b + 1; d <= a[2]; d++) (this._map[d][c] = 1), f.push([d, c]);
    f = [];
    e.push(f);
    for (d = a[1]; d < c; d++) (this._map[b][d] = 1), f.push([b, d]);
    f = [];
    e.push(f);
    for (d = c + 1; d <= a[3]; d++) (this._map[b][d] = 1), f.push([b, d]);
    for (var g = e.random(), d = 0; d < e.length; d++)
      (f = e[d]), f != g && ((f = f.random()), (this._map[f[0]][f[1]] = 0));
    this._stack.push([a[0], a[1], b - 1, c - 1]);
    this._stack.push([b + 1, a[1], a[2], c - 1]);
    this._stack.push([a[0], c + 1, b - 1, a[3]]);
    this._stack.push([b + 1, c + 1, a[2], a[3]]);
  }
};
ROT.Map.IceyMaze = function (a, b, c) {
  ROT.Map.call(this, a, b);
  this._regularity = c || 0;
};
ROT.Map.IceyMaze.extend(ROT.Map);
ROT.Map.IceyMaze.prototype.create = function (a) {
  var b = this._width,
    c = this._height,
    d = this._fillMap(1),
    b = b - (b % 2 ? 1 : 2),
    c = c - (c % 2 ? 1 : 2),
    e,
    f,
    g,
    h,
    l = 0,
    m,
    n = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
  do
    if (
      ((e = 1 + 2 * Math.floor((ROT.RNG.getUniform() * (b - 1)) / 2)),
      (f = 1 + 2 * Math.floor((ROT.RNG.getUniform() * (c - 1)) / 2)),
      l || (d[e][f] = 0),
      !d[e][f])
    ) {
      this._randomize(n);
      do {
        0 == Math.floor(ROT.RNG.getUniform() * (this._regularity + 1)) &&
          this._randomize(n);
        m = !0;
        for (var q = 0; 4 > q; q++)
          if (
            ((g = e + 2 * n[q][0]),
            (h = f + 2 * n[q][1]),
            this._isFree(d, g, h, b, c))
          ) {
            d[g][h] = 0;
            d[e + n[q][0]][f + n[q][1]] = 0;
            e = g;
            f = h;
            m = !1;
            l++;
            break;
          }
      } while (!m);
    }
  while (l + 1 < (b * c) / 4);
  for (q = 0; q < this._width; q++)
    for (b = 0; b < this._height; b++) a(q, b, d[q][b]);
  this._map = null;
  return this;
};
ROT.Map.IceyMaze.prototype._randomize = function (a) {
  for (var b = 0; 4 > b; b++) (a[b][0] = 0), (a[b][1] = 0);
  switch (Math.floor(4 * ROT.RNG.getUniform())) {
    case 0:
      a[0][0] = -1;
      a[1][0] = 1;
      a[2][1] = -1;
      a[3][1] = 1;
      break;
    case 1:
      a[3][0] = -1;
      a[2][0] = 1;
      a[1][1] = -1;
      a[0][1] = 1;
      break;
    case 2:
      a[2][0] = -1;
      a[3][0] = 1;
      a[0][1] = -1;
      a[1][1] = 1;
      break;
    case 3:
      (a[1][0] = -1), (a[0][0] = 1), (a[3][1] = -1), (a[2][1] = 1);
  }
};
ROT.Map.IceyMaze.prototype._isFree = function (a, b, c, d, e) {
  return 1 > b || 1 > c || b >= d || c >= e ? !1 : a[b][c];
};
ROT.Map.EllerMaze = function (a, b) {
  ROT.Map.call(this, a, b);
};
ROT.Map.EllerMaze.extend(ROT.Map);
ROT.Map.EllerMaze.prototype.create = function (a) {
  for (
    var b = this._fillMap(1),
      c = Math.ceil((this._width - 2) / 2),
      d = [],
      e = [],
      f = 0;
    f < c;
    f++
  )
    d.push(f), e.push(f);
  d.push(c - 1);
  for (var g = 1; g + 3 < this._height; g += 2)
    for (f = 0; f < c; f++) {
      var h = 2 * f + 1,
        l = g;
      b[h][l] = 0;
      f != d[f + 1] &&
        0.375 < ROT.RNG.getUniform() &&
        (this._addToList(f, d, e), (b[h + 1][l] = 0));
      f != d[f] && 0.375 < ROT.RNG.getUniform()
        ? this._removeFromList(f, d, e)
        : (b[h][l + 1] = 0);
    }
  for (f = 0; f < c; f++)
    (h = 2 * f + 1),
      (l = g),
      (b[h][l] = 0),
      f != d[f + 1] &&
        (f == d[f] || 0.375 < ROT.RNG.getUniform()) &&
        (this._addToList(f, d, e), (b[h + 1][l] = 0)),
      this._removeFromList(f, d, e);
  for (f = 0; f < this._width; f++)
    for (g = 0; g < this._height; g++) a(f, g, b[f][g]);
  return this;
};
ROT.Map.EllerMaze.prototype._removeFromList = function (a, b, c) {
  c[b[a]] = c[a];
  b[c[a]] = b[a];
  c[a] = a;
  b[a] = a;
};
ROT.Map.EllerMaze.prototype._addToList = function (a, b, c) {
  c[b[a + 1]] = c[a];
  b[c[a]] = b[a + 1];
  c[a] = a + 1;
  b[a + 1] = a;
};
ROT.Map.Cellular = function (a, b, c) {
  ROT.Map.call(this, a, b);
  this._options = { born: [5, 6, 7, 8], survive: [4, 5, 6, 7, 8], topology: 8 };
  this.setOptions(c);
  this._dirs = ROT.DIRS[this._options.topology];
  this._map = this._fillMap(0);
};
ROT.Map.Cellular.extend(ROT.Map);
ROT.Map.Cellular.prototype.randomize = function (a) {
  for (var b = 0; b < this._width; b++)
    for (var c = 0; c < this._height; c++)
      this._map[b][c] = ROT.RNG.getUniform() < a ? 1 : 0;
  return this;
};
ROT.Map.Cellular.prototype.setOptions = function (a) {
  for (var b in a) this._options[b] = a[b];
};
ROT.Map.Cellular.prototype.set = function (a, b, c) {
  this._map[a][b] = c;
};
ROT.Map.Cellular.prototype.create = function (a) {
  for (
    var b = this._fillMap(0),
      c = this._options.born,
      d = this._options.survive,
      e = 0;
    e < this._height;
    e++
  ) {
    var f = 1,
      g = 0;
    6 == this._options.topology && ((f = 2), (g = e % 2));
    for (; g < this._width; g += f) {
      var h = this._map[g][e],
        l = this._getNeighbors(g, e);
      h && -1 != d.indexOf(l)
        ? (b[g][e] = 1)
        : h || -1 == c.indexOf(l) || (b[g][e] = 1);
    }
  }
  this._map = b;
  this.serviceCallback(a);
};
ROT.Map.Cellular.prototype.serviceCallback = function (a) {
  if (a)
    for (var b = 0; b < this._height; b++) {
      var c = 1,
        d = 0;
      6 == this._options.topology && ((c = 2), (d = b % 2));
      for (; d < this._width; d += c) a(d, b, this._map[d][b]);
    }
};
ROT.Map.Cellular.prototype._getNeighbors = function (a, b) {
  for (var c = 0, d = 0; d < this._dirs.length; d++) {
    var e = this._dirs[d],
      f = a + e[0],
      e = b + e[1];
    0 > f ||
      f >= this._width ||
      0 > f ||
      e >= this._width ||
      (c += 1 == this._map[f][e] ? 1 : 0);
  }
  return c;
};
ROT.Map.Cellular.prototype.connect = function (a, b, c) {
  b || (b = 0);
  for (var d = [], e = {}, f = 0; f < this._width; f++)
    for (var g = 0; g < this._height; g++)
      if (this._freeSpace(f, g, b)) {
        var h = [f, g];
        e[this._pointKey(h)] = h;
        d.push([f, g]);
      }
  h = d[ROT.RNG.getUniformInt(0, d.length - 1)];
  f = this._pointKey(h);
  d = {};
  d[f] = h;
  delete e[f];
  for (this._findConnected(d, e, [h], !1, b); 0 < Object.keys(e).length; ) {
    h = this._getFromTo(d, e);
    f = h[0];
    g = h[1];
    h = {};
    h[this._pointKey(f)] = f;
    this._findConnected(h, e, [f], !0, b);
    this._tunnelToConnected(g, f, d, e, b, c);
    for (var l in h)
      (f = h[l]), (this._map[f[0]][f[1]] = b), (d[l] = f), delete e[l];
  }
  this.serviceCallback(a);
};
ROT.Map.Cellular.prototype._getFromTo = function (a, b) {
  for (
    var c, d, e, f = Object.keys(a), g = Object.keys(b), h = 0;
    5 > h &&
    !(f.length < g.length
      ? ((c = f),
        (d = a[c[ROT.RNG.getUniformInt(0, c.length - 1)]]),
        (c = this._getClosest(d, b)))
      : ((c = g),
        (c = b[c[ROT.RNG.getUniformInt(0, c.length - 1)]]),
        (d = this._getClosest(c, a))),
    (e = (c[0] - d[0]) * (c[0] - d[0]) + (c[1] - d[1]) * (c[1] - d[1])),
    64 > e);
    h++
  );
  return [c, d];
};
ROT.Map.Cellular.prototype._getClosest = function (a, b) {
  var c = null,
    d = null;
  for (k in b) {
    var e = b[k],
      f = (e[0] - a[0]) * (e[0] - a[0]) + (e[1] - a[1]) * (e[1] - a[1]);
    if (null == d || f < d) (d = f), (c = e);
  }
  return c;
};
ROT.Map.Cellular.prototype._findConnected = function (a, b, c, d, e) {
  for (; 0 < c.length; )
    for (
      var f = c.splice(0, 1)[0],
        f = [
          [f[0] + 1, f[1]],
          [f[0] - 1, f[1]],
          [f[0], f[1] + 1],
          [f[0], f[1] - 1],
        ],
        g = 0;
      g < f.length;
      g++
    ) {
      var h = this._pointKey(f[g]);
      null == a[h] &&
        this._freeSpace(f[g][0], f[g][1], e) &&
        ((a[h] = f[g]), d || delete b[h], c.push(f[g]));
    }
};
ROT.Map.Cellular.prototype._tunnelToConnected = function (a, b, c, d, e, f) {
  this._pointKey(b);
  var g, h;
  b[0] < a[0] ? ((g = b), (h = a)) : ((g = a), (h = b));
  for (var l = g[0]; l <= h[0]; l++) {
    this._map[l][g[1]] = e;
    var m = [l, g[1]],
      n = this._pointKey(m);
    c[n] = m;
    delete d[n];
  }
  f && g[0] < h[0] && f(g, [h[0], g[1]]);
  l = h[0];
  b[1] < a[1] ? ((g = b), (h = a)) : ((g = a), (h = b));
  for (a = g[1]; a < h[1]; a++)
    (this._map[l][a] = e),
      (m = [l, a]),
      (n = this._pointKey(m)),
      (c[n] = m),
      delete d[n];
  f && g[1] < h[1] && f([h[0], g[1]], [h[0], h[1]]);
};
ROT.Map.Cellular.prototype._freeSpace = function (a, b, c) {
  return (
    0 <= a &&
    a < this._width &&
    0 <= b &&
    b < this._height &&
    this._map[a][b] == c
  );
};
ROT.Map.Cellular.prototype._pointKey = function (a) {
  return a[0] + "." + a[1];
};
ROT.Map.Dungeon = function (a, b) {
  ROT.Map.call(this, a, b);
  this._rooms = [];
  this._corridors = [];
};
ROT.Map.Dungeon.extend(ROT.Map);
ROT.Map.Dungeon.prototype.getRooms = function () {
  return this._rooms;
};
ROT.Map.Dungeon.prototype.getCorridors = function () {
  return this._corridors;
};
ROT.Map.Digger = function (a, b, c) {
  ROT.Map.Dungeon.call(this, a, b);
  this._options = {
    roomWidth: [3, 9],
    roomHeight: [3, 5],
    corridorLength: [3, 10],
    dugPercentage: 0.2,
    timeLimit: 1e3,
  };
  for (var d in c) this._options[d] = c[d];
  this._features = { Room: 4, Corridor: 4 };
  this._featureAttempts = 20;
  this._walls = {};
  this._digCallback = this._digCallback.bind(this);
  this._canBeDugCallback = this._canBeDugCallback.bind(this);
  this._isWallCallback = this._isWallCallback.bind(this);
  this._priorityWallCallback = this._priorityWallCallback.bind(this);
};
ROT.Map.Digger.extend(ROT.Map.Dungeon);
ROT.Map.Digger.prototype.create = function (a) {
  this._rooms = [];
  this._corridors = [];
  this._map = this._fillMap(1);
  this._walls = {};
  this._dug = 0;
  var b = (this._width - 2) * (this._height - 2);
  this._firstRoom();
  var c = Date.now();
  do {
    if (Date.now() - c > this._options.timeLimit) break;
    var d = this._findWall();
    if (!d) break;
    var e = d.split(","),
      d = parseInt(e[0]),
      e = parseInt(e[1]),
      f = this._getDiggingDirection(d, e);
    if (f) {
      var g = 0;
      do
        if ((g++, this._tryFeature(d, e, f[0], f[1]))) {
          this._removeSurroundingWalls(d, e);
          this._removeSurroundingWalls(d - f[0], e - f[1]);
          break;
        }
      while (g < this._featureAttempts);
      var g = 0,
        h;
      for (h in this._walls) 1 < this._walls[h] && g++;
    }
  } while (this._dug / b < this._options.dugPercentage || g);
  this._addDoors();
  if (a)
    for (b = 0; b < this._width; b++)
      for (c = 0; c < this._height; c++) a(b, c, this._map[b][c]);
  this._walls = {};
  this._map = null;
  return this;
};
ROT.Map.Digger.prototype._digCallback = function (a, b, c) {
  0 == c || 2 == c
    ? ((this._map[a][b] = 0), this._dug++)
    : (this._walls[a + "," + b] = 1);
};
ROT.Map.Digger.prototype._isWallCallback = function (a, b) {
  return 0 > a || 0 > b || a >= this._width || b >= this._height
    ? !1
    : 1 == this._map[a][b];
};
ROT.Map.Digger.prototype._canBeDugCallback = function (a, b) {
  return 1 > a || 1 > b || a + 1 >= this._width || b + 1 >= this._height
    ? !1
    : 1 == this._map[a][b];
};
ROT.Map.Digger.prototype._priorityWallCallback = function (a, b) {
  this._walls[a + "," + b] = 2;
};
ROT.Map.Digger.prototype._firstRoom = function () {
  var a = ROT.Map.Feature.Room.createRandomCenter(
    Math.floor(this._width / 2),
    Math.floor(this._height / 2),
    this._options
  );
  this._rooms.push(a);
  a.create(this._digCallback);
};
ROT.Map.Digger.prototype._findWall = function () {
  var a = [],
    b = [],
    c;
  for (c in this._walls) 2 == this._walls[c] ? b.push(c) : a.push(c);
  a = b.length ? b : a;
  if (!a.length) return null;
  c = a.random();
  delete this._walls[c];
  return c;
};
ROT.Map.Digger.prototype._tryFeature = function (a, b, c, d) {
  var e = ROT.RNG.getWeightedValue(this._features),
    e = ROT.Map.Feature[e].createRandomAt(a, b, c, d, this._options);
  if (!e.isValid(this._isWallCallback, this._canBeDugCallback)) return !1;
  e.create(this._digCallback);
  e instanceof ROT.Map.Feature.Room && this._rooms.push(e);
  e instanceof ROT.Map.Feature.Corridor &&
    (e.createPriorityWalls(this._priorityWallCallback),
    this._corridors.push(e));
  return !0;
};
ROT.Map.Digger.prototype._removeSurroundingWalls = function (a, b) {
  for (var c = ROT.DIRS[4], d = 0; d < c.length; d++) {
    var e = c[d],
      f = a + e[0],
      g = b + e[1];
    delete this._walls[f + "," + g];
    f = a + 2 * e[0];
    g = b + 2 * e[1];
    delete this._walls[f + "," + g];
  }
};
ROT.Map.Digger.prototype._getDiggingDirection = function (a, b) {
  if (0 >= a || 0 >= b || a >= this._width - 1 || b >= this._height - 1)
    return null;
  for (var c = null, d = ROT.DIRS[4], e = 0; e < d.length; e++) {
    var f = d[e];
    if (!this._map[a + f[0]][b + f[1]]) {
      if (c) return null;
      c = f;
    }
  }
  return c ? [-c[0], -c[1]] : null;
};
ROT.Map.Digger.prototype._addDoors = function () {
  for (
    var a = this._map,
      b = function (b, c) {
        return 1 == a[b][c];
      },
      c = 0;
    c < this._rooms.length;
    c++
  ) {
    var d = this._rooms[c];
    d.clearDoors();
    d.addDoors(b);
  }
};
ROT.Map.Uniform = function (a, b, c) {
  ROT.Map.Dungeon.call(this, a, b);
  this._options = {
    roomWidth: [3, 9],
    roomHeight: [3, 5],
    roomDugPercentage: 0.1,
    timeLimit: 1e3,
  };
  for (var d in c) this._options[d] = c[d];
  this._corridorAttempts = this._roomAttempts = 20;
  this._connected = [];
  this._unconnected = [];
  this._digCallback = this._digCallback.bind(this);
  this._canBeDugCallback = this._canBeDugCallback.bind(this);
  this._isWallCallback = this._isWallCallback.bind(this);
};
ROT.Map.Uniform.extend(ROT.Map.Dungeon);
ROT.Map.Uniform.prototype.create = function (a) {
  for (var b = Date.now(); ; ) {
    if (Date.now() - b > this._options.timeLimit) return null;
    this._map = this._fillMap(1);
    this._dug = 0;
    this._rooms = [];
    this._unconnected = [];
    this._generateRooms();
    if (!(2 > this._rooms.length) && this._generateCorridors()) break;
  }
  if (a)
    for (b = 0; b < this._width; b++)
      for (var c = 0; c < this._height; c++) a(b, c, this._map[b][c]);
  return this;
};
ROT.Map.Uniform.prototype._generateRooms = function () {
  var a = this._width - 2,
    b = this._height - 2;
  do {
    var c = this._generateRoom();
    if (this._dug / (a * b) > this._options.roomDugPercentage) break;
  } while (c);
};
ROT.Map.Uniform.prototype._generateRoom = function () {
  for (var a = 0; a < this._roomAttempts; ) {
    a++;
    var b = ROT.Map.Feature.Room.createRandom(
      this._width,
      this._height,
      this._options
    );
    if (b.isValid(this._isWallCallback, this._canBeDugCallback))
      return b.create(this._digCallback), this._rooms.push(b), b;
  }
  return null;
};
ROT.Map.Uniform.prototype._generateCorridors = function () {
  for (var a = 0; a < this._corridorAttempts; ) {
    a++;
    this._corridors = [];
    this._map = this._fillMap(1);
    for (var b = 0; b < this._rooms.length; b++) {
      var c = this._rooms[b];
      c.clearDoors();
      c.create(this._digCallback);
    }
    this._unconnected = this._rooms.slice().randomize();
    this._connected = [];
    for (
      this._unconnected.length && this._connected.push(this._unconnected.pop());
      ;

    ) {
      b = this._connected.random();
      b = this._closestRoom(this._unconnected, b);
      c = this._closestRoom(this._connected, b);
      if (!this._connectRooms(b, c)) break;
      if (!this._unconnected.length) return !0;
    }
  }
  return !1;
};
ROT.Map.Uniform.prototype._closestRoom = function (a, b) {
  for (
    var c = Infinity, d = b.getCenter(), e = null, f = 0;
    f < a.length;
    f++
  ) {
    var g = a[f],
      h = g.getCenter(),
      l = h[0] - d[0],
      h = h[1] - d[1],
      l = l * l + h * h;
    l < c && ((c = l), (e = g));
  }
  return e;
};
ROT.Map.Uniform.prototype._connectRooms = function (a, b) {
  var c = a.getCenter(),
    d = b.getCenter(),
    e = d[0] - c[0],
    c = d[1] - c[1];
  if (Math.abs(e) < Math.abs(c))
    var c = 0 < c ? 2 : 0,
      f = (c + 2) % 4,
      g = b.getLeft(),
      h = b.getRight(),
      e = 0;
  else
    (c = 0 < e ? 1 : 3),
      (f = (c + 2) % 4),
      (g = b.getTop()),
      (h = b.getBottom()),
      (e = 1);
  c = this._placeInWall(a, c);
  if (!c) return !1;
  if (c[e] >= g && c[e] <= h) {
    var l = c.slice(),
      d = null;
    switch (f) {
      case 0:
        d = b.getTop() - 1;
        break;
      case 1:
        d = b.getRight() + 1;
        break;
      case 2:
        d = b.getBottom() + 1;
        break;
      case 3:
        d = b.getLeft() - 1;
    }
    l[(e + 1) % 2] = d;
    this._digLine([c, l]);
  } else if (c[e] < g - 1 || c[e] > h + 1) {
    d = c[e] - d[e];
    switch (f) {
      case 0:
      case 1:
        l = 0 > d ? 3 : 1;
        break;
      case 2:
      case 3:
        l = 0 > d ? 1 : 3;
    }
    l = this._placeInWall(b, (f + l) % 4);
    if (!l) return !1;
    f = [0, 0];
    f[e] = c[e];
    d = (e + 1) % 2;
    f[d] = l[d];
    this._digLine([c, f, l]);
  } else {
    d = (e + 1) % 2;
    l = this._placeInWall(b, f);
    if (!l) return !1;
    f = Math.round((l[d] + c[d]) / 2);
    g = [0, 0];
    h = [0, 0];
    g[e] = c[e];
    g[d] = f;
    h[e] = l[e];
    h[d] = f;
    this._digLine([c, g, h, l]);
  }
  a.addDoor(c[0], c[1]);
  b.addDoor(l[0], l[1]);
  e = this._unconnected.indexOf(a);
  -1 != e && (this._unconnected.splice(e, 1), this._connected.push(a));
  e = this._unconnected.indexOf(b);
  -1 != e && (this._unconnected.splice(e, 1), this._connected.push(b));
  return !0;
};
ROT.Map.Uniform.prototype._placeInWall = function (a, b) {
  var c = [0, 0],
    d = [0, 0],
    e = 0;
  switch (b) {
    case 0:
      d = [1, 0];
      c = [a.getLeft(), a.getTop() - 1];
      e = a.getRight() - a.getLeft() + 1;
      break;
    case 1:
      d = [0, 1];
      c = [a.getRight() + 1, a.getTop()];
      e = a.getBottom() - a.getTop() + 1;
      break;
    case 2:
      d = [1, 0];
      c = [a.getLeft(), a.getBottom() + 1];
      e = a.getRight() - a.getLeft() + 1;
      break;
    case 3:
      (d = [0, 1]),
        (c = [a.getLeft() - 1, a.getTop()]),
        (e = a.getBottom() - a.getTop() + 1);
  }
  for (var f = [], g = -2, h = 0; h < e; h++) {
    var l = c[0] + h * d[0],
      m = c[1] + h * d[1];
    f.push(null);
    1 == this._map[l][m]
      ? g != h - 1 && (f[h] = [l, m])
      : (g = h) && (f[h - 1] = null);
  }
  for (h = f.length - 1; 0 <= h; h--) f[h] || f.splice(h, 1);
  return f.length ? f.random() : null;
};
ROT.Map.Uniform.prototype._digLine = function (a) {
  for (var b = 1; b < a.length; b++) {
    var c = a[b - 1],
      d = a[b],
      c = new ROT.Map.Feature.Corridor(c[0], c[1], d[0], d[1]);
    c.create(this._digCallback);
    this._corridors.push(c);
  }
};
ROT.Map.Uniform.prototype._digCallback = function (a, b, c) {
  this._map[a][b] = c;
  0 == c && this._dug++;
};
ROT.Map.Uniform.prototype._isWallCallback = function (a, b) {
  return 0 > a || 0 > b || a >= this._width || b >= this._height
    ? !1
    : 1 == this._map[a][b];
};
ROT.Map.Uniform.prototype._canBeDugCallback = function (a, b) {
  return 1 > a || 1 > b || a + 1 >= this._width || b + 1 >= this._height
    ? !1
    : 1 == this._map[a][b];
};
ROT.Map.Rogue = function (a, b, c) {
  ROT.Map.call(this, a, b);
  this._options = { cellWidth: 3, cellHeight: 3 };
  for (var d in c) this._options[d] = c[d];
  this._options.hasOwnProperty("roomWidth") ||
    (this._options.roomWidth = this._calculateRoomSize(
      this._width,
      this._options.cellWidth
    ));
  this._options.hasOwnProperty("roomHeight") ||
    (this._options.roomHeight = this._calculateRoomSize(
      this._height,
      this._options.cellHeight
    ));
};
ROT.Map.Rogue.extend(ROT.Map);
ROT.Map.Rogue.prototype.create = function (a) {
  this.map = this._fillMap(1);
  this.rooms = [];
  this.connectedCells = [];
  this._initRooms();
  this._connectRooms();
  this._connectUnconnectedRooms();
  this._createRandomRoomConnections();
  this._createRooms();
  this._createCorridors();
  if (a)
    for (var b = 0; b < this._width; b++)
      for (var c = 0; c < this._height; c++) a(b, c, this.map[b][c]);
  return this;
};
ROT.Map.Rogue.prototype._calculateRoomSize = function (a, b) {
  var c = Math.floor((a / b) * 0.8),
    d = Math.floor((a / b) * 0.25);
  2 > d && (d = 2);
  2 > c && (c = 2);
  return [d, c];
};
ROT.Map.Rogue.prototype._initRooms = function () {
  for (var a = 0; a < this._options.cellWidth; a++) {
    this.rooms.push([]);
    for (var b = 0; b < this._options.cellHeight; b++)
      this.rooms[a].push({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        connections: [],
        cellx: a,
        celly: b,
      });
  }
};
ROT.Map.Rogue.prototype._connectRooms = function () {
  var a = ROT.RNG.getUniformInt(0, this._options.cellWidth - 1),
    b = ROT.RNG.getUniformInt(0, this._options.cellHeight - 1),
    c,
    d,
    e,
    f;
  do {
    var g = [0, 2, 4, 6],
      g = g.randomize();
    do
      if (
        ((e = !1),
        (c = g.pop()),
        (d = a + ROT.DIRS[8][c][0]),
        (c = b + ROT.DIRS[8][c][1]),
        !(
          0 > d ||
          d >= this._options.cellWidth ||
          0 > c ||
          c >= this._options.cellHeight
        ))
      ) {
        f = this.rooms[a][b];
        if (
          0 < f.connections.length &&
          f.connections[0][0] == d &&
          f.connections[0][1] == c
        )
          break;
        f = this.rooms[d][c];
        0 == f.connections.length &&
          (f.connections.push([a, b]),
          this.connectedCells.push([d, c]),
          (a = d),
          (b = c),
          (e = !0));
      }
    while (0 < g.length && 0 == e);
  } while (0 < g.length);
};
ROT.Map.Rogue.prototype._connectUnconnectedRooms = function () {
  var a = this._options.cellWidth,
    b = this._options.cellHeight;
  this.connectedCells = this.connectedCells.randomize();
  for (var c, d, e, f = 0; f < this._options.cellWidth; f++)
    for (var g = 0; g < this._options.cellHeight; g++)
      if (((c = this.rooms[f][g]), 0 == c.connections.length)) {
        var h = [0, 2, 4, 6],
          h = h.randomize();
        e = !1;
        do {
          var l = h.pop(),
            m = f + ROT.DIRS[8][l][0],
            l = g + ROT.DIRS[8][l][1];
          if (!(0 > m || m >= a || 0 > l || l >= b)) {
            d = this.rooms[m][l];
            e = !0;
            if (0 == d.connections.length) break;
            for (m = 0; m < d.connections.length; m++)
              if (d.connections[m][0] == f && d.connections[m][1] == g) {
                e = !1;
                break;
              }
            if (e) break;
          }
        } while (h.length);
        e
          ? c.connections.push([d.cellx, d.celly])
          : console.log("-- Unable to connect room.");
      }
};
ROT.Map.Rogue.prototype._createRandomRoomConnections = function (a) {};
ROT.Map.Rogue.prototype._createRooms = function () {
  for (
    var a = this._width,
      b = this._height,
      c = this._options.cellWidth,
      d = this._options.cellHeight,
      e = Math.floor(this._width / c),
      f = Math.floor(this._height / d),
      g,
      h,
      l = this._options.roomWidth,
      m = this._options.roomHeight,
      n,
      q,
      p,
      r = 0;
    r < c;
    r++
  )
    for (var t = 0; t < d; t++) {
      n = e * r;
      q = f * t;
      0 == n && (n = 1);
      0 == q && (q = 1);
      g = ROT.RNG.getUniformInt(l[0], l[1]);
      h = ROT.RNG.getUniformInt(m[0], m[1]);
      if (0 < t) for (p = this.rooms[r][t - 1]; 3 > q - (p.y + p.height); ) q++;
      if (0 < r) for (p = this.rooms[r - 1][t]; 3 > n - (p.x + p.width); ) n++;
      p = Math.round(ROT.RNG.getUniformInt(0, e - g) / 2);
      for (
        var u = Math.round(ROT.RNG.getUniformInt(0, f - h) / 2);
        n + p + g >= a;

      )
        p ? p-- : g--;
      for (; q + u + h >= b; ) u ? u-- : h--;
      n += p;
      q += u;
      this.rooms[r][t].x = n;
      this.rooms[r][t].y = q;
      this.rooms[r][t].width = g;
      this.rooms[r][t].height = h;
      for (p = n; p < n + g; p++)
        for (u = q; u < q + h; u++) this.map[p][u] = 0;
    }
};
ROT.Map.Rogue.prototype._getWallPosition = function (a, b) {
  var c, d, e;
  if (1 == b || 3 == b)
    (c = ROT.RNG.getUniformInt(a.x + 1, a.x + a.width - 2)),
      1 == b
        ? ((d = a.y - 2), (e = d + 1))
        : ((d = a.y + a.height + 1), (e = d - 1)),
      (this.map[c][e] = 0);
  else if (2 == b || 4 == b)
    (d = ROT.RNG.getUniformInt(a.y + 1, a.y + a.height - 2)),
      2 == b
        ? ((c = a.x + a.width + 1), (e = c - 1))
        : ((c = a.x - 2), (e = c + 1)),
      (this.map[e][d] = 0);
  return [c, d];
};
ROT.Map.Rogue.prototype._drawCorridore = function (a, b) {
  var c = b[0] - a[0],
    d = b[1] - a[1],
    e = a[0],
    f = a[1],
    g,
    h,
    l = [];
  h = Math.abs(c);
  var m = Math.abs(d);
  g = ROT.RNG.getUniform();
  var n = 1 - g,
    c = 0 < c ? 2 : 6,
    d = 0 < d ? 4 : 0;
  h < m
    ? ((g = Math.ceil(m * g)),
      l.push([d, g]),
      l.push([c, h]),
      (g = Math.floor(m * n)),
      l.push([d, g]))
    : ((g = Math.ceil(h * g)),
      l.push([c, g]),
      l.push([d, m]),
      (g = Math.floor(h * n)),
      l.push([c, g]));
  for (this.map[e][f] = 0; 0 < l.length; )
    for (h = l.pop(); 0 < h[1]; )
      (e += ROT.DIRS[8][h[0]][0]),
        (f += ROT.DIRS[8][h[0]][1]),
        (this.map[e][f] = 0),
        --h[1];
};
ROT.Map.Rogue.prototype._createCorridors = function () {
  for (
    var a = this._options.cellWidth,
      b = this._options.cellHeight,
      c,
      d,
      e,
      f,
      g = 0;
    g < a;
    g++
  )
    for (var h = 0; h < b; h++) {
      c = this.rooms[g][h];
      for (var l = 0; l < c.connections.length; l++)
        (d = c.connections[l]),
          (d = this.rooms[d[0]][d[1]]),
          d.cellx > c.cellx
            ? ((e = 2), (f = 4))
            : d.cellx < c.cellx
            ? ((e = 4), (f = 2))
            : d.celly > c.celly
            ? ((e = 3), (f = 1))
            : d.celly < c.celly && ((e = 1), (f = 3)),
          this._drawCorridore(
            this._getWallPosition(c, e),
            this._getWallPosition(d, f)
          );
    }
};
ROT.Map.Feature = function () {};
ROT.Map.Feature.prototype.isValid = function (a) {};
ROT.Map.Feature.prototype.create = function (a) {};
ROT.Map.Feature.prototype.debug = function () {};
ROT.Map.Feature.createRandomAt = function (a, b, c, d, e) {};
ROT.Map.Feature.Room = function (a, b, c, d, e, f) {
  this._x1 = a;
  this._y1 = b;
  this._x2 = c;
  this._y2 = d;
  this._doors = {};
  4 < arguments.length && this.addDoor(e, f);
};
ROT.Map.Feature.Room.extend(ROT.Map.Feature);
ROT.Map.Feature.Room.createRandomAt = function (a, b, c, d, e) {
  var f = e.roomWidth[0],
    g = e.roomWidth[1],
    h = ROT.RNG.getUniformInt(f, g),
    f = e.roomHeight[0],
    g = e.roomHeight[1];
  e = ROT.RNG.getUniformInt(f, g);
  if (1 == c)
    return (
      (c = b - Math.floor(ROT.RNG.getUniform() * e)),
      new this(a + 1, c, a + h, c + e - 1, a, b)
    );
  if (-1 == c)
    return (
      (c = b - Math.floor(ROT.RNG.getUniform() * e)),
      new this(a - h, c, a - 1, c + e - 1, a, b)
    );
  if (1 == d)
    return (
      (c = a - Math.floor(ROT.RNG.getUniform() * h)),
      new this(c, b + 1, c + h - 1, b + e, a, b)
    );
  if (-1 == d)
    return (
      (c = a - Math.floor(ROT.RNG.getUniform() * h)),
      new this(c, b - e, c + h - 1, b - 1, a, b)
    );
  throw Error("dx or dy must be 1 or -1");
};
ROT.Map.Feature.Room.createRandomCenter = function (a, b, c) {
  var d = c.roomWidth[0],
    e = c.roomWidth[1],
    f = ROT.RNG.getUniformInt(d, e),
    d = c.roomHeight[0],
    e = c.roomHeight[1];
  c = ROT.RNG.getUniformInt(d, e);
  a -= Math.floor(ROT.RNG.getUniform() * f);
  b -= Math.floor(ROT.RNG.getUniform() * c);
  return new this(a, b, a + f - 1, b + c - 1);
};
ROT.Map.Feature.Room.createRandom = function (a, b, c) {
  var d = c.roomWidth[0],
    e = c.roomWidth[1],
    f = ROT.RNG.getUniformInt(d, e),
    d = c.roomHeight[0],
    e = c.roomHeight[1];
  c = ROT.RNG.getUniformInt(d, e);
  a = a - f - 1;
  b = b - c - 1;
  a = 1 + Math.floor(ROT.RNG.getUniform() * a);
  b = 1 + Math.floor(ROT.RNG.getUniform() * b);
  return new this(a, b, a + f - 1, b + c - 1);
};
ROT.Map.Feature.Room.prototype.addDoor = function (a, b) {
  this._doors[a + "," + b] = 1;
  return this;
};
ROT.Map.Feature.Room.prototype.getDoors = function (a) {
  for (var b in this._doors) {
    var c = b.split(",");
    a(parseInt(c[0]), parseInt(c[1]));
  }
  return this;
};
ROT.Map.Feature.Room.prototype.clearDoors = function () {
  this._doors = {};
  return this;
};
ROT.Map.Feature.Room.prototype.addDoors = function (a) {
  for (
    var b = this._x1 - 1,
      c = this._x2 + 1,
      d = this._y1 - 1,
      e = this._y2 + 1,
      f = b;
    f <= c;
    f++
  )
    for (var g = d; g <= e; g++)
      if (f == b || f == c || g == d || g == e) a(f, g) || this.addDoor(f, g);
  return this;
};
ROT.Map.Feature.Room.prototype.debug = function () {
  console.log("room", this._x1, this._y1, this._x2, this._y2);
};
ROT.Map.Feature.Room.prototype.isValid = function (a, b) {
  for (
    var c = this._x1 - 1,
      d = this._x2 + 1,
      e = this._y1 - 1,
      f = this._y2 + 1,
      g = c;
    g <= d;
    g++
  )
    for (var h = e; h <= f; h++)
      if (g == c || g == d || h == e || h == f) {
        if (!a(g, h)) return !1;
      } else if (!b(g, h)) return !1;
  return !0;
};
ROT.Map.Feature.Room.prototype.create = function (a) {
  for (
    var b = this._x1 - 1,
      c = this._x2 + 1,
      d = this._y1 - 1,
      e = this._y2 + 1,
      f,
      g = b;
    g <= c;
    g++
  )
    for (var h = d; h <= e; h++)
      (f =
        g + "," + h in this._doors
          ? 2
          : g == b || g == c || h == d || h == e
          ? 1
          : 0),
        a(g, h, f);
};
ROT.Map.Feature.Room.prototype.getCenter = function () {
  return [
    Math.round((this._x1 + this._x2) / 2),
    Math.round((this._y1 + this._y2) / 2),
  ];
};
ROT.Map.Feature.Room.prototype.getLeft = function () {
  return this._x1;
};
ROT.Map.Feature.Room.prototype.getRight = function () {
  return this._x2;
};
ROT.Map.Feature.Room.prototype.getTop = function () {
  return this._y1;
};
ROT.Map.Feature.Room.prototype.getBottom = function () {
  return this._y2;
};
ROT.Map.Feature.Corridor = function (a, b, c, d) {
  this._startX = a;
  this._startY = b;
  this._endX = c;
  this._endY = d;
  this._endsWithAWall = !0;
};
ROT.Map.Feature.Corridor.extend(ROT.Map.Feature);
ROT.Map.Feature.Corridor.createRandomAt = function (a, b, c, d, e) {
  e = ROT.RNG.getUniformInt(e.corridorLength[0], e.corridorLength[1]);
  return new this(a, b, a + c * e, b + d * e);
};
ROT.Map.Feature.Corridor.prototype.debug = function () {
  console.log("corridor", this._startX, this._startY, this._endX, this._endY);
};
ROT.Map.Feature.Corridor.prototype.isValid = function (a, b) {
  var c = this._startX,
    d = this._startY,
    e = this._endX - c,
    f = this._endY - d,
    g = 1 + Math.max(Math.abs(e), Math.abs(f));
  e && (e /= Math.abs(e));
  f && (f /= Math.abs(f));
  for (var h = f, l = -e, m = !0, n = 0; n < g; n++) {
    var q = c + n * e,
      p = d + n * f;
    b(q, p) || (m = !1);
    a(q + h, p + l) || (m = !1);
    a(q - h, p - l) || (m = !1);
    if (!m) {
      g = n;
      this._endX = q - e;
      this._endY = p - f;
      break;
    }
  }
  if (0 == g || (1 == g && a(this._endX + e, this._endY + f))) return !1;
  c = !a(this._endX + e + h, this._endY + f + l);
  h = !a(this._endX + e - h, this._endY + f - l);
  this._endsWithAWall = a(this._endX + e, this._endY + f);
  return (c || h) && this._endsWithAWall ? !1 : !0;
};
ROT.Map.Feature.Corridor.prototype.create = function (a) {
  var b = this._startX,
    c = this._startY,
    d = this._endX - b,
    e = this._endY - c,
    f = 1 + Math.max(Math.abs(d), Math.abs(e));
  d && (d /= Math.abs(d));
  e && (e /= Math.abs(e));
  for (var g = 0; g < f; g++) a(b + g * d, c + g * e, 0);
  return !0;
};
ROT.Map.Feature.Corridor.prototype.createPriorityWalls = function (a) {
  if (this._endsWithAWall) {
    var b = this._endX - this._startX,
      c = this._endY - this._startY;
    b && (b /= Math.abs(b));
    c && (c /= Math.abs(c));
    var d = c,
      e = -b;
    a(this._endX + b, this._endY + c);
    a(this._endX + d, this._endY + e);
    a(this._endX - d, this._endY - e);
  }
};
ROT.Noise = function () {};
ROT.Noise.prototype.get = function (a, b) {};
ROT.Noise.Simplex = function (a) {
  ROT.Noise.call(this);
  this._F2 = 0.5 * (Math.sqrt(3) - 1);
  this._G2 = (3 - Math.sqrt(3)) / 6;
  this._gradients = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];
  var b = [];
  a = a || 256;
  for (var c = 0; c < a; c++) b.push(c);
  b = b.randomize();
  this._perms = [];
  this._indexes = [];
  for (c = 0; c < 2 * a; c++)
    this._perms.push(b[c % a]),
      this._indexes.push(this._perms[c] % this._gradients.length);
};
ROT.Noise.Simplex.extend(ROT.Noise);
ROT.Noise.Simplex.prototype.get = function (a, b) {
  var c = this._perms,
    d = this._indexes,
    e = c.length / 2,
    f = this._G2,
    g = 0,
    h = 0,
    l = 0,
    m,
    n = (a + b) * this._F2,
    q = Math.floor(a + n);
  m = Math.floor(b + n);
  var n = (q + m) * f,
    p = a - (q - n),
    r = b - (m - n),
    t,
    u;
  p > r ? ((t = 1), (u = 0)) : ((t = 0), (u = 1));
  var w = p - t + f,
    x = r - u + f,
    n = p - 1 + 2 * f,
    f = r - 1 + 2 * f,
    q = q.mod(e),
    e = m.mod(e),
    v = 0.5 - p * p - r * r;
  0 <= v &&
    ((v *= v),
    (m = d[q + c[e]]),
    (m = this._gradients[m]),
    (g = v * v * (m[0] * p + m[1] * r)));
  p = 0.5 - w * w - x * x;
  0 <= p &&
    ((p *= p),
    (m = d[q + t + c[e + u]]),
    (m = this._gradients[m]),
    (h = p * p * (m[0] * w + m[1] * x)));
  p = 0.5 - n * n - f * f;
  0 <= p &&
    ((p *= p),
    (m = d[q + 1 + c[e + 1]]),
    (m = this._gradients[m]),
    (l = p * p * (m[0] * n + m[1] * f)));
  return 70 * (g + h + l);
};
ROT.FOV = function (a, b) {
  this._lightPasses = a;
  this._options = { topology: 8 };
  for (var c in b) this._options[c] = b[c];
};
ROT.FOV.prototype.compute = function (a, b, c, d) {};
ROT.FOV.prototype._getCircle = function (a, b, c) {
  var d = [],
    e,
    f,
    g;
  switch (this._options.topology) {
    case 4:
      f = 1;
      g = [0, 1];
      e = [ROT.DIRS[8][7], ROT.DIRS[8][1], ROT.DIRS[8][3], ROT.DIRS[8][5]];
      break;
    case 6:
      e = ROT.DIRS[6];
      f = 1;
      g = [-1, 1];
      break;
    case 8:
      (e = ROT.DIRS[4]), (f = 2), (g = [-1, 1]);
  }
  a += g[0] * c;
  b += g[1] * c;
  for (g = 0; g < e.length; g++)
    for (var h = 0; h < c * f; h++)
      d.push([a, b]), (a += e[g][0]), (b += e[g][1]);
  return d;
};
ROT.FOV.DiscreteShadowcasting = function (a, b) {
  ROT.FOV.call(this, a, b);
};
ROT.FOV.DiscreteShadowcasting.extend(ROT.FOV);
ROT.FOV.DiscreteShadowcasting.prototype.compute = function (a, b, c, d) {
  d(a, b, 0, 1);
  if (this._lightPasses(a, b))
    for (var e = [], f, g, h, l, m, n = 1; n <= c; n++)
      for (
        var q = this._getCircle(a, b, n), p = 360 / q.length, r = 0;
        r < q.length;
        r++
      )
        if (
          ((h = q[r][0]),
          (l = q[r][1]),
          (f = p * (r - 0.5)),
          (g = f + p),
          (m = !this._lightPasses(h, l)),
          this._visibleCoords(Math.floor(f), Math.ceil(g), m, e) &&
            d(h, l, n, 1),
          2 == e.length && 0 == e[0] && 360 == e[1])
        )
          return;
};
ROT.FOV.DiscreteShadowcasting.prototype._visibleCoords = function (a, b, c, d) {
  if (0 > a) {
    var e = arguments.callee(0, b, c, d),
      f = arguments.callee(360 + a, 360, c, d);
    return e || f;
  }
  for (e = 0; e < d.length && d[e] < a; ) e++;
  if (e == d.length) return c && d.push(a, b), !0;
  f = 0;
  if (e % 2) {
    for (; e < d.length && d[e] < b; ) e++, f++;
    if (0 == f) return !1;
    c && (f % 2 ? d.splice(e - f, f, b) : d.splice(e - f, f));
  } else {
    for (; e < d.length && d[e] < b; ) e++, f++;
    if (a == d[e - f] && 1 == f) return !1;
    c && (f % 2 ? d.splice(e - f, f, a) : d.splice(e - f, f, a, b));
  }
  return !0;
};
ROT.FOV.PreciseShadowcasting = function (a, b) {
  ROT.FOV.call(this, a, b);
};
ROT.FOV.PreciseShadowcasting.extend(ROT.FOV);
ROT.FOV.PreciseShadowcasting.prototype.compute = function (a, b, c, d) {
  d(a, b, 0, 1);
  if (this._lightPasses(a, b))
    for (var e = [], f, g, h, l, m, n = 1; n <= c; n++)
      for (var q = this._getCircle(a, b, n), p = q.length, r = 0; r < p; r++)
        if (
          ((f = q[r][0]),
          (g = q[r][1]),
          (l = [r ? 2 * r - 1 : 2 * p - 1, 2 * p]),
          (m = [2 * r + 1, 2 * p]),
          (h = !this._lightPasses(f, g)),
          (h = this._checkVisibility(l, m, h, e)) && d(f, g, n, h),
          2 == e.length && 0 == e[0][0] && e[1][0] == e[1][1])
        )
          return;
};
ROT.FOV.PreciseShadowcasting.prototype._checkVisibility = function (
  a,
  b,
  c,
  d
) {
  if (a[0] > b[0])
    return (
      (a = this._checkVisibility(a, [a[1], a[1]], c, d)),
      (b = this._checkVisibility([0, 1], b, c, d)),
      (a + b) / 2
    );
  for (var e = 0, f = !1; e < d.length; ) {
    var g = d[e],
      g = g[0] * a[1] - a[0] * g[1];
    if (0 <= g) {
      0 != g || e % 2 || (f = !0);
      break;
    }
    e++;
  }
  for (var h = d.length, l = !1; h--; )
    if (((g = d[h]), (g = b[0] * g[1] - g[0] * b[1]), 0 <= g)) {
      0 == g && h % 2 && (l = !0);
      break;
    }
  g = !0;
  e == h && (f || l)
    ? (g = !1)
    : f && l && e + 1 == h && h % 2
    ? (g = !1)
    : e > h && e % 2 && (g = !1);
  if (!g) return 0;
  f = h - e + 1;
  if (f % 2)
    e % 2
      ? ((h = d[e]),
        (h = (b[0] * h[1] - h[0] * b[1]) / (h[1] * b[1])),
        c && d.splice(e, f, b))
      : ((h = d[h]),
        (h = (h[0] * a[1] - a[0] * h[1]) / (a[1] * h[1])),
        c && d.splice(e, f, a));
  else if (e % 2)
    (l = d[e]),
      (h = d[h]),
      (h = (h[0] * l[1] - l[0] * h[1]) / (l[1] * h[1])),
      c && d.splice(e, f);
  else return c && d.splice(e, f, a, b), 1;
  return h / ((b[0] * a[1] - a[0] * b[1]) / (a[1] * b[1]));
};
ROT.FOV.RecursiveShadowcasting = function (a, b) {
  ROT.FOV.call(this, a, b);
};
ROT.FOV.RecursiveShadowcasting.extend(ROT.FOV);
ROT.FOV.RecursiveShadowcasting.OCTANTS = [
  [-1, 0, 0, 1],
  [0, -1, 1, 0],
  [0, -1, -1, 0],
  [-1, 0, 0, -1],
  [1, 0, 0, -1],
  [0, 1, -1, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
];
ROT.FOV.RecursiveShadowcasting.prototype.compute = function (a, b, c, d) {
  d(a, b, 0, 1);
  for (var e = 0; e < ROT.FOV.RecursiveShadowcasting.OCTANTS.length; e++)
    this._renderOctant(a, b, ROT.FOV.RecursiveShadowcasting.OCTANTS[e], c, d);
};
ROT.FOV.RecursiveShadowcasting.prototype.compute180 = function (a, b, c, d, e) {
  e(a, b, 0, 1);
  var f = (d - 1 + 8) % 8,
    g = (d + 1 + 8) % 8;
  this._renderOctant(
    a,
    b,
    ROT.FOV.RecursiveShadowcasting.OCTANTS[(d - 2 + 8) % 8],
    c,
    e
  );
  this._renderOctant(a, b, ROT.FOV.RecursiveShadowcasting.OCTANTS[f], c, e);
  this._renderOctant(a, b, ROT.FOV.RecursiveShadowcasting.OCTANTS[d], c, e);
  this._renderOctant(a, b, ROT.FOV.RecursiveShadowcasting.OCTANTS[g], c, e);
};
ROT.FOV.RecursiveShadowcasting.prototype.compute90 = function (a, b, c, d, e) {
  e(a, b, 0, 1);
  var f = (d - 1 + 8) % 8;
  this._renderOctant(a, b, ROT.FOV.RecursiveShadowcasting.OCTANTS[d], c, e);
  this._renderOctant(a, b, ROT.FOV.RecursiveShadowcasting.OCTANTS[f], c, e);
};
ROT.FOV.RecursiveShadowcasting.prototype._renderOctant = function (
  a,
  b,
  c,
  d,
  e
) {
  this._castVisibility(a, b, 1, 1, 0, d + 1, c[0], c[1], c[2], c[3], e);
};
ROT.FOV.RecursiveShadowcasting.prototype._castVisibility = function (
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  l,
  m,
  n
) {
  if (!(d < e))
    for (; c <= f; c++) {
      for (var q = -c - 1, p = -c, r = !1, t = 0; 0 >= q; ) {
        var q = q + 1,
          u = a + q * g + p * h,
          w = b + q * l + p * m,
          x = (q - 0.5) / (p + 0.5),
          v = (q + 0.5) / (p - 0.5);
        if (!(v > d)) {
          if (x < e) break;
          q * q + p * p < f * f && n(u, w, c, 1);
          r
            ? this._lightPasses(u, w)
              ? ((r = !1), (d = t))
              : (t = v)
            : !this._lightPasses(u, w) &&
              c < f &&
              ((r = !0),
              this._castVisibility(a, b, c + 1, d, x, f, g, h, l, m, n),
              (t = v));
        }
      }
      if (r) break;
    }
};
ROT.Color = {
  fromString: function (a) {
    var b, c;
    if (a in this._cache) b = this._cache[a];
    else {
      if ("#" == a.charAt(0))
        if (
          ((b = a.match(/[0-9a-f]/gi).map(function (a) {
            return parseInt(a, 16);
          })),
          3 == b.length)
        )
          b = b.map(function (a) {
            return 17 * a;
          });
        else for (c = 0; 3 > c; c++) (b[c + 1] += 16 * b[c]), b.splice(c, 1);
      else
        b = (c = a.match(/rgb\(([0-9, ]+)\)/i))
          ? c[1].split(/\s*,\s*/).map(function (a) {
              return parseInt(a);
            })
          : [0, 0, 0];
      this._cache[a] = b;
    }
    return b.slice();
  },
  add: function (a, b) {
    for (var c = a.slice(), d = 0; 3 > d; d++)
      for (var e = 1; e < arguments.length; e++) c[d] += arguments[e][d];
    return c;
  },
  add_: function (a, b) {
    for (var c = 0; 3 > c; c++)
      for (var d = 1; d < arguments.length; d++) a[c] += arguments[d][c];
    return a;
  },
  multiply: function (a, b) {
    for (var c = a.slice(), d = 0; 3 > d; d++) {
      for (var e = 1; e < arguments.length; e++) c[d] *= arguments[e][d] / 255;
      c[d] = Math.round(c[d]);
    }
    return c;
  },
  multiply_: function (a, b) {
    for (var c = 0; 3 > c; c++) {
      for (var d = 1; d < arguments.length; d++) a[c] *= arguments[d][c] / 255;
      a[c] = Math.round(a[c]);
    }
    return a;
  },
  interpolate: function (a, b, c) {
    3 > arguments.length && (c = 0.5);
    for (var d = a.slice(), e = 0; 3 > e; e++)
      d[e] = Math.round(d[e] + c * (b[e] - a[e]));
    return d;
  },
  interpolateHSL: function (a, b, c) {
    3 > arguments.length && (c = 0.5);
    for (var d = this.rgb2hsl(a), e = this.rgb2hsl(b), f = 0; 3 > f; f++)
      d[f] += c * (e[f] - d[f]);
    return this.hsl2rgb(d);
  },
  randomize: function (a, b) {
    b instanceof Array || (b = Math.round(ROT.RNG.getNormal(0, b)));
    for (var c = a.slice(), d = 0; 3 > d; d++)
      c[d] += b instanceof Array ? Math.round(ROT.RNG.getNormal(0, b[d])) : b;
    return c;
  },
  rgb2hsl: function (a) {
    var b = a[0] / 255,
      c = a[1] / 255;
    a = a[2] / 255;
    var d = Math.max(b, c, a),
      e = Math.min(b, c, a),
      f,
      g = (d + e) / 2;
    if (d == e) f = e = 0;
    else {
      var h = d - e,
        e = 0.5 < g ? h / (2 - d - e) : h / (d + e);
      switch (d) {
        case b:
          f = (c - a) / h + (c < a ? 6 : 0);
          break;
        case c:
          f = (a - b) / h + 2;
          break;
        case a:
          f = (b - c) / h + 4;
      }
      f /= 6;
    }
    return [f, e, g];
  },
  hsl2rgb: function (a) {
    var b = a[2];
    if (0 == a[1]) return (b = Math.round(255 * b)), [b, b, b];
    var c = function (a, b, c) {
        0 > c && (c += 1);
        1 < c && --c;
        return c < 1 / 6
          ? a + 6 * (b - a) * c
          : 0.5 > c
          ? b
          : c < 2 / 3
          ? a + (b - a) * (2 / 3 - c) * 6
          : a;
      },
      d = a[1],
      d = 0.5 > b ? b * (1 + d) : b + d - b * d,
      e = 2 * b - d,
      b = c(e, d, a[0] + 1 / 3),
      f = c(e, d, a[0]);
    a = c(e, d, a[0] - 1 / 3);
    return [Math.round(255 * b), Math.round(255 * f), Math.round(255 * a)];
  },
  toRGB: function (a) {
    return (
      "rgb(" +
      this._clamp(a[0]) +
      "," +
      this._clamp(a[1]) +
      "," +
      this._clamp(a[2]) +
      ")"
    );
  },
  toHex: function (a) {
    for (var b = [], c = 0; 3 > c; c++)
      b.push(this._clamp(a[c]).toString(16).lpad("0", 2));
    return "#" + b.join("");
  },
  _clamp: function (a) {
    return 0 > a ? 0 : 255 < a ? 255 : a;
  },
  _cache: {
    black: [0, 0, 0],
    navy: [0, 0, 128],
    darkblue: [0, 0, 139],
    mediumblue: [0, 0, 205],
    blue: [0, 0, 255],
    darkgreen: [0, 100, 0],
    green: [0, 128, 0],
    teal: [0, 128, 128],
    darkcyan: [0, 139, 139],
    deepskyblue: [0, 191, 255],
    darkturquoise: [0, 206, 209],
    mediumspringgreen: [0, 250, 154],
    lime: [0, 255, 0],
    springgreen: [0, 255, 127],
    aqua: [0, 255, 255],
    cyan: [0, 255, 255],
    midnightblue: [25, 25, 112],
    dodgerblue: [30, 144, 255],
    forestgreen: [34, 139, 34],
    seagreen: [46, 139, 87],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    limegreen: [50, 205, 50],
    mediumseagreen: [60, 179, 113],
    turquoise: [64, 224, 208],
    royalblue: [65, 105, 225],
    steelblue: [70, 130, 180],
    darkslateblue: [72, 61, 139],
    mediumturquoise: [72, 209, 204],
    indigo: [75, 0, 130],
    darkolivegreen: [85, 107, 47],
    cadetblue: [95, 158, 160],
    cornflowerblue: [100, 149, 237],
    mediumaquamarine: [102, 205, 170],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    slateblue: [106, 90, 205],
    olivedrab: [107, 142, 35],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    mediumslateblue: [123, 104, 238],
    lawngreen: [124, 252, 0],
    chartreuse: [127, 255, 0],
    aquamarine: [127, 255, 212],
    maroon: [128, 0, 0],
    purple: [128, 0, 128],
    olive: [128, 128, 0],
    gray: [128, 128, 128],
    grey: [128, 128, 128],
    skyblue: [135, 206, 235],
    lightskyblue: [135, 206, 250],
    blueviolet: [138, 43, 226],
    darkred: [139, 0, 0],
    darkmagenta: [139, 0, 139],
    saddlebrown: [139, 69, 19],
    darkseagreen: [143, 188, 143],
    lightgreen: [144, 238, 144],
    mediumpurple: [147, 112, 216],
    darkviolet: [148, 0, 211],
    palegreen: [152, 251, 152],
    darkorchid: [153, 50, 204],
    yellowgreen: [154, 205, 50],
    sienna: [160, 82, 45],
    brown: [165, 42, 42],
    darkgray: [169, 169, 169],
    darkgrey: [169, 169, 169],
    lightblue: [173, 216, 230],
    greenyellow: [173, 255, 47],
    paleturquoise: [175, 238, 238],
    lightsteelblue: [176, 196, 222],
    powderblue: [176, 224, 230],
    firebrick: [178, 34, 34],
    darkgoldenrod: [184, 134, 11],
    mediumorchid: [186, 85, 211],
    rosybrown: [188, 143, 143],
    darkkhaki: [189, 183, 107],
    silver: [192, 192, 192],
    mediumvioletred: [199, 21, 133],
    indianred: [205, 92, 92],
    peru: [205, 133, 63],
    chocolate: [210, 105, 30],
    tan: [210, 180, 140],
    lightgray: [211, 211, 211],
    lightgrey: [211, 211, 211],
    palevioletred: [216, 112, 147],
    thistle: [216, 191, 216],
    orchid: [218, 112, 214],
    goldenrod: [218, 165, 32],
    crimson: [220, 20, 60],
    gainsboro: [220, 220, 220],
    plum: [221, 160, 221],
    burlywood: [222, 184, 135],
    lightcyan: [224, 255, 255],
    lavender: [230, 230, 250],
    darksalmon: [233, 150, 122],
    violet: [238, 130, 238],
    palegoldenrod: [238, 232, 170],
    lightcoral: [240, 128, 128],
    khaki: [240, 230, 140],
    aliceblue: [240, 248, 255],
    honeydew: [240, 255, 240],
    azure: [240, 255, 255],
    sandybrown: [244, 164, 96],
    wheat: [245, 222, 179],
    beige: [245, 245, 220],
    whitesmoke: [245, 245, 245],
    mintcream: [245, 255, 250],
    ghostwhite: [248, 248, 255],
    salmon: [250, 128, 114],
    antiquewhite: [250, 235, 215],
    linen: [250, 240, 230],
    lightgoldenrodyellow: [250, 250, 210],
    oldlace: [253, 245, 230],
    red: [255, 0, 0],
    fuchsia: [255, 0, 255],
    magenta: [255, 0, 255],
    deeppink: [255, 20, 147],
    orangered: [255, 69, 0],
    tomato: [255, 99, 71],
    hotpink: [255, 105, 180],
    coral: [255, 127, 80],
    darkorange: [255, 140, 0],
    lightsalmon: [255, 160, 122],
    orange: [255, 165, 0],
    lightpink: [255, 182, 193],
    pink: [255, 192, 203],
    gold: [255, 215, 0],
    peachpuff: [255, 218, 185],
    navajowhite: [255, 222, 173],
    moccasin: [255, 228, 181],
    bisque: [255, 228, 196],
    mistyrose: [255, 228, 225],
    blanchedalmond: [255, 235, 205],
    papayawhip: [255, 239, 213],
    lavenderblush: [255, 240, 245],
    seashell: [255, 245, 238],
    cornsilk: [255, 248, 220],
    lemonchiffon: [255, 250, 205],
    floralwhite: [255, 250, 240],
    snow: [255, 250, 250],
    yellow: [255, 255, 0],
    lightyellow: [255, 255, 224],
    ivory: [255, 255, 240],
    white: [255, 255, 255],
  },
};
ROT.Lighting = function (a, b) {
  this._reflectivityCallback = a;
  this._options = { passes: 1, emissionThreshold: 100, range: 10 };
  this._fov = null;
  this._lights = {};
  this._reflectivityCache = {};
  this._fovCache = {};
  this.setOptions(b);
};
ROT.Lighting.prototype.setOptions = function (a) {
  for (var b in a) this._options[b] = a[b];
  a && a.range && this.reset();
  return this;
};
ROT.Lighting.prototype.setFOV = function (a) {
  this._fov = a;
  this._fovCache = {};
  return this;
};
ROT.Lighting.prototype.setLight = function (a, b, c) {
  a = a + "," + b;
  c
    ? (this._lights[a] = "string" == typeof c ? ROT.Color.fromString(c) : c)
    : delete this._lights[a];
  return this;
};
ROT.Lighting.prototype.clearLights = function () {
  this._lights = {};
};
ROT.Lighting.prototype.reset = function () {
  this._reflectivityCache = {};
  this._fovCache = {};
  return this;
};
ROT.Lighting.prototype.compute = function (a) {
  var b = {},
    c = {},
    d = {},
    e;
  for (e in this._lights) {
    var f = this._lights[e];
    c[e] = [0, 0, 0];
    ROT.Color.add_(c[e], f);
  }
  for (e = 0; e < this._options.passes; e++)
    this._emitLight(c, d, b),
      e + 1 != this._options.passes && (c = this._computeEmitters(d, b));
  for (var g in d)
    (c = g.split(",")),
      (b = parseInt(c[0])),
      (c = parseInt(c[1])),
      a(b, c, d[g]);
  return this;
};
ROT.Lighting.prototype._emitLight = function (a, b, c) {
  for (var d in a) {
    var e = d.split(","),
      f = parseInt(e[0]),
      e = parseInt(e[1]);
    this._emitLightFromCell(f, e, a[d], b);
    c[d] = 1;
  }
  return this;
};
ROT.Lighting.prototype._computeEmitters = function (a, b) {
  var c = {},
    d;
  for (d in a)
    if (!(d in b)) {
      var e = a[d];
      if (d in this._reflectivityCache) var f = this._reflectivityCache[d];
      else {
        var g = d.split(","),
          f = parseInt(g[0]),
          g = parseInt(g[1]),
          f = this._reflectivityCallback(f, g);
        this._reflectivityCache[d] = f;
      }
      if (0 != f) {
        for (var g = [], h = 0, l = 0; 3 > l; l++) {
          var m = Math.round(e[l] * f);
          g[l] = m;
          h += m;
        }
        h > this._options.emissionThreshold && (c[d] = g);
      }
    }
  return c;
};
ROT.Lighting.prototype._emitLightFromCell = function (a, b, c, d) {
  var e = a + "," + b;
  a = e in this._fovCache ? this._fovCache[e] : this._updateFOV(a, b);
  for (var f in a) {
    b = a[f];
    f in d ? (e = d[f]) : ((e = [0, 0, 0]), (d[f] = e));
    for (var g = 0; 3 > g; g++) e[g] += Math.round(c[g] * b);
  }
  return this;
};
ROT.Lighting.prototype._updateFOV = function (a, b) {
  var c = {};
  this._fovCache[a + "," + b] = c;
  var d = this._options.range;
  this._fov.compute(
    a,
    b,
    d,
    function (a, b, g, h) {
      g = h * (1 - g / d);
      0 != g && (c[a + "," + b] = g);
    }.bind(this)
  );
  return c;
};
ROT.Path = function (a, b, c, d) {
  this._toX = a;
  this._toY = b;
  this._fromY = this._fromX = null;
  this._passableCallback = c;
  this._options = { topology: 8 };
  for (var e in d) this._options[e] = d[e];
  this._dirs = ROT.DIRS[this._options.topology];
  8 == this._options.topology &&
    (this._dirs = [
      this._dirs[0],
      this._dirs[2],
      this._dirs[4],
      this._dirs[6],
      this._dirs[1],
      this._dirs[3],
      this._dirs[5],
      this._dirs[7],
    ]);
};
ROT.Path.prototype.compute = function (a, b, c) {};
ROT.Path.prototype._getNeighbors = function (a, b) {
  for (var c = [], d = 0; d < this._dirs.length; d++) {
    var e = this._dirs[d],
      f = a + e[0],
      e = b + e[1];
    this._passableCallback(f, e) && c.push([f, e]);
  }
  return c;
};
ROT.Path.Dijkstra = function (a, b, c, d) {
  ROT.Path.call(this, a, b, c, d);
  this._computed = {};
  this._todo = [];
  this._add(a, b, null);
};
ROT.Path.Dijkstra.extend(ROT.Path);
ROT.Path.Dijkstra.prototype.compute = function (a, b, c) {
  var d = a + "," + b;
  d in this._computed || this._compute(a, b);
  if (d in this._computed)
    for (a = this._computed[d]; a; ) c(a.x, a.y), (a = a.prev);
};
ROT.Path.Dijkstra.prototype._compute = function (a, b) {
  for (; this._todo.length; ) {
    var c = this._todo.shift();
    if (c.x == a && c.y == b) break;
    for (var d = this._getNeighbors(c.x, c.y), e = 0; e < d.length; e++) {
      var f = d[e],
        g = f[0],
        f = f[1];
      g + "," + f in this._computed || this._add(g, f, c);
    }
  }
};
ROT.Path.Dijkstra.prototype._add = function (a, b, c) {
  c = { x: a, y: b, prev: c };
  this._computed[a + "," + b] = c;
  this._todo.push(c);
};
ROT.Path.AStar = function (a, b, c, d) {
  ROT.Path.call(this, a, b, c, d);
  this._todo = [];
  this._done = {};
  this._fromY = this._fromX = null;
};
ROT.Path.AStar.extend(ROT.Path);
ROT.Path.AStar.prototype.compute = function (a, b, c) {
  this._todo = [];
  this._done = {};
  this._fromX = a;
  this._fromY = b;
  for (this._add(this._toX, this._toY, null); this._todo.length; ) {
    var d = this._todo.shift();
    if (d.x == a && d.y == b) break;
    for (var e = this._getNeighbors(d.x, d.y), f = 0; f < e.length; f++) {
      var g = e[f],
        h = g[0],
        g = g[1];
      h + "," + g in this._done || this._add(h, g, d);
    }
  }
  if ((d = this._done[a + "," + b])) for (; d; ) c(d.x, d.y), (d = d.prev);
};
ROT.Path.AStar.prototype._add = function (a, b, c) {
  var d = this._distance(a, b);
  c = { x: a, y: b, prev: c, g: c ? c.g + 1 : 0, h: d };
  this._done[a + "," + b] = c;
  a = c.g + c.h;
  for (b = 0; b < this._todo.length; b++) {
    var e = this._todo[b],
      f = e.g + e.h;
    if (a < f || (a == f && d < e.h)) {
      this._todo.splice(b, 0, c);
      return;
    }
  }
  this._todo.push(c);
};
ROT.Path.AStar.prototype._distance = function (a, b) {
  switch (this._options.topology) {
    case 4:
      return Math.abs(a - this._fromX) + Math.abs(b - this._fromY);
    case 6:
      var c = Math.abs(b - this._fromY);
      return c + Math.max(0, (Math.abs(a - this._fromX) - c) / 2);
    case 8:
      return Math.max(Math.abs(a - this._fromX), Math.abs(b - this._fromY));
  }
  throw Error("Illegal topology");
};

export default ROT;
