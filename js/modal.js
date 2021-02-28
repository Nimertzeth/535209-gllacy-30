function basketForm(){
 	var modalBasket = document.getElementById("modal-basket");
 	modalBasket.style.display = "grid"; 
	}
function loginForm(){
 	var modalPersonal = document.getElementById("modal-personal");
 	modalPersonal.style.display = "block"; 
	}
function seachForm(){
 	var modalSeach = document.getElementById("modal-seach");
 	modalSeach.style.display = "block"; 
	}
function feedbackForm(){
    var feedbackForm = document.getElementById("feedback-form");
    feedbackForm.style.display = "block"; 
    }
function closeFeedback(){
    var feedbackForm = document.getElementById("feedback-form");
    feedbackForm.style.display = "none"; 
    }   
function closeForm(){
    var modalSeach = document.getElementById("modal-seach");
        modalSeach.style.display = "none";  
    var modalPersonal = document.getElementById("modal-personal");
        modalPersonal.style.display = "none"; 
    var modalBasket = document.getElementById("modal-basket");
        modalBasket.style.display = "none";             
    }    
