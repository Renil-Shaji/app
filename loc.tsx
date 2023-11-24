<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GPS Location Display</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
    <h1>GPS Location</h1>
    <p>Latitude: <span id="latitude">-</span></p>
    <p>Longitude: <span id="longitude">-</span></p>
    <button id="getLocation">Get Location</button>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="cordova.js"></script>
</body>
</html>


      
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Function to display the latitude and longitude
    function displayLocation(latitude, longitude) {
        document.getElementById('latitude').textContent = latitude.toFixed(6);
        document.getElementById('longitude').textContent = longitude.toFixed(6);
    }

    // Get the user's location when the button is clicked
    document.getElementById('getLocation').addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            displayLocation(latitude, longitude);
        }, function(error) {
            alert("Error getting location: " + error.message);
        });
    });
}

      body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

#map {
    width: 100%;
    max-width: 400px;
    height: 60vh;
    border: 1px solid #ccc;
    border-radius: 10px;
}

#getLocation {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#getLocation:hover {
    background-color: #0056b3;
}


      
