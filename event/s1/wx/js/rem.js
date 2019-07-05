//严格模式
"use strict";

//rem响应式布局
function rem(){
	var docEl = document.documentElement;
	var winWidth = window.innerWidth;
	
	if(winWidth >= 750){
		docEl.style.fontSize = "100px";
	}else{
		docEl.style.fontSize = 100 * (winWidth / 750) + "px";
	}
}

window.onresize = function(){
	rem();
};

rem();

















