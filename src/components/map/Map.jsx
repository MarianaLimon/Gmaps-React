import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
/* import markersApi from "https://bafar1.wpengine.com/api/data.php?query=all&location=18.9821252%2C-99.2363548"; */
import markersJson from "../../../src/assets/data/data-api.json";

import markersApi from "../../../src/assets/data/data-api-v2.json";

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

    
    let newArray = []

    Object.entries(markersApi).forEach(([key, value]) => {
        Object.entries(value.results).forEach(([key, value]) => newArray.push(value))
    });

    console.log(newArray);




    
    return(
        <div>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerStyle={{
                    width: '100%',
                    height: '500px'
                }}
                /* onLoad={ (mapRef) => setMapRef(mapRef)} */
            >
                
                {markersJson.results.map(({ place_id, name, geometry, business_status, formatted_address}) => (
                    <Marker
                        icon="http://bafar1.wpengine.com/wp-content/uploads/2022/05/bafar.png"
                        key={place_id}
                        position={geometry.location}
                        /* onClick={() => console.log(name)} */
                        onClick={() => handleActiveMarker(place_id)}
                        
                    >
                        {activeMarker === place_id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)} options={{ width: 60}}>
                            <div>
                                <h3>{name}</h3>
                                <p>{business_status}</p>
                                <p>{formatted_address}</p>
                            </div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}  
                
            </GoogleMap>
    </div>
    )
}


