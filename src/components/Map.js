import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '400px'
};

const center = {
  lat: 36.840738486485776,
  lng: -84.84039695482402
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDZH6BRK5ZvLyjH_0EG4_mV2ymP-MKLLP0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
  ) : <></>
}
export default React.memo(Map);