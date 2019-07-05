// JavaScript Document


//呼唤空格之神
pangu.spacingPage();


//视差滚动特效
$(document).ready(function(){
	$(".resume .bg").parallax("50%", 0.05);
	$(".glory .bg").parallax("50%", 0.05);
	$(".movie-bg").parallax("50%", -0.05);
	$(".gallery .bg1").parallax("100%", -0.05);
	$(".gallery .bg2").parallax("50%", -0.05);
	
	//唱片
	var epSwiper = new Swiper(".music .swiper-container", {
		slidesPerView: 3,
		spaceBetween: 30,
		
		pagination: {
    		el: ".swiper-pagination",
			clickable: true,
    	},
		
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
	});
});


//设置内容块的marign-top为窗口高度
function setContainer(){
	var wh = $(window).height();
	var fh = $("footer").height()+260;//补正footer的margin、padding
	$(".container").css("top",wh);
	$(".footer-empty").css("height",fh);
}
$(window).resize(function(){
	setContainer();
});
setContainer();


//窗口滚动至内容框，设置nav、header、footer样式
$(window).scroll(function(){
	var ht = $("header").height()-80;//取header高度，补正nav-fixed的高度
	var wt = $(window).scrollTop();//滚动距离
	if(wt >= ht){
		$("header").css("display","none");
		$("footer").css("display","block");
		$("nav").addClass("nav-fixed");
		$(".gotop").css("display","block");
	}else{
		$("header").css("display","block");
		$("footer").css("display","none");
		$("nav").removeClass("nav-fixed");
		$(".gotop").css("display","none");
	}
});


//页面滚动
function pageRoll(target){
	$("html,body").animate({scrollTop:target},500);
}


//滚动到内容块位置
function goRead(){
	var ct = $(".container").offset().top;
	pageRoll(ct);
}


//滚动到页面顶部
function goTop(){
	pageRoll(0);
}


//获取URL的锚点，并滚动到指定位置
function getUrlAnchor(){
	var idn = window.location.hash;
	switch(idn){
		case "#news":
			goNavSeled(1,true);
			break;
		case "#resume":
			goNavSeled(2,true);
			break;
		case "#music":
			goNavSeled(3,true);
			break;
		case "#movie":
			goNavSeled(4,true);
			break;
		case "#gallery":
			goNavSeled(5,true);
			break;
		case "#contact":
			goNavSeled(6,true);
			break;
	}
}
getUrlAnchor()


//nav,点击滚动及选中特效
function goNavSeled(i,n){
	var navSeled = i;
	var ifPatch = n;
	var heightPatch = 0;

	//启用header高度补正
	if(ifPatch){
		heightPatch = -50;//首页根据#锚点定位进行补正
	}else{
		heightPatch = 80;//nav-fixed高度影响
	}

	var wt1 = $(".news h2").offset().top - heightPatch;;
	var wt2 = $(".resume h2").offset().top - heightPatch;
	var wt3 = $(".music h2").offset().top - heightPatch;
	var wt4 = $(".movie h2").offset().top - heightPatch;
	var wt5 = $(".gallery h2").offset().top - heightPatch;
	var wt6 = $(document).height();

	function seledTarget(){
		var target = navSeled - 1;
		pageRoll(eval("wt" + navSeled));
		$("nav .seled").css({
			"left":$("nav li:eq(" + target + ")").offset().left,
			"width":$("nav li:eq(" + target + ")").width()
		});
		//关闭菜单
		closeMenu()
	}

	seledTarget();
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