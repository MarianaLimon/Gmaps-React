import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
/* import markersJson from "https://maps.googleapis.com/maps/api/place/textsearch/json?query=walmart&location=18.8528361%2C-99.1783595&radius=2000&key=AIzaSyCFfFHM_uUO6n_mmuUvzZCdPsFs9gP2Cl0"; */
import markersApi from "../../src/data/data-api.json";

export default function Map() {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    /* const [mapRef, setMapRef] = useState(null) */

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

    if (!isLoaded) { return <div>Loading...</div> }

    const center = {lat: 19.432608, lng: -99.133209}


    return(
        <div>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerStyle={{
                    width: '900px',
                    height: '500px'
                }}
                /* onLoad={ (mapRef) => setMapRef(mapRef)} */
            >
                
                {markersApi.results.map(({ place_id, name, geometry, icon, business_status}) => (
                    <Marker
                    icon={icon}
                    key={place_id}
                    position={geometry.location}
                    /* onClick={() => console.log(name)} */
                    onClick={() => handleActiveMarker(place_id)}
                    >
                    {activeMarker === place_id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>
                            {name}
                            <br/>
                            {business_status}
                        </div>
                        </InfoWindow>
                    ) : null}
                    </Marker>
                ))}  
                
            </GoogleMap>
    </div>
    )
}



