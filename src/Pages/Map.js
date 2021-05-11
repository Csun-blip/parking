
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";



const google = window.google = window.google ? window.google : {}

const markers = [
    {
      id: 1,
      name: "Kumaripati Parking Area",
      position: { lat: 27.6699, lng: 85.3204 }
    },
    {
      id: 2,
      name: "NewRoad Parking Area",
      position: { lat: 27.7020, lng: 85.3074 }
    },
    {
      id: 3,
      name: "Mangalbazar Parking Area",
      position: { lat: 27.6726, lng: 85.3249 }
    }
  ];

  
  function Map() {
    const [activeMarker, setActiveMarker] = useState(null);
  
    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };
  
    const handleOnLoad = (map) => {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);
    };
  
    return (
      <GoogleMap
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
      >
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    );
  }
  
  export default Map;


        


