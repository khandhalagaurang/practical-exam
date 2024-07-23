import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Input from './Redux/Input'
import Display from './Redux/Display'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './component/Navbar';
import RoomList from './component/RoomList';
import RoomDetail from './component/RoomDetail';
import ReservationForm from './component/ReservationForm';
import ReservationList from './component/ReservationList';


import GoogleAuth from './GoogleAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
         <div className="Main-Cont">
        <div className='Full'>
          <div className="Navbar">
             <Navbar />          </div>
          <Routes>
            <Route path='/' element={<RoomList />} />
            <Route path='/Roomdetail' element={<RoomDetail />} />
            <Route path='/Reservationform' element={<ReservationForm />} />
            <Route path='/Reservationlist' element={<ReservationList />} />
          </Routes>
        </div>
      </div>
      <Input/>
      <Display/>

      <GoogleAuth/>

      {/* json server link
      http://localhost:5000/student */}
    </>
  )
}



export default App