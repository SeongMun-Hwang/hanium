function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(35.41450706599295, 129.49951098482583);
    var mapOptions = {
        center: myCenter,
        zoom: 12
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map);
}
