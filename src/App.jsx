import { useState } from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Products from './components/Products/Products.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import About from './components/About/About.jsx'
import Mission from './components/Mission/Mission.jsx'
import Vision from './components/Vision/Vision.jsx'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home name={'Mohamed'} increaseVal={500} />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />}>
          <Route index element={<Mission />} />
          <Route path='mission' element={<Mission />} />
          <Route path='vision' element={<Vision />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
