import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import Home from './pages/Home';
import Nav from './pages/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import MobileNav from './pages/MobileNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MobileNav />
    <Home />
    <Nav />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);