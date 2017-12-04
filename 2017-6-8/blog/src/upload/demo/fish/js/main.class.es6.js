const conf = {
  x: 0,
  y: 0,
  dw: 0,
  dh: 0,
  el: document.getElementById('c'),
  score: 0,
  maxFish: 0,
  isDebug: 0,          // debug 模式
  isShowBlood: 0,      // 是否展示血条
  sceneSpeed: 1,       // 场景速度
  scene: {
    vortex: [],        // 旋涡
    fish: [],          // 普通鱼
    net: [],           // 渔网
    corn: [],          // 金币
    bullet: [],        // 子弹 加减 渔网 
    bottom: [],        // 底座
    cannon: [],        // 大炮
  },
  gailv: resource.fish.map(function(v, i) {
    return parseInt(parseInt(1 / v.fullBlood * 10000) / 4)
  }),
  range: 0,
  generateFish() {
    const dw = window.innerWidth
    const dh = window.innerHeight
    const s = conf.scene

    if (s.fish.length < conf.maxFish) {
      let type = 0
      let rnd = rand(0, conf.range)
      let count = 0
      let i = 0
      while (conf.gailv[i]) {
        count += conf.gailv[i]
        if (count > rnd) {
          type = i
          break
        }
        i++
      }

      const fish = new Fish(type)
      const d = fish.d
      const r = d.r
      const out = Math.max(r.width, r.height)
      const iMax = Math.max(r.width, r.height)
      const edgeL = -iMax / 2
      const edgeT = -iMax / 2
      const edgeR = dw + iMax / 2
      let l = 0
      let t = 0
      switch (rand(1, 3)) {
        case 1: // 上
          l = rand(-iMax / 2, dw + iMax / 2)
          t = rand(-iMax, -iMax / 2)
          break
        case 2: // 左
          l = rand(-iMax, -iMax / 2)
          t = rand(-iMax / 2 + dh + iMax / 2)
          break
        case 3: // 右
          l = rand(iMax / 2, iMax) + dw
          t = rand(-iMax / 2 + dh + iMax / 2)
          break
      }
      fish.extend({
        left: l,
        top: t,
      }).setRandSpeed()
    }
  },
  resize(e) {
    const dw = window.innerWidth
    const dh = window.innerHeight
    conf.el.width = dw
    conf.el.height = dh
    conf.x = dw / 2
    conf.y = dh / 2

    let per = 80
    conf.maxFish = parseInt(dw / per) * parseInt(dh / per)

    conf.scene.bottom.forEach((bottom, idx) => {
      const d = bottom.d
      switch (idx) {
        case 0:
          d.left = bottom.d.r.width / 2
          d.top = dh - bottom.d.r.height / 2
          break
        case 1:
          d.left = d.r.width + d.r.width / 2
          d.top = dh - d.r.height / 2
          break
      }
    })

    // 排序大炮
    const cannons = conf.scene.cannon
    let iWidth = dw - 500
    let cx = iWidth / 2
    let perWidth = iWidth / cannons.length
    perWidth > 50 && (perWidth = 50)
    const iMarginLeft = perWidth * cannons.length / 2
    cannons.forEach((cannon, idx) => {
      const d = cannon.d
      d.left = cx + perWidth * idx - iMarginLeft + 400
      d.top = dh - 40
    })
  },
}

conf.gd = conf.el.getContext('2d')
conf.range = conf.gailv.reduce((total, n) => {
  return total + n
})
conf.resize()
window.addEventListener('resize', conf.resize, false)

console.log(conf.gailv)

