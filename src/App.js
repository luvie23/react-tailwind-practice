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
        <Route path='/' element={<div><Hero/> <div className='flex justify-center items-center bg-gradient-to-b from-[#0099ff] via-purple-300 to-slate-300 h-96'></div> <Shop/>
        <Carousel />
        </div>} />
        <Route path='/shop' element={<Shop/>} />

      </Routes>
    </>
  );
}

export default App;
