import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import Home from './pages/Home';
import Nav from './pages/Nav';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <div class="content bg-dark">
      <About />
      <Services />
      <Portfolio />
      <Posts />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);