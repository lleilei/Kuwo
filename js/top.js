var more=document.getElementById("more");
var userBox=document.getElementById("userBox");


for(var i=0;i<2;i++){
	more.onmouseover=function(){
		this.getElementsByTagName("ul")[0].style.display="block";
	}
	more.onmouseout=function(){
		this.getElementsByTagName("ul")[0].style.display="none";
	}
}

for(var i=0;i<2;i++){
	userBox.onmouseover=function(){
		this.getElementsByClassName("loginMenu")[0].style.display="block";
	}
	userBox.onmouseout=function(){
		this.getElementsByClassName("loginMenu")[0].style.display="none";
	}
}


// window.onload = function(){
//	var tabLeft = document.getElementById("tabLeft");
//	var tabRight = document.getElementById("tabRight");
//	var oshiyan= document.getElementById("shiyan");
//	var img = document.getElementById("Img");
//	var num = 0;
//	var ArrU1 = ['img/1476867119115_.jpg','img/1542504768876_.jpg','img/1542598009141_.jpg','img/1542168436631_.jpg',
//	'img/1542423377610_.jpg','img/1542351129928_.jpg','img/1487577470628_.jpg','img/1480068129300_.jpg']
//	
//	function funtab(){
//		img.src = ArrU1[num];
//	}
//	funtab();
//	tabLeft.onclick = function(){
//		num--;
//		if (num==1) {
//			num = ArrU1.length-1
//		}
//		funtab();
//	};
//	tabRight.onclick = function(){
//		num++;
//		if (num==ArrU1.length) {
//			num=0;
//		}
//		funtab();
//	};
//};

//登录框
$(".userBox").click(function(){
	$(".loginShadow,.ugcBox").css({
		"display":"block"
	})
})

$(".closeWindow").click(function(){
	$(".loginShadow,.ugcBox").css({
		"display":"none"
	})
})


$(".cover").mouseover(function(){
	$(this).children(".play_pl").css({
		"display":"block"
	})
}).mouseout(function(){
	$(this).children(".play_pl").css({
		"display":"none"
	})
})


$("li").mouseover(function(){
	$(this).children(".songListSplice,.songList").css({
		"display":"block"
	})
}).mouseout(function(){
	$(this).children(".songListSplice,.songList").css({
		"display":"none"
	})
})

$("li").mouseover(function(){
	$(this).children(".infoSplice,.info").css({
		"display":"none"
	})
}).mouseout(function(){
	$(this).children(".infoSplice,.info").css({
		"display":"block"
	})
})

$("#banner").mouseover(function(){
	$(".tabLeft,.tabRight").css({
		"display":"block"
	})
}).mouseout(function(){
	$(".tabLeft,.tabRight").css({
		"display":"none"
	})
})

$(".shareA").mouseover(function(){
	$(".shareBox").css({
		"display":"block"
	})
}).mouseout(function(){
	$(".shareBox").css({
		"display":"none"
	})
})

$(".ewm").mouseover(function(){
	$(".ewmBox").css({
		"display":"block"
	})
}).mouseout(function(){
	$(".ewmBox").css({
		"display":"none"
	})
})

var intervalId;
$(".pas").click(function(){
	if($(this).className == "play plp"){
		clearInterval(intervalId);
		$(this).className=".play pas";
		mymusic.pause();
	}else{
		mymusic.play();
		$(this).className=".play plp";
	}
})



var index=1;
var intervalId=setInterval(function(){
	clearInterval(intervalId);
	document.getElementsByClassName("").[0].style.marginLeft="-600px";
	document.getElementsByClassName("").[0].style.transition="all 3s";
},3000)

document.getElementsByClassName("").[0].addEventListener("webkitTransitionEnd",function(){
	intervalId=setInterval(function(){
		index=index+1;
		clearInterval(intervalId);
		document.getElementsByClassName("bannerItem").[0].style.marginLeft=""+ -index*300+"px";
	    document.getElementsByClassName("").[0].style.transition="all 3s";
	})
})

