var gly = {
  rand(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m)
  },
  d2a(deg) {
    return deg * Math.PI / 180
  },
  randColor(a) {
    var o = {
      r: gly.rand(0, 255),
      g: gly.rand(0, 255),
      b: gly.rand(0, 255),
      a: a === undefined ? 1 : a,
    }
    o.toString = function() {
      return 'rgba(' + o.r + ', ' + o.g + ', ' + o.b + ', ' + o.a + ')'
    }
    return o
  },
  star(gd, cx, cy, R, r, len, iRotate) {
    r = r || R / 2
    len = len || 5
    iRotate = iRotate || 0
    iRotate %= 360

    var deg = 360 / len

    gd.beginPath()

    for (var i = 0; i < len; i++) {
      var angle = gly.d2a(i * deg - 90 + iRotate)
      var x = Math.cos(angle) * R + cx
      var y = Math.sin(angle) * R + cy

      var _angle = gly.d2a(i * deg + deg / 2 - 90 + iRotate)
      var _x = Math.cos(_angle) * r + cx
      var _y = Math.sin(_angle) * r + cy

      gd.lineTo(x, y)
      gd.lineTo(_x, _y)
    }

    gd.closePath()
  },
  fillStar() {
    this.star.apply(null, arguments)
    gd.fill()
  }
}