import React from 'react'
import Candy from './components/candy/Candy'
import Error from './components/error/Error'
import ManuInfo from './components/pages/manuInfo/ManuInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manufacturers/:id" element={<ManuInfo/>}/>
        <Route path="/" element={<Candy/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
