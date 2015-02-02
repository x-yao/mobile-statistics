$(document).ready(function() {
	$(".b_caidan").on("tap",function(){
		toggelPanal();
	})
	$(".contain").on("touchstart",".prevent",function(e){
		e.preventDefault();
	})
	// $(".contain").on("touchstart",function(e){
	// 	e.preventDefault();
	// })
	$(".contain").on("tap",".list.prevent",function(){
		toggelPanal();
	});
	function toggelPanal(){
		$(".panal").toggleClass("hidden2");
		$(".contain").toggleClass("prevent");
		$(".contain").toggleClass("tras_r prevent");
		$(".list").toggleClass("current prevent");
	}
	$(".select_contain").on("change", function() {
		$(this).parent().find(".select_val").text($(this).val());
	});
	$(".b_arrD").on("tap", function() {
		$(".search_contain").toggleClass("occer a_serch");
		$(".list_contain,.detail_contain,.contain > footer").toggleClass("hidden");
		$(".b_arrD span").toggleClass("xuanzhuan");
	});
});