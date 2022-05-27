import './App.css';

import Header from './components/header/Header';
import Card from './components/card/Card';
import Map from './components/map/Map';


function App() {
  return (
    <div className="App">
        <div className='popup'>
          <Header/>
          <div className='container'>
            <div className='row pt-4 pb-4'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                    <Card />
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                    <Map />
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
