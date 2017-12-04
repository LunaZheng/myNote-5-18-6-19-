const ROOT_PATH = location.pathname.substring(0, location.pathname.indexOf('/test-blog/') + 10) + '/'
const FILE_NAME = location.pathname.substring(location.pathname.lastIndexOf('/') + 1) || 'index.html'

var g = {
  interfaceURL: 'http://localhost/class/shangraoshifan/blog/db-admin/php/exec.php',
  fillLen: function(n, len) { //---------????????
    n = n.toString()
    len = len || 2
    while (n.length < len) {
      n = '0' + n
    }
    return n
  },
  err: function(data, cb) {
    if(typeof data == 'string') {
      try {
        data = JSON.parse(data)
      } catch(e) {
        console.log('g.err: 数据解析失败:' + data) 
        data = {}
      }
    }
  }
}