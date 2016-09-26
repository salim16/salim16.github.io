$(window).scroll(function () {
     			var sc = $(window).scrollTop()
    			if (sc > 120) {
        			$("#header-sroll").addClass("bgg")
    			} else {
				 $("#header-sroll").removeClass("bgg")
			 }
		});