Array.prototype.remove = function(item) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return this.splice(i, 1)[0]
    }
  }
}

function fillLen(n, len) {
  n = n.toString()
  len = len || 2
  while (n.length < len) {
    n = '0' + n
  }
  return n
}

function rand(m, n) {
  m = ~~m
  n = ~~n
  return Math.floor(Math.random() * (n - m + 1) + m)
}

function d2a(deg) {
  return deg / 180 * Math.PI
}

function a2d(angle) {
  return angle * 180 / Math.PI
}

function getAng(x1, y1, x2, y2) {
  return d2a(a2d(Math.atan2(y2 - y1, x2 - x1)) + 90)
}