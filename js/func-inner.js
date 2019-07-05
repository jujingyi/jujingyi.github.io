// JavaScript Document


//呼唤空格之神
pangu.spacingPage();


//窗口滚动至内容框，设置nav、header、footer样式
$(window).scroll(function(){
	var ht = $("header").height()-80;//取header高度，补正nav-fixed的高度
	var wt = $(window).scrollTop();//滚动距离
	if(wt >= ht){
		$("nav").addClass("nav-fixed");
		$(".gotop").css("display","block");
	}else{
		$("nav").removeClass("nav-fixed");
		$(".gotop").css("display","none");
	}
});


//页面滚动
function pageRoll(target){
	$("html,body").animate({scrollTop:target},500);
}


//滚动到页面顶部
function goTop(){
	pageRoll(0);
}


//打开菜单
function openMenu(){
	$("nav").removeClass("menu-layer-close");
	$("nav").addClass("menu-layer-open");
	$("body").addClass("stop-roll");			
}


//关闭菜单
function closeMenu(){
	$("nav").removeClass("menu-layer-open");
	$("nav").addClass("menu-layer-close");
	$("body").removeClass("stop-roll");
}


//菜单切换功能
function menuFunc(){
	if($("nav").hasClass("menu-layer-open")){
		closeMenu();
	}else{
		openMenu();
	}
}