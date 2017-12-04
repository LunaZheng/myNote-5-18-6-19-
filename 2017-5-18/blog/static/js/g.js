const ROOT_PATH = location.pathname.substring(0, location.pathname.indexOf('/blog/') + 5) + '/'
const FILE_NAME = location.pathname.substring(location.pathname.lastIndexOf('/') + 1) || 'index.html'

var g = {
  interfaceURL: 'http://localhost/class/shangraoshifan/blog/db-admin/php/exec.php',
  fillLen: function(n, len) {
    n = n.toString()
    len = len || 2
    while (n.length < len) {
      n = '0' + n
    }
    return n
  },
  err: function(data, cb) {
    if (typeof data == 'string') {
      try {
        data = JSON.parse(data)
      } catch(e) {
        console.log('g.err: 数据解析失败：' + data)
        data = {}
      }
    }
    switch ((data.code || '').toString()) {
      case '1':
        console.log(data.msg)
        break
      case '2':
        alert(data.msg)
        break
      case '2000':
        if (FILE_NAME == 'login.html') {
          console.log('don\'t locate')
          return
        }
        localStorage.urlFrom = window.top.location.href
        window.top.location.href = ROOT_PATH + 'login.html'
        break
      default:
        // 一切正常
        cb && cb(data)
        break
    }
  },
  logout() {
    $.get(ROOT_PATH + 'php/user.php', {
      a: 'logout'
    }, g.err)
  },
  getExtend: {},
  get(url, data, cb, dataType) {
    for (var key in g.getExtend) {
      data[key] = g.getExtend[key]
    }
    $.get(url, data, function(data) {
      g.err(data, cb)
    }, dataType)
  },
  post(url, data, cb, dataType) {
    for (var key in g.getExtend) {
      data[key] = g.getExtend[key]
    }
    $.post(url, data, cb, dataType)
  }
}
