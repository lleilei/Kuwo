$(".more").mouseover(function(){
	$(this).children("ul").css({
		"display":"block"
	})
}).mouseout(function(){
	$(this).children("ul").css({
		"display":"none"
	})
})

$(".userBox").mouseover(function(){
	$(".loginMenu").css({
		"display":"block"
	})
}).mouseout(function(){
	$(".loginMenu").css({
		"display":"none"
	})
})

$(".share").mouseover(function(){
	$(this).children(".shareBox").css({
		"display":"block"
	})
}).mouseout(function(){
	$(this).children(".shareBox").css({
		"display":"none"
	})
})

//$(".bang").click(function(){
//	if($(".bang ul").css({"style","display:none"})){
//		$(this).css({"style","display:block"})
//	}
//})

$(".bang h2").click(function(){
		var flag = eval($(this).attr("data-flag"));
		if(!flag){
			$(this).addClass('down').attr("data-flag",true).next().show();
		}else{
			$(this).removeClass('down').attr("data-flag",false).next().hide();
		}
		return false;
	});





