import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Carbrand from './Components/Carbrand';
import Lastname from './Components/Lastname';
import Phonepage from './Components/Phonepage';
import Topcities from './Components/Topcities';
import Mainpage from './Components/Mainpage';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Mainpage/>} />
      <Route path='/home' element={<Homepage/>} />
      <Route path='/phone' element={<Phonepage/>} />
      <Route path='/carbrands' element={<Carbrand/>} />
      <Route path='/lastname' element={<Lastname/>} />
      <Route path='/topcities' element={<Topcities/>} />
    </Routes>
  )
}

export default App