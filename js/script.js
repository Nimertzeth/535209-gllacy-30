        function setSlide(k) {
            document.querySelectorAll('.slide').forEach(slide=>{slide.style.display = "none"});
            document.getElementById("slide"+k).style.display = "block";
            document.body.style.setProperty("--slide-background","var(--background-"+k+")");
        }
        let i = 0;
        setInterval(function timer() {
                i++;
                    if (i == 1) {radio2.checked = true,setSlide(2);
                    }
                    if (i == 2) {radio3.checked = true,setSlide(3);
                    }
                    if (i == 3) {radio1.checked = true,setSlide(1),i = 0;
                    }
            }, 3000);   
function basketForm(){
 	var modalBasket = document.getElementById("modal-basket");
 	modalBasket.style.display = "grid"; 
	}
function loginForm(){
 	var modalPersonal = document.getElementById("modal-personal");
 	modalPersonal.style.display = "block"; 
	}
function searchForm(){
 	var modalSearch = document.getElementById("modal-search");
 	modalSearch.style.display = "block"; 
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
    var modalSearch = document.getElementById("modal-search");
        modalSearch.style.display = "none";  
    var modalPersonal = document.getElementById("modal-personal");
        modalPersonal.style.display = "none"; 
    var modalBasket = document.getElementById("modal-basket");
        modalBasket.style.display = "none";             
    }    
                    var map;
                    var marker;
                    function initMap ()
                      {
                      map = new ymaps.Map("yandexmap", {
                        center: [59.939275, 30.329199],
                        zoom: 16
                        });
                      map.behaviors.disable('scrollZoom');
                      marker = new ymaps.Placemark([59.938635, 30.323118], {
                        balloonContent: 'Маленькая иконка'
                            }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/icons/map_mark.png',
                        iconImageSize: [80, 140],
                        iconImageOffset: [-37, -130],
                            })
                      map.geoObjects.add(marker);
                        }
                      ymaps.ready(initMap);
