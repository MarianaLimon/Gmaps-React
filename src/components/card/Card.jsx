import React, { Component } from 'react';
import './Card.css';

import Button from '../button/Button';
import logoWalmart from '../../assets/imgs/logo-walmart.png';
import logoSoriana from '../../assets/imgs/logo-soriana.png';
import logoCityMarket from '../../assets/imgs/logo-citymarket.png';

class Card extends Component {
    render() {
        return(
            <section>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                    <img src={logoWalmart} alt="" className='logo-tienda'/>
                    <Button/>
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                <img src={logoSoriana} alt="" className='logo-tienda'/>
                    <Button />
                </div>
                <div className='card-shop d-flex justify-content-around align-items-center'>
                <img src={logoCityMarket} alt="" className='logo-tienda'/>
                    <Button />
                </div>
            </section>
        )
    }
}

export default Card;
