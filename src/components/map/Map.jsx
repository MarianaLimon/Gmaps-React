import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { useEffect } from "react";

import './Map.css'


export default function Map() {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setCenter({lat: position.coords.latitude, lng: position.coords.longitude});       
            //let url="https://bafar1.wpengine.com/api/data.php?query=all&location="+position.coords.latitude+"%2C"+position.coords.longitude;
            let url="https://cursosobesidad.mx/bafar/api/data.php?query=all&location="+position.coords.latitude+"%2C"+position.coords.longitude;
            fetchJSON(url).then(json => {
                setMarkersApi(json);
                setJsonLoaded(true);
              });
            /*
            fetch(url)
            .then(response => {
            return response.json();
            })
            .then(jsondata => {
                console.log(jsondata);
                setMarkersApi(jsondata);
                setJsonLoaded(true);
            });
            */
           
        });
    }, []);
    const [center, setCenter] = useState({lat: 19.432608, lng: -99.133209})
    const [jsonLoaded, setJsonLoaded] = useState(false);
    const [markersApi, setMarkersApi] = useState({});
    
    async function fetchJSON(url) {
        console.log(url);
        const response = await fetch(url);
        const markers = await response.json();
        console.log(markers);
        return markers;
      }

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDc6daoUWkjfA8GofqZeLv11iNQfxGFRlE",
    })

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };
    if (!isLoaded) { return <div>Cargando..</div> }
    if (!jsonLoaded) { return <div>Cargando...</div> }

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
                zoom={14}
                center={center}
                mapContainerStyle={{
                    width: '100%',
                    height: '500px'
                }}
            >
                <Marker
                        key="user"
                        position={center}
                    ></Marker>   
                {arrayMarkersApi.map(({ place_id, name, geometry, formatted_address, opening_hours}) => (
                    <Marker
                        icon="//bafar1.wpengine.com/wp-content/uploads/2022/05/bafar.png"
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
