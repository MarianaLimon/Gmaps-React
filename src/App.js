import './App.css';

import Header from './components/header/Header';
import Map from './components/map/Map';


function App() {
  return (
    <div className="App">
        <div className='popup'>
          <Header/>
          <div className='container'>
            <div className='row pt-4 pb-4'>
                <Map />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
