mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltd2FhcnQiLCJhIjoiY2s4cjg5Y3hvMDBvNjNkcG15dDBwNnlsMyJ9.PHBm0YR86aYLxo2G_x0klw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/kimwaart/ck8r935ad0zcy1ip9wxys83u6',
  center: [4.882280, 52.363811],
  zoom: 16,
  pitch: 45,
  bearing: -15,
});


map.addControl(new mapboxgl.NavigationControl()); 



map.on('load', function () {

  
  map.addSource('places', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': myLocationsList
    }
  });

  map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'icon-image': '{icon}-15', 
      'icon-size': 1.3,
      'icon-allow-overlap': true
    }
  });


  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.on('click', 'places', function(e) {
	var coordinates = e.features[0].geometry.coordinates.slice();
	var description = e.features[0].properties.description;
	 
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}
	 
	new mapboxgl.Popup()
	.setLngLat(coordinates)
	.setHTML(description)
	.addTo(map);
	});
	 
	map.on('mouseenter', 'places', function() {
	map.getCanvas().style.cursor = 'pointer';
	});
	 
	map.on('mouseleave', 'places', function() {
	map.getCanvas().style.cursor = '';
	});

});









/*var popup = new mapboxgl.Popup().setHTML('<h3>Ginjobar</h3><p>Cocktails, Wine and Sake.</p>');

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker()
  .setLngLat([4.882805, 52.362899])
  .setPopup(popup)
  .addTo(map);*/



/*map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  }),
  'top-right'
);

map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken
  }),
  'top-left'
);


*/

/*map.on('mouseenter', 'places', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    
    popup.setLngLat(coordinates)
         .setHTML(description)
         .addTo(map);
  });

  map.on('mouseleave', 'places', function () {
    popup.remove();
  });*/

