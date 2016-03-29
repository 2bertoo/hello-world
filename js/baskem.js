// JavaScript Document
$().ready(function(){
	$(".buscar").click(function(){
		if($(this).attr("class").indexOf("selected") < 0){
			$(this).addClass("selected");
			$(".topo").css("border-bottom-width","2px");
			hideMenu();
			showSearch();
		}
		else{
			hideSearch();
			$(".topo").css("border-bottom-width","2px");
		}
	});
	$(".menu").click(function(){
		if($(this).attr("class").indexOf("selected") < 0){
			$(this).addClass("selected");
			$(".topo").css("border-bottom-width","0");
			hideSearch();
			showMenu();
		}
		else{
			hideMenu();
			$(".topo").css("border-bottom-width","2px");
		}
	});
	
	$(".menuhidden li a").each(function(){
		if($(this).parent().find("> ul").size() > 0){
			$(this).addClass("seta");
		}
	});
	
	$(".menuhidden li a").click(function(){		
			if($(this).parent().find("> ul").css("display") == "block"){
				$(this).parent().find("> ul").slideUp("slow",function(){
						$(this).parent().find("> a").css("background-position", "right top");
					});
			}
			else{
				$(this).parent().parent().find("li > ul").slideUp("slow",function(){
						$(this).parent().find("> a").css("background-position", "right top");
					});
				$(this).parent().find("> ul").slideDown("slow",function(){
						$(this).parent().find("> a").css("background-position", "right bottom");
					});
			}
			
		});
		
});


function showMenu(){
	$(".menuhidden").slideDown();
	$(".fade").fadeIn();
}

function hideMenu(){
	$(".menuhidden").slideUp();
	$(".menu").removeClass("selected");
	$(".fade").fadeOut();
}

function showSearch(){
	$(".buscarhidden").slideDown();
	$(".fade").fadeIn();
}

function hideSearch(){
	$(".buscarhidden").slideUp();
	$(".buscar").removeClass("selected");
	$(".fade").fadeOut();
}