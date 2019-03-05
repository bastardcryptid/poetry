$(document).ready(function(){
	window.onscroll=function(){
		$(".upto").css("display","inline-block");
		if(window.pageYOffset<100){
			$(".upto").css("display","none");
		}
	};
	var numbers=$(".number");
	for(var i=0; i<numbers.length; i++){
		numbers[i].innerHTML=i+1;
	}
	var subcoll=$(".numbers");
	for(var i=0; i<subcoll.length; i++){
		var subc=document.getElementsByClassName("itemssubc")[i].children;
		var first=subc[0].children[0].childNodes[1].innerText;
		console.log(first);
		var last=subc[subc.length-1].children[0].childNodes[1].innerText;
		console.log(last);
		subcoll[i].innerHTML=first+"-"+last;
	}
})