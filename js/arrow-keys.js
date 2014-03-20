$(document).ready(function() {
	$("body").keydown(function(e) {
		if(e.which == 37) { // left     
			$("a.arrow-left").trigger("click");
		}
		else if(e.which == 39) { // right     
			$("a.arrow-right").trigger("click");
		}
		});
		$("a.arrow-left").on("click",function(e){
			window.location = $(e.target).attr('href');
		});
		$("a.arrow-right").on("click",function(e){
			window.location = $(e.target).attr('href');   
		});
	});