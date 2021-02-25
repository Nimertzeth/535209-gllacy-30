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
