import React, { Component } from 'react';
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

class Card extends Component {
    render() {
        return(
            <section className='box-scroll'>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoWalmart} alt="" className='logo-tienda'/>
                    <a href="https://super.walmart.com.mx/productos?Ntt=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoAlsuper} alt="" className='logo-tienda'/>
                    <a href="https://www.alsuper.com/filtros?keyword=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoBodegaAurrera} alt="" className='logo-tienda'/>
                    <a href="https://despensa.bodegaaurrera.com.mx/search?name=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoChedraui} alt="" className='logo-tienda'/>
                    <a href="https://www.chedraui.com.mx/search?text=bafar&method=enter" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoSoriana} alt="" className='logo-tienda'/>
                    <a href="https://www.soriana.com/buscar?q=bafar&cid=&search-button=" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoHeb} alt="" className='logo-tienda'/>
                    <a href="https://www.heb.com.mx/catalogsearch/result/?q=bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoLacomer} alt="" className='logo-tienda'/>
                    <a href="https://www.lacomer.com.mx/lacomer/?gclid=website#!/item-search/287/bafar/false?p=1&t=0&succId=287&succFmt=100" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoElflorido} alt="" className='logo-tienda'/>
                    <a href="https://www.elflorido.com.mx/" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoMarqueo} alt="" className='logo-tienda'/>
                    <a href="https://merqueo.com.mx/mexico-df/super-ahorro/search/bafar" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoCityMarket} alt="" className='logo-tienda'/>
                    <a href="https://www.citymarket.com.mx/comprasbiencitymarket/" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoCalimax} alt="" className='logo-tienda'/>
                    <a href="https://tienda.calimax.com.mx/bafar?_q=bafar&map=ft" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoOxxo} alt="" className='logo-tienda'/>
                    <a href="https://www.oxxo.com/" target="_blank" rel="noopener noreferrer"><Button /></a>
                </div>
            </section>
        )
    }
}

export default Card;
