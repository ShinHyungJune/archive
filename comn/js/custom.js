$(window).resize(function(){
	popupAutoHei();
});

function familySite(){
	$(".familysite").toggleClass("active");
	$(".familysite dl").stop().slideToggle();
}

function toTop(){
	$("html, body").animate({scrollTop: 0 },"slow");	
}

function menuOpen(){
	$("html , body , .gnb").addClass("fixed");
}

function menuClose(){
	$("html , body , .gnb").removeClass("fixed");
}

function indexClose(obj){
	var parent = $(obj).closest(".sub-index");

	$("html , body").removeClass("fixed");
	parent.removeClass("active");
}

function indexToggle(obj){
	var width = $(document).width();
	var parent = $(obj).parent();

	if(width < 992){
		$("html , body").toggleClass("fixed");
	}

	parent.toggleClass("active");
}

function popupOpen(){
	$("html , body , .popup").addClass("fixed");

	popupAutoHei();	
}

function popupClose(){
	$("html , body , .popup").removeClass("fixed");
}

function popupAutoHei(){
	var boxHei = $(".popup .box").outerHeight();
	var boxHead = $(".popup .popup-head").outerHeight();
	var boxFoot = $(".popup .popup-foot").outerHeight();
	var boxBody = boxHei - (boxHead + boxFoot);

	$(".popup .popup-body").css({"height": boxBody + "px"});
}

function toggle(obj){
	var parents = $(obj).closest("li");

	parents.toggleClass("active");
	parents.find(".toggle-box").toggle();
	if(parents.hasClass("active") == true){
		$(obj).find("b").text("펼치기");
	}else{
		$(obj).find("b").text("접기");
	}
}

$(document).on("click" , ".detail-toggle button" , function(){
	var li = $(this).closest(".list-item");

	li.addClass("active");
	li.siblings().removeClass("active");
	li.siblings().find("button").removeClass("active");
	li.siblings().find(".toggle-box").not(".button-1 ~ .toggle-box").stop().slideUp();
	$(this).toggleClass("active");
	$(this).nextAll(".toggle-box").stop().slideToggle();
	$(this).parent().siblings().find("button").removeClass("active");
	$(this).parent().siblings().find(".toggle-box").stop().slideUp();
});