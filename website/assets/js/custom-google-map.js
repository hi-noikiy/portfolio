(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        var uluru = {lat: 48.8105974, lng: 2.4247216};
                $(".map")
                  .gmap3({
                    zoom: 14,
                    center: uluru,
                     scrollwheel: false,
                    mapTypeId: "shadeOfGrey", // to select it directly
                    mapTypeControlOptions: {
                      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                    }
                  })
                
                    .marker({
                    position: uluru,
                    icon: "http://mhbthemes.com/marker/location-pin.png"
                })
    
                  .infowindow({
                    position: uluru,
                    content: "Maisons-Alfort",
                    pixelOffset: new google.maps.Size(0, -40)
                  })
                  .then(function (infowindow) {
                    infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
                  })
                  
                  
                  .styledmaptype(
                    "shadeOfGrey",
                    [
                        {"featureType": "water","elementType": "geometry","stylers": [{ "color": "#e9e9e9"},{"lightness": 17}]},
                        {"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},
                        {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},
                        {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},
                        {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},
                        {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},
                        {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},
                        {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},
                        {"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},
                        {"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},
                        {"elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                        { "featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},
                        {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},
                        {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness":17},{"weight": 1.2}]}
                    ],
                    {name: "Shades of Grey"}
                  );
                  

    });


}(jQuery));	