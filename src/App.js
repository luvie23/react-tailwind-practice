import React from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Carousel from './components/Carousel';
import { Link, Route,  Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <div >
        <Navbar />
        
      </div>

      <Routes>
        <Route path='/' element={<div><Hero/> <Carousel /> <Shop/></div>} />
        <Route path='/shop' element={<Shop/>} />

      </Routes>
    </>
  );
}

export default App;
