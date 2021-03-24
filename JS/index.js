const myMap = L.map('mapid').setView([48.059972, 23.346952], 25);

popup = L.popup()
    .setLatLng([48.059972, 23.346952])
    .setContent('<p>Hello world!<br />This is my favorite plase.</p>')
    .openOn(myMap);

L.marker([48.059972, 23.346952]).addTo(myMap)
    .bindPopup("sanatorium SHAYAN!!!")
    .addTo(myMap);


const circle = L.circle([48.059972, 23.346952], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(myMap);

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

myMap.on('click', onMapClick);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYW5hc3Rhc2lpYWtvbGlhZGEiLCJhIjoiY2ttZ2kzMTFmMTZyZzJycDV1NXQ1amM3aCJ9.8YGXASofT307RUkOHdj6IQ"
}).addTo(myMap);

