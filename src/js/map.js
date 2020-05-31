mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1Y2hrb3VhYSIsImEiOiJja2FzOXhnbnUwaG54MnRtc2RlaHZrZWpqIn0.i105rOdEz30VEGpxrvUtlA';
function renderMap(coordinates) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: coordinates,
    zoom: 10,
  });
  const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
}

export default renderMap;
