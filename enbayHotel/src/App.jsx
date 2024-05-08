import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import './components/navbar.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

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
