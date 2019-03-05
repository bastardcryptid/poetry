$(document).ready(function(){
	window.onscroll=function(){
		$(".upto").css("display","inline-block");
		if(window.pageYOffset<100){
		$(".upto").css("display","none");
	}
	}
})