class Base {
  constructor(opt) {
    const d = {
      name: 'base',
      type: -1,
      left: 0,
      top: 0,
      rotate: 0,
      scaleX: 1,
      scaleY: 1,
      curFrame: 0,
      _curFrame: 0,
      collCircles: [],
      fric: 10,
      v: 0,
      vx: 0,
      vy: 0,
    }
    this.d = d
    this.extend(opt)
    const r = resource[d.name][d.type]
    if (!r) {
      throw new Error('不支持的 ' + d.name + ' 类型：' + d.type)
    }
    d.r = r
    conf.scene[d.name].push(this)
  }
  extend(opt = {}) {
    const d = this.d
    for (const key in opt) {
      d[key] = opt[key]
    }
    return this
  }
  nextFrame() {
    const d = this.d
    const r = d.r
    const v = d.v || 1
    if (d.curFrame > -1) { // 播放关键帧
      d._curFrame++
      const iNext = Math.ceil(d.curFrame * d.fric / v)
      /*if (d.name === 'fish' && d.blood <= 0) {
        console.log(d.curFrame)
      }*/
      if (d._curFrame > iNext) {
        d.curFrame++
        this.onnextframe && this.onnextframe()
      }
    }

    { // 处理碰撞区
      const gd = conf.gd
      const perR = r.w / (r.circleLen + 1)
      const halfLen = r.circleLen / 2
      d.collCircles = []
      for (let i = 0; i < r.circleLen; i++) {
        const c = (i - halfLen + .5) * perR
        const x = Math.cos(d.rotate) * c + d.left
        const y = Math.sin(d.rotate) * c + d.top/* + r.circleY*/
        const radius = perR * (i + r.circleLen + 1) / (r.circleLen * 2)
        d.collCircles.push({
          x, y, radius
        })
      }
    }
    d.left += d.vx
    d.top += d.vy
    return this
  }
  getCurFrame() {
    const d = this.d
    const r = d.r
    return (d.curFrame < 0 ? 0 : d.curFrame) % r.maxFrame
  }
  draw() {
    const d = this.d
    const r = d.r
    const gd = conf.gd
    let y = 0
    if (r.maxFrame === 1) {
      y = r.y
    } else {
      y = r.height * this.getCurFrame()
    }

    gd.save()
    gd.translate(d.left, d.top)
    gd.rotate(d.rotate)
    gd.scale(d.scaleX, d.scaleY)
    gd.drawImage(
      r.oImg,
      r.x, y, r.width, r.height,
      -r.width / 2, -r.height / 2, r.width, r.height
    )

    // 画血条
    if ((d.type > 5 && d.name === 'fish') || conf.isShowBlood && 'blood' in d) {
      const blood = d.blood < 0 ? 0 : d.blood
      const x = r.width / 2 + 2
      const y = -r.height / 4 + r.bloodBarY
      const h = r.height / 2

      gd.fillStyle = 'rgba(0,0,0,.2)'
      gd.fillRect(x, y, 2, h)
      gd.fillStyle = 'rgba(255,0,0,.6)'
      gd.fillRect(x, y, 2, h * blood / r.fullBlood)
    }
    gd.restore()

    // 重要的调试代码
    if (conf.isDebug) {

      gd.save()
      gd.translate(d.left, d.top)
      gd.rotate(d.rotate)
      gd.fillStyle = 'rgba(0,0,0,.1)'
      gd.fillRect(-r.width / 2, -r.height / 2, r.width, r.height)
      gd.restore()

      d.collCircles.forEach((circle, _idx) => {
        const x = circle.x
        const y = circle.y
        const radius = circle.radius

        gd.beginPath()
        gd.arc(x, y, radius, 0, 2 * Math.PI)
        gd.closePath()
        gd.fillStyle = 'rgba(255,0,255,.3)'
        gd.fill()

        gd.font = '12px 微软雅黑'
        gd.fillStyle = 'red'
        gd.textAlign = 'center'
        gd.textBaseline = 'middle'
        gd.fillStyle = 'green'
        gd.fillText(~~x + '*' + ~~y, x, y)

        gd.fillStyle = 'blue'
        gd.fillRect(x - 2, y - 2, 4, 4)

      })
    }
    return this
  }
  setVXY(v, ang, deg = 0) {
    const d = this.d
    const r = d.r
    d.vx = Math.sin(d2a(a2d(ang) + deg)) * v
    d.vy = -Math.cos(d2a(a2d(ang) + deg)) * v
    this.setRotate()
    return this
  }
  setRandSpeed() {
    const dw = window.innerWidth
    const dh = window.innerHeight
    const d = this.d
    const r = d.r

    const al = 100
    const at = 100
    const ar = dw - 200
    const ab = dh - 200
    const rnd = rand(400, 800)

    const cx = rand(al, ar)
    const cy = rand(at, ab)

    d.vx = (cx - d.left) / rnd
    d.vy = (cy - d.top) / rnd

    while (Math.abs(d.vx) < .5 && Math.abs(d.vy) < .5) {
      d.vx *= 1.2
      d.vy *= 1.2
    }

    this.setRotate()
    return this
  }
  setRotate() {
    const d = this.d
    switch (d.name) {
      case 'fish':
        d.rotate = Math.atan2(d.vy, d.vx)
        break
      default:
        const x1 = d.left
        const y1 = d.top
        const x2 = conf.x
        const y2 = conf.y
        const a = y1 - y2
        const b = x2 - x1
        d.rotate = Math.atan2(b, a)
        break
    }
    return this
  }
  pay(money) {
    // money = Math.ceil(money / 3)
    const d = this.d
    const r = d.r
    const gold = Math.floor(money / 10)
    const silver = money % 15

    createCorn(gold, 1)
    createCorn(silver, 0)
    function createCorn(len, type) {
      for (let i = 0; i < len; i++) {
        setTimeout(() => {
          new Corn(type).extend({
            left: rand(d.left - 80, d.left + 80),
            top: rand(d.top - 80, d.top + 80),
          })
        }, i * 50)
      }
    }
  }
  attackAllFish() {
    const gd = conf.gd
    const d = this.d
    const r = d.r
    const fishes = conf.scene.fish
    const radiusBullet = d.collCircles[0].radius

    for (let i = 0, len = fishes.length; i < len; i++) {
      const fish = fishes[i]
      const _d = fish.d
      const _r = _d.r
      if (_d.blood <= 0) {
        continue
      }
      for (let j = 0, _len = _d.collCircles.length; j < _len; j++) {
        const circle = _d.collCircles[j]
        const a = circle.x - d.left
        const b = circle.y - d.top
        const c = circle.radius + radiusBullet
        if (a * a + b * b < c * c) {
          switch (d.name) {
            case 'bullet':
              this.destroy()
              new Net(d.type).extend({
                left: d.left,
                top: d.top,
              }).nextFrame().attackAllFish()
              break
            case 'net':
              _d.blood -= r.hurt
              if (_d.blood <= 0) {
                _d._curFrame = -_d.fric
                _d.curFrame = 0
                _d.vx = _d.vy = 0
                fish.pay(_r.fullBlood)
                fish.onnextframe = () => {
                  _d.countDie++
                  if (_d.countDie > _r.disDie) {
                    fish.destroy()
                  }
                }
              }
              break
          }
          break
        }
      }
    }
    return this
  }
  destroy() {
    const arr = conf.scene[this.d.name]
    for (let i = 0; i < arr.length ;i++) {
      if(arr[i] === this) {
        arr.splice(i, 1)
        break
      }
    }
  }
}

