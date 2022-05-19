import React/* , { useState } */ from 'react';
import { GoogleMap, Marker, useLoadScript/* , InfoWindow  */} from '@react-google-maps/api';
/* import markersJson from "https://maps.googleapis.com/maps/api/place/textsearch/json?query=walmart&location=18.8528361%2C-99.1783595&radius=2000&key=AIzaSyCFfFHM_uUO6n_mmuUvzZCdPsFs9gP2Cl0"; */
import markersApi from "../../src/data/data-api.json";

export default function Map() {
    const { isLoaded } = useLoadScript({
        /* googleMapsApiKey:  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, */
        googleMapsApiKey:  "AIzaSyCFfFHM_uUO6n_mmuUvzZCdPsFs9gP2Cl0",
    });
    if (!isLoaded) return <div>Loading...</div> 


   /*  const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      }; */

    
    const center = {lat: 19.432608, lng: -99.133209}

    let sucursalJson = markersApi.results.map((item) => item.name)
    console.log(sucursalJson);

    return(
        <div>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerStyle={{
                    width: '900px',
                    height: '500px'
                }}
            >
                
                {markersApi.results.map(({ place_id, name, geometry, icon }) => (
                    <Marker
                    icon={icon}
                    key={place_id}
                    position={geometry.location}
                    onClick={() => console.log(name)}
                    /* onClick={() => handleActiveMarker(place_id)} */
                    
                    >
                    {/* {activeMarker === place_id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>{name}</div>
                        </InfoWindow>
                    ) : null} */}
  A                  </Marker>
                ))}  
                
            </GoogleMap>
    </div>
    )
}



