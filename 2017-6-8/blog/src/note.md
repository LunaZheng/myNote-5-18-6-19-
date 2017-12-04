mousedown + mouseup = click
touchstart + touchend = click // 300ms 延迟


$('div').tap(function() {
  
})

$('div').on('touchstart', function() {
  var isMoved = false
  $(this).on('touchmove', function() {
    isMove = true
  })
  setTimeout(function() {
    if (!isMoved) {
      alert('点击')
    }
  }, 100)
})