import React, { Component } from 'react';
import './Header.css'
import LogoBafar from '../../../src/assets/imgs/BAFAR_logo.png';

class Header extends Component {

    render() {
        return(
            <section className="header">
                <div className='container'>
                    <div className='row pt-4 pb-4'>
                        <div id="col-one" className='col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center'>
                            <h3 className='title'>ENCUENTRALO EN LÍNEA</h3>
                        </div>
                        <div id="col-two" className='col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-around align-items-center'>
                            <h3 className='title'>TIENDAS CERCANAS</h3>
                            <img src={LogoBafar} alt="" className='logoBafar'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Header;
