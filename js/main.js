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
	$('.loginput input').on('input',function(){
		if($(this).val()){
			$(this).parent().find('.title').addClass("focus");
		}else{
			$(this).parent().find('.title').removeClass("focus");
		}
	});
	// $('.loginput input').on("blur",function(){
	// 	var current = $(this);
	// 	var config = {
	// 		email : "请输入正确的邮箱",
	// 		require : "必填",
	// 		password2 : "两次输入的密码不一致"
	// 	};
	// 	var text = current.val();
	// 	var fn = current.attr("data-vald");
	// 	var arfn = fn.split(" ")
	// 	var validNum = arfn.length;
	// 	_.each(arfn,function(item,index){
	// 		if(!valid(text,item)){
	// 			current.parent().find(".err_place").addClass("error").html(config[item]);
	// 			validNum--
	// 			return false
	// 		}else if(valid(text,item)&&(validNum == arfn.length)){
	// 			current.parent().find(".err_place").removeClass("error").html("");
	// 		};
	// 	});
	// });
	function validate(){
		var input = $(".loginput input");
		var config = {
			email : "请输入正确的邮箱",
			require : "必填",
			password2 : "两次输入的密码不一致"
		};
		$.each(input,function(index,el){
			var ele = $(el);
			var text = ele.val();
			var fn = ele.attr("data-vald");
			var arfn = fn.split(" ")
			var validNum = arfn.length;
			_.each(arfn,function(item,index){
				if(!valid(text,item)&&(ele.prop("disabled")!=true)){
					ele.parent().find(".err_place").addClass("error").html(config[item]);
					validNum--;
				}else if(valid(text,item)&&(validNum == arfn.length)){
					ele.parent().find(".err_place").removeClass("error").html("");
				};
			});
		})
		return status;
		
	}
	function valid(data,fn){
		var foo = {
			email : function(){
				var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var result = emailReg.test(data);
				return result
			},
			require :function(){
				return data == "" ? false : true
			},
			password2 : function(){
				var result = $("#password2").val() == $("#password").val() ? true :false;
				return result
			}
		}
		return foo[fn]();
	};
	$('.loginStatus').on('tap',function(){
		if ($(".loginIn").find(".iconfont2").hasClass("ring")) {
			return false
		};
		var current = $(this);
		if (current.hasClass("t_zhuce")) {
			$(".password2").removeClass("hidden2");
			$(".password2 input").prop("disabled","");
			$(".loginIn").removeClass("denglu").addClass("zhuce").find("span").html("注册");
			current.removeClass("t_zhuce").addClass("t_denglu").find("span").html("登录");
			current.parent().find(".title").html("注册");
		}else{
			$(".password2").addClass("hidden2");
			$(".password2 input").prop("disabled","disabled");
			$(".loginIn").removeClass("zhuce").addClass("denglu").find("span").html("登录");
			current.removeClass("t_denglu").addClass("t_zhuce").find("span").html("注册");
			current.parent().find(".title").html("登录");
		};
		
	});
	
	$(".more").on("tap",function(){
		if ($(this).find(".iconfont2").hasClass("ring")) {
			return false
		};
		$(this).find(".iconfont2").addClass("ring");
		//ajax done
		var s = 0xE052;
		var ring = setInterval(function(){
			var t = "\\u"+s.toString(16);
			if(s <= 0xE0B6){
				$(".more section").html(eval('"'+t+'"'));
				s++
			}else {
				s = 0xE052
			}
		},1000/33)
	})
	var ring;
	$(".loginIn").on("tap",function(){
		validate();
		if($(".err_place.error").length != 0){
			return false
		}
		if ($(this).hasClass("denglu")) {
			//ajax done
			if ($(this).find(".iconfont2").hasClass("ring")) {
				return false
			};
			$(this).find(".iconfont2").addClass("ring");
			aRing($(".denglu span"));
			setTimeout(function(){
				clearInterval(ring);
				$(".denglu span").html("登录").removeClass("ring");
			},2000)
		}else if($(this).hasClass("zhuce")){
			//ajax done
			if ($(this).find(".iconfont2").hasClass("ring")) {
				return false
			};
			$(this).find(".iconfont2").addClass("ring");
			aRing($(".zhuce span"));
			setTimeout(function(){
				clearInterval(ring);
				$(".zhuce span").html("注册").removeClass("ring");
			},2000)
		};		
	});
	function aRing(el){
		var s = 0xE052;
		ring = setInterval(function(){
			var t = "\\u"+s.toString(16);
			if(s <= 0xE0B6){
				el.html(eval('"'+t+'"'));
				s++
			}else {
				s = 0xE052
			}
		},1000/33);
	}
	$(".name").on("tap",function(){
		$(".panal,.contain").addClass("hidden");
		$(".login").removeClass("hidden");
		$(".login").addClass("a_login_or");
	});
	$(".quxiao").on("tap",function(){
		if ($(".loginIn").find(".iconfont2").hasClass("ring")) {
			return false
		};
		setTimeout(function(){
			$(".panal,.contain").removeClass("hidden");
			$(".login").addClass("hidden");
		},300);
		$(".login").removeClass("a_login_or").addClass("a_login_ok");
	});
	$(".del_word").on("tap",function(){
		$(this).parent().find("input").val("");
		$('.loginput input').trigger("input");
	})
	function popup(str,time,isClick,dom){
		time = time || 1200;
		isClick = isClick || false;
		dom = dom || false;
		if (dom == true) {
			var tep = str;
		}else{
			var tep = "<div class='popup a_pop'>"+str+"</div>";
		};
		// $(tep).appendTo("body");
		var pop = $(tep).appendTo("body");
		if (typeof time == "number" && isClick == false) {
			setTimeout(function(){
				pop.remove();
			},time);
		};
		if (isClick == true) {
			$("body .popup").on("touchend",function(e){
				e.preventDefault();
				pop.remove();
			})
		}
	}
	// popup("dddd",1200,true);
	popup("<div class='popup a_pop full'>123</div>",1200,true,true);

});






























