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


var classNode=document.getElementsByClassName("bang");
var leftNav=document.getElementById("leftNav");
var ulList=leftNav.getElementsByTagName("ul");

for(var i=0;i<classNode.length;i++){
	classNode[i].onclick=function(){
		for(var m=0;m<ulList.length;m++){
			if(m==this.getAttribute("title")){
				ulList[m].style.display="block";
			}
			else{
				ulList[m].style.display="none";
			}
		}
	}
}





