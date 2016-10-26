$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 300) {
        $(".navbar-inverse").css("display", "block");
    }
    else {
    	$(".navbar-inverse").css("display", "none");
    }
	});