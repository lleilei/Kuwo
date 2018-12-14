var spanList=document.getElementsByClassName("placeholder");
var inputList=document.getElementsByClassName("field");

function checkinput(which){
	var inputName = which.getAttribute("name");
		switch(inputName){
			case"regPhone":
			regtxt=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
			break;
			case "regName":
			regtxt=/^[\u4E00-\u9FA5A-Za-z0-9]+$/;
			break;
			case "regPwd":
			regtxt=/^[a-zA-Z]\w{5,17}$/;
			break;
	    }
	    if(regtxt.test(which.value)){
	    	return;
		}
	    else{
	    	which.parentNode.nextSibling.nextSibling.innerHTML = which.getAttribute("warning");
			which.parentNode.style.border="1px solid red";
	    }
	}


for(var i=0;i<spanList.length;i++){
	spanList[i].onclick=function(){
		this.style.display="none";
		this.nextSibling.nextSibling.focus();
	}
}

for(var i=0;i<inputList.length;i++){
	inputList[i].onblur=function(){
		checkinput(this);
	}
}
