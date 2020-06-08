import renderAll from './renderInfo';

function renderMapNewCoord(e, map, marker) {
  const mapClickCoordinates = e.lngLat.wrap();
  const longitude = Math.round(mapClickCoordinates.lng * 10000) / 10000;
  const latitude = Math.round(mapClickCoordinates.lat * 10000) / 10000;
  const newCoordinates = [longitude.toString(), latitude.toString()];
  renderAll(newCoordinates);
  map.flyTo({ center: newCoordinates });
  marker.setLngLat(newCoordinates);
}

function readyCheck() {
  if (window.myObj.map !== undefined) {
    const { map } = window.myObj;
    const { marker } = window.myObj;
    map.on('click', (event) => {
      renderMapNewCoord(event, map, marker);
    });
  } else {
    setTimeout(readyCheck, 500);
  }
}

readyCheck();
