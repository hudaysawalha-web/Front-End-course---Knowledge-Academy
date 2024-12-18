import React from 'react';
import './assest/css/styles.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contant';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

