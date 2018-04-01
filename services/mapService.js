angular.module("users")
.service("mapService", ["MAP_MARKER_URL", function(MAP_MARKER_URL){
	var _this = this;
	var markers = [];
	var map,infoWindow;
	_this.setMarker = setMarker;
    _this.removeMarker = removeMarker;
        
 
    function initMap() {        	
	    var mapOptions = {
	        center: new google.maps.LatLng(50, 2),
	        zoom: 2,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        scrollwheel: false
	    };
	       
        map = new google.maps.Map(document.getElementById("gmaps"), mapOptions);        
    }

    function setMarker(latitude, longitude, title, onclick) {
        var marker;
        var markerOptions = {            
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: title,
            icon: MAP_MARKER_URL
        };

        marker = new google.maps.Marker(markerOptions);
        markers.push(marker);
        
        google.maps.event.addListener(marker, 'click', onclick);        
    }

    function removeMarker(index) {        
        clearMarkers();
        markers.splice(index, 1);
        showMarkers();        
    }

    function clearMarkers() {
        setMapOnAll(null);
    }
        
    function setMapOnAll(map) {
        markers.forEach((marker, index) => {
            markers[index].setMap(map);
        });
    }

    function showMarkers() {
        setMapOnAll(map);
    }

    initMap();
}]);