function ready(cb) {
  let count = 0
  let total = 0

  loop(resource)
  function loop(o) {
    if (o instanceof Array) {
      o.forEach((item, idx) => {
        total++
        if (item.frameAlive) {
          item.disAlive = item.frameAlive[1] - item.frameAlive[0] + 1
        }
        if (item.frameDie) {
          item.disDie = item.frameDie[1] - item.frameDie[0] + 1
        }
        item.circleY = item.circleY || 1
        item.circleLen = item.circleLen || 1
        item.maxFrame = item.maxFrame || 1
        item.width = item.w
        item.height = item.h / item.maxFrame
        const oImg = new Image()
        oImg.onload = () => {
          count++
          item.oImg = oImg
          if (count === total) {
            cb && cb()
          }
        }
        oImg.src = item.src
      })
    } else {
      for (const key in o) {
        loop(o[key])
      }
    }
  }
}

ready(() => {
  function loop() {
    requestAnimationFrame(() => {
      render()
      loop()
    })
  }
  loop()


  {
    // 创建炮台
    const bottom = new Bottom()
    const bottom2 = new Bottom().extend({
      scaleX: -1
    })

    // 创建大炮
    let len = resource.cannon.length
    new Array(0 || len * 3).fill().map((_, idx) => {
      new Cannon(idx % len)
      // new Cannon(0)
    })
    conf.resize()
  }


  function shoot(e) {
    e.preventDefault && e.preventDefault()
    const isPC = (e.type || '').indexOf('touch') === -1
    const clientX = isPC ? e.clientX : e.targetTouches[0].clientX
    const clientY = isPC ? e.clientY : e.targetTouches[0].clientY
    const s = conf.scene
    s.cannon.forEach((cannon) => {
      cannon.shoot(clientX, clientY)
    })
    setCannonRotate(e)
    render({
      clientX, clientY
    })
  }
  
  function setCannonRotate(e) {
    e.preventDefault && e.preventDefault()
    const isPC = (e.type || '').indexOf('touch') === -1
    const clientX = isPC ? e.clientX : e.targetTouches[0].clientX
    const clientY = isPC ? e.clientY : e.targetTouches[0].clientY
    conf.x = clientX - conf.el.offsetLeft
    conf.y = clientY - conf.el.offsetTop
    conf.scene.cannon.forEach((cannon) => {
      cannon.setRotate()
    })
  }

  conf.el.addEventListener('mousedown', shoot, false)
  conf.el.addEventListener('touchstart', shoot, false)

  conf.el.addEventListener('mousemove', setCannonRotate, false)
  conf.el.addEventListener('touchmove', setCannonRotate, false)

  function render(e) {
    const s = conf.scene
    const gd = conf.gd

    conf.gd.clearRect(0, 0, conf.el.width, conf.el.height)


    // 场景物体绘制
    for (const key in s) {
      for (let i = 0; i < s[key].length; i++) {
        let o = s[key][i]
        if (o.nextFrame()) {
          o.draw()
        } else {
          i--
        }
      }
    }

    // 绘制金币数量
    const dh = document.documentElement.clientHeight
    fillLen(conf.score, 11).split('').forEach((n, idx) => {
      const _r = resource.numberBlack[n]
      // console.log(JSON.stringify())
      gd.drawImage(
        _r.oImg,
        0, _r.y, 20, 24,
        idx * 23.2 + 20, dh - 26, 20, 24
      )
    })

    conf.generateFish()
  }
})
