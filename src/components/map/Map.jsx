import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { useEffect } from "react";

import './Map.css'
import './Card.css';


import Button from '../button/Button';
import logoWalmart from '../../assets/imgs/walmart.jpg';
import logoSoriana from '../../assets/imgs/soriana.jpg';
import logoCityMarket from '../../assets/imgs/city.jpg';
import logoAlsuper from "../../assets/imgs/alsuper.jpg";
import logoBodegaAurrera from "../../assets/imgs/bodega.jpg";
import logoChedraui from "../../assets/imgs/chedraui.jpg";
import logoHeb from "../../assets/imgs/heb.jpg";
import logoLacomer from "../../assets/imgs/lacomer.jpg";
import logoElflorido from "../../assets/imgs/elflorido.jpg";
import logoMarqueo from "../../assets/imgs/merqueo.jpg";
import logoCalimax from "../../assets/imgs/calimax.jpg";
import logoOxxo from "../../assets/imgs/oxxo.jpg";


export default function Map() {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setCenter({lat: position.coords.latitude, lng: position.coords.longitude});       
            updateBrand('Supercenter');
           
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
    function updateBrand(brand) {
        setJsonLoaded(false);

        //let url="https://bafar1.wpengine.com/api/data.php?query="+brand+"&location="+center.lat+"%2C"+center.lng;
        let url="http://desarrollo.centralmedia.com.mx/bafar/data.php?query="+brand+"&location="+center.lat+"%2C"+center.lng;
            fetchJSON(url).then(json => {
                setMarkersApi(json);
                setJsonLoaded(true);
        });
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

    <div className='row pt-4 pb-4'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
        <section className='box-scroll'>
                <div className='card-shop'>
                    <img src={logoWalmart} alt="" className='logo-tienda' onClick={updateBrand.bind(this,"Supercenter")}/>
                    <a href="https://super.walmart.com.mx/productos?Ntt=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoAlsuper} alt="" className='logo-tienda'/>
                    <a href="https://www.alsuper.com/filtros?keyword=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoBodegaAurrera} alt="" className='logo-tienda'/>
                    <a href="https://despensa.bodegaaurrera.com.mx/search?name=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoChedraui} alt="" className='logo-tienda' onClick={updateBrand.bind(this,"Chedraui")}/>
                    <a href="https://www.chedraui.com.mx/search?text=bafar&method=enter" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoSoriana} alt="" className='logo-tienda'/>
                    <a href="https://www.soriana.com/buscar?q=bafar&cid=&search-button=" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoHeb} alt="" className='logo-tienda'/>
                    <a href="https://www.heb.com.mx/catalogsearch/result/?q=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoLacomer} alt="" className='logo-tienda'/>
                    <a href="https://www.lacomer.com.mx/lacomer/?gclid=website#!/item-search/287/bafar/false?p=1&t=0&succId=287&succFmt=100" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoElflorido} alt="" className='logo-tienda'/>
                    <a href="https://www.elflorido.com.mx/" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoMarqueo} alt="" className='logo-tienda'/>
                    <a href="https://merqueo.com.mx/mexico-df/super-ahorro/search/bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoCityMarket} alt="" className='logo-tienda'/>
                    <a href="https://www.citymarket.com.mx/comprasbiencitymarket/" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoCalimax} alt="" className='logo-tienda'/>
                    <a href="https://tienda.calimax.com.mx/bafar?_q=bafar&map=ft" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop'>
                    <img src={logoOxxo} alt="" className='logo-tienda'/>
                    <a href="https://www.oxxo.com/" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
            </section>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
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
                        onClick={() => {setActiveMarker(null);handleActiveMarker(place_id);}}
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
    </div>
            
    )
}
