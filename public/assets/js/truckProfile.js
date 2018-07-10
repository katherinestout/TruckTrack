$(function() {
  getGeoLocaion();
  $("#locationBtn").on("click", function(event) {
    setTimeout(function() {
      updateLocation(myLoc);
    }, 5000);
  });
});

function getGeoLocaion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myLocation);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function myLocation(position) {
  var myLat = position.coords.latitude;
  var myLon = position.coords.longitude;
  myLoc = {
    lat: myLat,
    lon: myLon
  };
}

function updateLocation(latlon) {
  $.post("/profile/truck/setLocation", latlon, function(data) {
    if (data.lat && data.lon) alert("Location Updated!");
    else {
      alert("Location not found! try again...");
    }
  });
}