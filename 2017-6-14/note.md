请简述同源策略以及规避方法
答：js不允许不同网址进行数据通信
规避方法：使用jsonp 或者后台设置白名单 Access-Control-Allow-Origin: 网址


简述对web语义化的理解
让标签变得和说话一样，易于理解 
如： nav 导航  header 页头 ...


html5新增标签
canvas video audio header footer article nav aside seciton


css3 新增特性
transform
box-shadow
border-radius
-webkit-tap-highlight-color //在移动端修改难看的点击的高亮效果
-webkit-overflow-scrolling //快速滚动和回弹的效果
-webkit-appearance //改变任何元素的浏览器默认风格,一般来改变按钮在iPhone下的默认风格
position: sticky  //吸顶、吸底
flex
justify-content
align-items
display: -webkit-box;
-webkit-box-flex: 1
filter: blur(10px)
-webkit-box-reflect: below 10px linear-gradient(transparent, red) //倒影效果
-webkit-background-clip: text; //文字背景剪切
-webkit-line-clamp: 2


css优先级
行内 > # > . > [] > tag > *


angularjs 依赖注入原理
执行了函数的toString方法，将参数用正则解析出来，再依次注入


行内元素有哪些
span a i b s u sub sup 
div h1-6 p dl dt dd ul li section header footer body form 