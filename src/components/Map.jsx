import React/* , { useState } */ from "react";
import { GoogleMap, Marker, useLoadScript/* , InfoWindow */ } from '@react-google-maps/api';

const markers = [
    {
      id: 1,
      name: "Chedraui Coacalco",
      position: {lat : 19.6449616, lng : -99.1079148}
    },
    {
      id: 2,
      name: "Walmart Express Viveros",
      position: { lat: 19.5315632, lng: -99.21999220000001 }
    },
    {
      id: 3,
      name: "MEXICO CHEDRAUI Tecámac",
      position: { lat: 19.6256661, lng: -99.03527459999999 }
    },
    {
      id: 4,
      name: "Walmart Express Lomas Verdes",
      position: { lat: 19.506799, lng: -99.2597529 }
    }
  ];


export default function Map() {
    const { isLoaded } = useLoadScript({
        /* googleMapsApiKey:  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, */
        googleMapsApiKey:  "AIzaSyCFfFHM_uUO6n_mmuUvzZCdPsFs9gP2Cl0",
    });
    if (!isLoaded) return <div>Loading...</div> 


    /* const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      }; */
    
    const center = {lat: 19.432608, lng: -99.133209}

    return(
        <div>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerStyle={{
                    width: '600px',
                    height: '400px'
                }}
            >
                
                {markers.map(({ id, name, position }) => (
                    <Marker
                    icon={"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png"}
                    key={id}
                    position={position}
                    onClick={() => console.log(name)}
                    /* onClick={() => handleActiveMarker(id)} */
                    >
                    {/* {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>{name}</div>
                        </InfoWindow>
                    ) : null} */}
                    </Marker>
                ))}   
                
            </GoogleMap>
    </div>
    )
} 