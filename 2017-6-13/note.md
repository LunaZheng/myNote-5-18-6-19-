<script src="http://api.map.baidu.com/api?v=1.3"></script>

point = new BMap.Point(pos.coords.longitude, pos.coords.latitude); //设置一个中心点
map.centerAndZoom(point, 15); //缩放
map.enableScrollWheelZoom();  // 开启滚动和鼠标滚轮缩放
var marker = new BMap.Marker(point); // 设置标注
map.addOverlay(marker);

var text = document.getElementById('text');
var form = document.getElementById('form')
form.onsubmit = function(e) {
  e.preventDefault()
  var local = new BMap.LocalSearch(map, {
    renderOptions: {
      map: map
    }
  });
  local.searchNearby(text.value, point);
}