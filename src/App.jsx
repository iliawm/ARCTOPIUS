import { HashRouter as Hash,Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import './App.css'


function App() {


  return (
    <>
    <Hash>
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    </Hash>

    </>
  )
}

export default App
