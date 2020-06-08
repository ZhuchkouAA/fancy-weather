mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1Y2hrb3VhYSIsImEiOiJja2FzOXhnbnUwaG54MnRtc2RlaHZrZWpqIn0.i105rOdEz30VEGpxrvUtlA';

function renderMap(coordinates) {
  if (window.myObj.isFirstLoad) {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: coordinates,
      zoom: 10,
    });
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    window.myObj.marker = marker;
    window.myObj.map = map;
    window.myObj.isFirstLoad = false;
  } else {
    const { map } = window.myObj;
    const { marker } = window.myObj;
    map.flyTo({ center: coordinates });
    marker.setLngLat(coordinates);
  }
}

export default renderMap;
