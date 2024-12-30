import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
       
        <Route path='/' element={<Header/>}></Route>
        <Route path='/about'  element={ <About />}></Route>
        <Route path='/Contact' element={ <Contact/>} ></Route>
        <Route path='/protfolio' element={<Portfolio />}></Route>    
        </Routes>
      <Footer/>
     
      
    </div>
  )
}