class Fish extends Base { // 鱼
  constructor(type) {
    super({
      type,
      name: 'fish',
      countDie: 0,
    }).extend({
      blood: this.d.r.fullBlood
    })
  }
  getCurFrame() {
    const d = this.d
    const r = d.r
    const curFrame = 0
    if (d.blood > 0) { // 活鱼
      return d.curFrame % r.disAlive
    } else { // 死鱼
      return d.curFrame % r.disDie + r.frameDie[0]
    }
  }
  nextFrame() {
    super.nextFrame()
    const dw = window.innerWidth
    const dh = window.innerHeight
    const d = this.d
    const r = d.r
    const iMax = Math.max(r.width, r.height)
    const isInScene = d.left > -iMax && d.left < dw + iMax && d.top > -iMax && d.top < dh + iMax

    if (!isInScene) {
      this.destroy()
    } else {
      return this
    }
  }
}

class Corn extends Base { // 金币
  constructor(type) {
    super({
      type,
      name: 'corn',
      fric: 3
    })
  }
  nextFrame() {
    super.nextFrame()
    const dw = window.innerWidth
    const dh = window.innerHeight
    const d = this.d
    const r = d.r
    const l = 145
    const t = dh
    if (d.curFrame > 20) {
      d.vx = parseInt((l - d.left) / 10)
      d.vy = parseInt((t - d.top) / 10)
      d.vx = d.vx > 0 ? Math.ceil(d.vx) : Math.floor(d.vx)
      d.vy = d.vy > 0 ? Math.ceil(d.vy) : Math.floor(d.vy)
      if (d.vx == 0 && d.vy == 0) {
        this.destroy()
        conf.score += d.type == 1 ? 10 : 1
      }
    }
    return this
  }
}

class Net extends Base { // 渔网
  constructor(type) {
    super({
      type,
      fric: 2,
      name: 'net',
      countZoom: 0,
    })
  }
  nextFrame() {
    super.nextFrame()
    const d = this.d
    const r = d.r
    if (d.countZoom < 0) {
      this.destroy()
    } else {
      d.curFrame < 5 ? d.countZoom++ : d.countZoom--
      d.scaleX = d.scaleY = 1 + d.countZoom / 10
    }
    return this
  }
}

class Cannon extends Base { // 大炮
  constructor(type) {
    super({
      type,
      name: 'cannon',
      fric: 5,
      curFrame: -1
    })
  }
  nextFrame() {
    super.nextFrame()
    const d = this.d
    const r = d.r
    if (d.curFrame >= r.maxFrame) {
      d._curFrame = -1
      d.curFrame = -1
    }
    return this
  }
  shoot(x, y) {
    const d = this.d
    const r = d.r
    /*if (d.curFrame > -1) {
      return
    }*/
    d.curFrame = 0
    new Bullet(d.type).extend({
      left: d.left,
      top: d.top,
    }).setVXY(10, d.rotate)
    return this
  }
}

class Bullet extends Base { // 子弹
  constructor(type) {
    super({
      type,
      name: 'bullet',
    })
  }
  nextFrame() {
    const dw = window.innerWidth
    const dh = window.innerHeight
    super.nextFrame()
    const gd = conf.gd
    const d = this.d
    const r = d.r
    const x1 = d.left
    const y1 = d.top
    if (
      d.left < -20 ||
      d.left > dw + 20 ||
      d.top < -20 ||
      d.top > dh + 20
    ) {
      this.destroy()
    }
    // 和场景中的鱼碰撞
    this.attackAllFish()
    return this
  }
}

class Vortex extends Base {
  constructor(type) {
    super({
      type,
      name: 'vortex',
    })
  }
  nextFrame() {
    super.nextFrame()
    const d = this.d

    if (d.curFrame < 300) {
      if (d.curFrame % 5 === 0) {
        new Fish(rand(0, 11)).extend({
          left: d.left,
          top: d.top,
        })
      }
    } else {
      this.destroy()
    }
  }
}

class Bottom extends Base {
  constructor() {
    super({
      type: 0,
      name: 'bottom',
    })
  }
  nextFrame() {
    return this
  }
}