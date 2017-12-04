oV.src='http://images.sohu.com/ytv/SH/Coke/64036020120714021103.mp4?t='+Math.random();
oV.play();  
oV.pause();
//oV.stop();  
oV.pause();
oV.currentTime=0;
oV.addEventListener('timeupdate',function(){
var scale=oV.currentTime/oV.duration;
oV.currentTime=scale*oV.duration;
oV.addEventListener('progress',function(){
var scale=oV.buffered.end(0)/oV.duration;
oV.volume=scale;