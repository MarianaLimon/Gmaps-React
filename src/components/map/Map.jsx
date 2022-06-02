import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { useEffect } from "react";

import './Map.css'

/* import markersApi from "https://bafar1.wpengine.com/api/data.php?query=all&location=18.9821252%2C-99.2363548"; */
import markersApi from "../../../src/assets/data/data-api-v2.json";


export default function Map() {
    useEffect(() => {
        console.log("cargado");
        navigator.geolocation.getCurrentPosition(function(position) {
        setCenter({lat: position.coords.latitude, lng: position.coords.longitude});       
    });
    }, []);
    let [center, setCenter] = useState({lat: 19.432608, lng: -99.133209})
    let myRef = React.createRef();
    
    

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };
    if (!isLoaded) { return <div>Loading...</div> }

    let arrayMarkersApi = []
    Object.entries(markersApi).forEach(([key, value]) => {
        Object.entries(value.results).forEach(([key, value]) => {
            let repeated  = arrayMarkersApi.some(function(e) {
                return e.place_id===value.place_id;
            });  
            if(!repeated){
                arrayMarkersApi.push(value);
            }
        });
    });

    return(
        <div>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerStyle={{
                    width: '100%',
                    height: '500px'
                }}
                ref={myRef}
                /* onLoad={ (mapRef) => setMapRef(mapRef)} */
            >
                <Marker
                        key="user"
                        position={center}
                    ></Marker>   
                {arrayMarkersApi.map(({ place_id, name, geometry, formatted_address, opening_hours}) => (
                    <Marker
                        icon="http://bafar1.wpengine.com/wp-content/uploads/2022/05/bafar.png"
                        key={place_id}
                        position={geometry.location}
                        onClick={() => handleActiveMarker(place_id)}
                    >
                        {activeMarker === place_id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div className='div-info-window'>
                                <h3 className='title-info-window'>{name}</h3>
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
