				function basketForm(){
 		var x = document.getElementById("modal-basket");
 		x.style.display = "grid"; 
		}
		$(document).click( function(e){
    		if ( $(e.target).closest('.modal-basket-button-full').length || $(e.target).closest('.modal-basket').length ) {
         	return;
    	}
    $('.modal-basket').fadeOut();
});	

				function loginForm(){
 		var x = document.getElementById("modal-personal");
 		x.style.display = "block"; 
		}
		$(document).click( function(e){
    		if ( $(e.target).closest('.modal-login-button').length || $(e.target).closest('.modal-personal').length ) {
         	return;
    	}
    $('.modal-personal').fadeOut();
});	

				function seachForm(){
 		var x = document.getElementById("modal-seach");
 		x.style.display = "block"; 
		}
		$(document).click( function(e){
    		if ( $(e.target).closest('.modal-seach-button').length || $(e.target).closest('.modal-seach').length ) {
         	return;
    	}
    $('.modal-seach').fadeOut();
});	