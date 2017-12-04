var jo = {
	json2URL: function(json) {
		var arr = []
		for (var key in json) {
			arr.push(key + '=' + json[key])
		}
		return arr.join('&')
	},
	router: function(key, val, correct) {
		if (arguments.length == 1) {
			if (typeof key == 'object') {
				for (var i in key) {
					jo.router[i] = key[i]
				}
			} else {
				return jo.router[key] || ''
			}
		} else if (arguments.length == 2) {
			jo.router[key] = val
		}

		location.hash = jo.json2URL(jo.router)
	},
	correct: function(arr, cur) {
		return arr.some(function(v, i) {
			return v == cur
		}) ? cur : arr[0]
	},
	rand: function(m, n) {
		return Math.round(Math.random() * (n - m) + m)
	}
}

try {
	decodeURI(location.hash.substring(1)).split('&').forEach(function(item, idx) {
		if (!item) {
			return
		}
		var tmp = item.split('=')
		jo.router[tmp[0]] = tmp[1]
	})
} catch(e) {
	alert('hash 解析失败' + location.hash)
}
/*
$('.tab-title').each(function(idx) {
	var tabCon = $('.tab-con').eq(idx)
	$(this).children().on('click', function() {
		$(this).addClass('on').siblings().removeClass('on')
		tabCon.children().hide().eq($(this).index()).show()
	})
})
*/