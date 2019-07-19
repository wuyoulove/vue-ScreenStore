/*
 随屏幕窗口调整,自动调整页面比例功能
 -------------------------------

 @el 根元素
 @width 宽度
 @height 高度
 */
var lazyFun;
function init(el,width,height){
	var _el = document.getElementsByClassName(el)[0];
	var hScale = window.innerHeight / height;
	var wScale = window.innerWidth  / width;
	_el.style.transform = 'scale(' + wScale +','+hScale+')'
}
init('main',1920,1080);
window.onresize =function(){

	clearTimeout(lazyFun);

	lazyFun = setTimeout(function(){

		init('main',1920,1080)

	}, 600);
};