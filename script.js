mapboxgl.accessToken = '{YOUR-ACCESS-TOKEN}';
//default public token

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy:true
});

function successLocation(position){
  console.log(position);
  setUpMap([position.coords.longitude, position.coords.latitude ]); //Mapbox has (longitude, latidue) format
}

function errorLocation(){
  setUpMap([-2.24, 53.48]);
}

function setUpMap(center){
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-right');

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  
  map.addControl(directions, 'top-left');
}

