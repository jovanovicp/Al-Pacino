function initMap() {
  var zemun = {lat: 44.848821, lng: 20.410778};
  var mapa = new google.maps.Map(
      document.getElementById('mapa'), {zoom: 18, center: zemun});
  var marker = new google.maps.Marker({position: zemun, map: mapa});
}