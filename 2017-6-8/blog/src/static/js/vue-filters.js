Vue.filter('date', function(time) {
  var oDate = new Date(time * 1000)
  return oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate()
})