命令和参数: A (r r 0 0|1 0|1 x y)
参数解释:
1) 第1、2参数：圆弧的半径；
2) 第3参数：固定为0；
3) 第4参数：0表示小于180度的弧，1表示大弧；
4) 第5参数：0为表示弧在路径前进方向的右边，1表示在左边；
5) 第6、7参数：弧的终点坐标，此点同时作为下一园弧或命令A、L的当前点



A指令
Elliptical Arc，允许不闭合。可以想像成是椭圆的某一段，共七个参数。
RX,RY指所在椭圆的半轴大小
XROTATION指椭圆的X轴与水平方向顺时针方向夹角，可以想像成一个水平的椭圆绕中心点顺时针旋转XROTATION的角度。
FLAG1只有两个值，1表示大角度弧线，0为小角度弧线。
FLAG2只有两个值，确定从起点至终点的方向，1为顺时针，0为逆时针
X,Y为终点坐标


M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc
Z = closepath