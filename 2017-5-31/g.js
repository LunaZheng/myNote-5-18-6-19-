if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(cb) {
    for (var i = 0; i < this.length; i++) {
      cb(this[i], i, this)
    }
  }
}

if (!Array.prototype.map) {
  Array.prototype.map = function(cb) {
    var result = []
    for (var i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this))
    }
    return result
  }
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function(cb) {
    var result = []
    for (var i = 0; i < this.length; i++) {
      var _result = cb(this[i], i, this)
      if (_result) {
        result.push(this[i])
      }
    }
    return result
  }
}

if (!Array.prototype.some) {
  Array.prototype.some = function(cb) {
    for (var i = 0; i < this.length; i++) {
      var result = cb(this[i], i, this)
      if (result) {
        return true
      }
    }
    return false
  }
}

if (!Array.prototype.every) {
  Array.prototype.every = function(cb) {
    for (var i = 0; i < this.length; i++) {
      var result = cb(this[i], i, this)
      if (!result) {
        return false
      }
    }
    return true
  }
}

if (!Array.prototype.fill) {
  Array.prototype.fill = function(val, start, end) {
    var len = this.length
    start = start === undefined ? 0 : start
    end = end === undefined ? this.length : end
    if (start) {
      start = (start % len + len) % len
    }
    if (end) {
      end = (end % len + len) % len
    }
    for (var i = start; i < end; i++) {
      this[i] = val
    }
    return this
  }
}

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(cb) {
    var item = this[0]
    for (var i = 1; i < this.length; i++) {
      item = cb(item, this[i], this)
    }
    return item
  }
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
      if (val === this[i]) {
        return i
      }
    }
    return -1
  }
}

if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(val) {
    for (var i = this.length - 1; i > -1; i--) {
      if (val === this[i]) {
        return i
      }
    }
    return -1
  }
}
