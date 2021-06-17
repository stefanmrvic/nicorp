window.addEventListener("load", (event) => {
    //Map on Footer//
    var mymap = L.map('mapid', {attributionControl: false}).setView([44.79174382548834, 20.477597347590308], 16);

    var tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic3RlZmFubXJ2aWMiLCJhIjoiY2tpaHp3YjF0MGQ0NDJybWxuZzF6MHIzdCJ9.NIx8s8uOmLHFmBD0qSGoCw'
    }).addTo(mymap);

    mymap.scrollWheelZoom.disable();

    var marker = L.marker([44.79143382548834, 20.477597347590308]).addTo(mymap).bindPopup("Gospodara Vučića 57 / 6");
});