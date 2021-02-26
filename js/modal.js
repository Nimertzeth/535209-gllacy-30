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

    function feedbackForm(){
        var x = document.getElementById("feedback-form");
        x.style.display = "block"; 
        }
    function closeForm(){
        var x = document.getElementById("feedback-form");
        x.style.display = "none"; 
        }   
    $(document).click( function(e){
        if ( $(e.target).closest('.button-contacts').length || $(e.target).closest('.feedback-form').length ) {
        return;
        }
    $('.feedback-form').fadeOut();
}); 
