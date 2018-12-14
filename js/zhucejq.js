//$("#form-item-phone .placeholder").click(function(){
//	$(this).css({"display":"none"});
//	$("#form-phone").focus();
//	
//})
//.blur(check_phone());
//
//function check_phone() {
//var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
//if (!reg.test($("#form-phone").val())){
//  $(".input-tip span").css("display","inline");
////  $("#form-phone").focus();
//alert("11");
//}
//else{
//	$(".input-tip span").css("display","none");
//}
//}


$(".placeholder").click(function(){
	$(this).css("display","none");
	$(this).siblings("input").focus();
})

$(".field").blur(function(){
	
})
