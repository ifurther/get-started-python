window.onload = function () {
	//var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	//	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	//});
	var map  = L.map('my-map').setView([24.105497, 120.597366], 7);
	var basemap = L.tileLayer('https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
    //$.getJSON("census.geojson", function(data) {

    //var geojson = L.geoJson(data, {
    //  onEachFeature: function (feature, layer) {
    //    layer.bindPopup(feature.properties.Area_Name);
    //  }
    //});


    //var map = L.map('my-map')
    //.fitBounds(geojson.getBounds());
	
    //basemap.addTo(map);
    //geojson.addTo(map);
  //});

};

