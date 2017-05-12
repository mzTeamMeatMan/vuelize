/**
 * 处理色值的正则
 */
/* eslint-disable max-len, comma-spacing, indent*/
const reHex3 = /^#([0-9a-f]{3})$/;
const reHex6 = /^#([0-9a-f]{6})$/;
const reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
const reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
const reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
const reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
const reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
const reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
/* eslint-enable */
/**
 * 对应名称的色值
 * @type {Object}
 */
const named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

class Color {
  /**
   * 将色值字符串转换成{r, g, b, opacity}格式
   * @param  {[String]} colorValue [#112233]
   * @return {[Object]}            [Rgb {r: 0, g: 0, b: 0, opacity: 1}]
   */
  format(colorValue) {
    let temp;
    let result;
    //  先将色值去除空格且统一小写
    const colorString = (`${colorValue}`).trim().toLowerCase();
    if (!!reHex3.exec(colorString)) {
      //  如果色值是三位: #123
      temp = parseInt(reHex3.exec(colorString)[1], 16);
      result = new Rgb((temp >> 8 & 0xf) |
        (temp >> 4 & 0x0f0), (temp >> 4 & 0xf) |
        (temp & 0xf0), ((temp & 0xf) << 4) |
        (temp & 0xf), 1);
    } else if (!!reHex6.exec(colorString)) {
      //  如果色值是六位位: #112233
      temp = parseInt(reHex6.exec(colorString)[1], 16);
      result = this.rgbn(temp);
    } else if (!!reRgbInteger.exec(colorString)) {
      temp = reRgbInteger.exec(colorString);
      result = new Rgb(temp[1], temp[2], temp[3], 1);
    } else if (reRgbPercent.exec(colorString)) {
      temp = reRgbPercent.exec(colorString);
      const r = 255 / 100;
      result = new Rgb(temp[1] * r, temp[2] * r, temp[3] * r, 1);
    } else if (reRgbaInteger.exec(colorString)) {
      temp = reRgbaInteger.exec(colorString);
      result = this.rgba(temp[1], temp[2], temp[3], temp[4]);
    } else if (reRgbaPercent.exec(colorString)) {
      temp = reRgbaPercent.exec(colorString);
      const r = 255 / 100;
      result = this.rgba(temp[1] * r, temp[2] * r, temp[3] * r, temp[4]);
    } else if (reHslPercent.exec(colorString)) {
      temp = reHslPercent.exec(colorString);
      result = this.hsla(temp[1], temp[2] / 100, temp[3] / 100, 1);
    } else if (reHslaPercent.exec(colorString)) {
      temp = reHslaPercent.exec(colorString);
      result = this.hsla(temp[1], temp[2] / 100, temp[3] / 100, temp[4]);
    } else if (named.hasOwnProperty(colorString)) {
      result = this.rgbn(named[colorString]);
    } else if (colorString === 'transparent') {
      result = new Rgb(NaN, NaN, NaN, 0);
    } else {
      result = undefined;
      throw new Error('Invalid color format.');
    }
    return result;
  }
  /**
   * 将 16进制的色值号码转换成 Rgb 类型的 色值
   * @param  {[type]} n [description]
   * @return {[type]}   [description]
   */
  rgbn(colorNumber) {
    return new Rgb(colorNumber >> 16 & 0xff, colorNumber >> 8 & 0xff, colorNumber & 0xff, 1);
  }
  rgba(r, g, b, opacity) {
    if (parseFloat(opacity, 10) <= 0) {
      return new Rgb(NaN, NaN, NaN, opacity);
    }
    return new Rgb(r, g, b, opacity);
  }
  hsla(r, g, b, opacity) {
    let result;
    if (parseFloat(opacity, 10) <= 0) {
      result = new Hsl(NaN, NaN, NaN, opacity).rgb();
    } else if (b <= 0 || b >= 1) {
      result = new Hsl(NaN, NaN, b, opacity).rgb();
    } else if (g <= 0) {
      result = new Hsl(NaN, g, b, opacity).rgb();
    } else {
      result = new Hsl(r, g, b, opacity).rgb();
    }
    return result;
  }
}

class Rgb {
  constructor(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  /**
   * 更加明亮的色值计算
   */
  brighter(value = 0) {
    return new Rgb(
      this.r + (255 - this.r) * value,
      this.g + (255 - this.g) * value,
      this.b + (255 - this.b) * value,
      this.opacity
    );
  }
  /**
   * 更加暗的色值计算
   * @param  {[type]} k [description]
   * @return {[type]}   [description]
   */
  darker(value = 0) {
    return new Rgb(this.r - (
      this.r - 0) * value,
      this.g - (this.g - 0) * value,
      this.b - (this.b - 0) * value,
      this.opacity
    );
  }
  /**
   * 将初始化的色值转换回 String
   * @return {[type]} [description]
   */
  toString() {
    const value = isNaN(this.opacity) ? 1 : Math.max(0, Math.min(this.opacity, 1));
    return value === 1 ?
      `rgb(${this.check(this.r)},${this.check(this.g)},${this.check(this.b)})` :
      `rgba(${this.check(this.r)},${this.check(this.g)},${this.check(this.b)},${value})`;
  }
  /**
   * 检测
   * @param  {[type]} val [description]
   * @return {[type]}     [description]
   */
  check(val) {
    return Math.max(0, Math.min(255, Math.round(val) || 0));
  }
}

class Hsl {
  constructor(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  rgb() {
    const r = this.r % 360 + (this.r < 0) * 360;
    const g = isNaN(r) || isNaN(this.g) ? 0 : this.g;
    const b = this.b;
    const m2 = b + (b < 0.5 ? b : 1 - b) * g;
    const m1 = 2 * b - m2;
    return new Rgb(
      this.hsl2rgb(r >= 240 ? r - 240 : r + 120, m1, m2),
      this.hsl2rgb(r, m1, m2),
      this.hsl2rgb(r < 120 ? r + 240 : r - 120, m1, m2),
      this.opacity
    );
  }
  hsl2rgb(h, m1, m2) {
    let num;
    if (h < 60) {
      num = m1 + (m2 - m1) * h / 60;
    } else if (h < 180) {
      num = m2;
    } else if (h < 240) {
      num = m1 + (m2 - m1) * (240 - h) / 60;
    } else {
      num = m1;
    }
    return num * 255;
  }
}

module.exports = () => {
  return new Color();
};