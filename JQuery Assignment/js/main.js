$(function() {
	//"click here" text change
	$("h2#flip").text("Click here to know who I am!");

	//li items css style change
	$("li").css({"color":"rgb(9,92,41)","font-size":"20px", "font-weight": "bold"});

	//title animation
	setTimeout(function() {
		$("h1").text("C");
	}, 200);

	setTimeout(function() {
		$("h1").text("Ch");
	}, 400);

	setTimeout(function() {
		$("h1").text("Cha");
	}, 600);

	setTimeout(function() {
		$("h1").text("Chan");
	}, 800);

	setTimeout(function() {
		$("h1").text("Chany");
	}, 1000);

	setTimeout(function() {
		$("h1").text("Chanyo");
	}, 1200);

	setTimeout(function() {
		$("h1").text("Chanyou");
	}, 1400);

	setTimeout(function() {
		$("h1").text("Chanyoun");
	}, 1600);

	setTimeout(function() {
		$("h1").text("Chanyoung");
	}, 1800);

	setTimeout(function() {
		$("h1").text("Chanyoung P");
	}, 2000);

	setTimeout(function() {
		$("h1").text("Chanyoung Pa");
	}, 2200);

	setTimeout(function() {
		$("h1").text("Chanyoung Par");
	}, 2400);

	setTimeout(function() {
		$("h1").text("Chanyoung Park");
	}, 2600);

	//greetings show/hide
	$("#flip").click(function(){
        $("#greetings").slideToggle("slow");
    });

	//profile pic bigger-smaller
    var coversize = false;

	$("img#cover").click(function() {
		if (coversize == false) {
			$("img#cover").css({
				width: "1250px",
			});
			coversize = true;
		}

		else if (coversize == true) {
			$("img#cover").css({
				width: "850px",
			});
			coversize = false;
		}
	});

	//mouseover map 
	$("img#barcelona").mouseover(function() {
		$("img#barcelona").attr("src", "images/barcelonamap.jpg");
	});

	$("img#barcelona").mouseout(function() {
		$("img#barcelona").attr("src", "images/Barcelona.jpg");
	});	
	

	$("img#prague").mouseover(function() {
		$("img#prague").attr("src", "images/praguemap.jpg");
	});

	$("img#prague").mouseout(function() {
		$("img#prague").attr("src", "images/Prague.jpg");
	});	


	$("img#london").mouseover(function() {
		$("img#london").attr("src", "images/londonmap.png");
	});

	$("img#london").mouseout(function() {
		$("img#london").attr("src", "images/London.jpg");
	});	
	
	//mouseover background color change
	$("div#movie1").hover(function(){
        $(this).css("background-color", "rgb(255,251,206)");
        }, function(){
        $(this).css("background-color", "rgb(231,187,64)");
    });

    $("div#movie2").hover(function(){
        $(this).css("background-color", "rgb(255,251,206)");
        }, function(){
        $(this).css("background-color", "rgb(231,187,64)");
    });

    $("div#movie3").hover(function(){
        $(this).css("background-color", "rgb(255,251,206)");
        }, function(){
        $(this).css("background-color", "rgb(231,187,64)");
    });

    //mouseover image opacity
    $("img#godfather").hover(function(){
        $(this).css("opacity", "0.5");
        }, function(){
        $(this).css("opacity", "1.0");
    });

    $("img#goodwillhunting").hover(function(){
        $(this).css("opacity", "0.5");
        }, function(){
        $(this).css("opacity", "1.0");
    });

    $("img#asgoodasitgets").hover(function(){
        $(this).css("opacity", "0.5");
        }, function(){
        $(this).css("opacity", "1.0");
    });

});	

