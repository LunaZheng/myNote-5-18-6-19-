const resource = {
  fish: [ // 鱼
    {src: 'img/fish1.png', x: 0, y: 0, w: 55, h: 296, maxFrame: 8, frameAlive: [0, 3], frameDie: [4, 7], circleLen: 2, circleY: -5, fullBlood: 1, bloodBarY: -5},
    {src: 'img/fish2.png', x: 0, y: 0, w: 78, h: 512, maxFrame: 8, frameAlive: [0, 3], frameDie: [4, 7], circleLen: 2, circleY: -10, fullBlood: 2, bloodBarY: -14},
    {src: 'img/fish3.png', x: 0, y: 0, w: 72, h: 448, maxFrame: 8, frameAlive: [0, 3], frameDie: [4, 7], circleLen: 2, circleY: -10, fullBlood: 3, bloodBarY: -10},

    {src: 'img/fish4.png', x: 0, y: 0, w: 77, h: 472, maxFrame: 8, frameAlive: [0, 3], frameDie: [4, 7], circleLen: 2, circleY: -18, fullBlood: 4*2, bloodBarY: -15},
    {src: 'img/fish5.png', x: 0, y: 0, w: 107, h: 976, maxFrame: 8, frameAlive: [0, 3], frameDie: [4, 7], circleLen: 2, circleY: -10, fullBlood: 5*2, bloodBarY: -10},
    {src: 'img/fish6.png', x: 0, y: 0, w: 105, h: 948, maxFrame: 12, frameAlive: [0, 5], frameDie: [6, 11], circleLen: 3, circleY: -10, fullBlood: 6*2, bloodBarY: -10},

    {src: 'img/fish7.png', x: 0, y: 0, w: 92, h: 1510, maxFrame: 10, frameAlive: [0, 4], frameDie: [5, 9], circleLen: 2, circleY: -25, fullBlood: 7*10, bloodBarY: -30},
    {src: 'img/fish8.png', x: 0, y: 0, w: 174, h: 1512, maxFrame: 12, frameAlive: [0, 5], frameDie: [6, 11], circleLen: 3, circleY: -15, fullBlood: 8*20, bloodBarY: -10},
    {src: 'img/fish9.png', x: 0, y: 0, w: 166, h: 2192, maxFrame: 12, frameAlive: [0, 5], frameDie: [6, 11], circleLen: 2, circleY: -10, fullBlood: 9*30, bloodBarY: -10},

    {src: 'img/fish10.png', x: 0, y: 0, w: 178, h: 1870, maxFrame: 10, frameAlive: [0, 4], frameDie: [5, 9], circleLen: 2, circleY: -22, fullBlood: 10*40, bloodBarY: -24},

    {src: 'img/shark1.png', x: 0, y: 0, w: 509, h: 3240, maxFrame: 12, frameAlive: [0, 5], frameDie: [6, 11], circleLen: 7, circleY: -10, fullBlood: 11*50, bloodBarY: -10},
    {src: 'img/shark2.png', x: 0, y: 0, w: 516, h: 3276, maxFrame: 12, frameAlive: [0, 5], frameDie: [6, 11], circleLen: 7, circleY: 0, fullBlood: 12*50*2, bloodBarY: 0},
    
  ],
  corn: [ // 金币
    {src: 'img/coinAni1.png', x: 0, y: 0, w: 60, h: 600, maxFrame: 10},
    {src: 'img/coinAni2.png', x: 0, y: 0, w: 60, h: 600, maxFrame: 10},
  ],
  cannon: [ // 大炮
    {src: 'img/cannon1.png', x: 0, y: 0, w: 74, h: 370, maxFrame: 5},
    {src: 'img/cannon2.png', x: 0, y: 0, w: 74, h: 380, maxFrame: 5},
    {src: 'img/cannon3.png', x: 0, y: 0, w: 74, h: 380, maxFrame: 5},
    {src: 'img/cannon4.png', x: 0, y: 0, w: 74, h: 415, maxFrame: 5},
    {src: 'img/cannon5.png', x: 0, y: 0, w: 74, h: 425, maxFrame: 5},
    {src: 'img/cannon6.png', x: 0, y: 0, w: 74, h: 450, maxFrame: 5},
    {src: 'img/cannon7.png', x: 0, y: 0, w: 74, h: 470, maxFrame: 5},
  ],
  bullet: [ // 子弹
    {src: 'img/bullet.png', x: 0, y: 0, w: 32, h: 26},
    {src: 'img/bullet.png', x: 0, y: 50, w: 32, h: 28},
    {src: 'img/bullet.png', x: 0, y: 100, w: 32, h: 30},
    {src: 'img/bullet.png', x: 0, y: 150, w: 32, h: 33},
    {src: 'img/bullet.png', x: 0, y: 200, w: 32, h: 35},
    {src: 'img/bullet.png', x: 0, y: 250, w: 32, h: 34},
    {src: 'img/bullet.png', x: 0, y: 300, w: 32, h: 44},
  ],
  net: [ // 渔网
    {src: 'img/nets.png', x: 332, y: 373, w: 87, h: 87, hurt: 1},
    {src: 'img/nets.png', x: 14, y: 411, w: 110, h: 110, hurt: 2},
    {src: 'img/nets.png', x: 177, y: 370, w: 127, h: 127, hurt: 3},
    {src: 'img/nets.png', x: 253, y: 195, w: 150, h: 150, hurt: 4},
    {src: 'img/nets.png', x: 0, y: 240, w: 162, h: 162, hurt: 5},
    {src: 'img/nets.png', x: 240, y: 0, w: 184, h: 184, hurt: 6},
    {src: 'img/nets.png', x: 18, y: 18, w: 206, h: 206, hurt: 7},
  ],
  vortex: [
    {src: 'img/xuanwo.png', x: 0, y: 0, w: 350, h: 350},
  ],
  bottom: [
    {src: 'img/bottom.png', x: 0, y: 0, w: 145, h: 70},
  ],
  numberBlack: [
    {src: 'img/number_black.png', x: 0, y: 0, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 24, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 48, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 72, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 96, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 120, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 144, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 168, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 192, w: 20, h: 24},
    {src: 'img/number_black.png', x: 0, y: 216, w: 20, h: 24},
  ]
}

resource.numberBlack.reverse()
