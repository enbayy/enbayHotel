import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import './components/navbar.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
