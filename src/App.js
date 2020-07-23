import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/home/Hero';
import Home from './components/layout/home/Home';
import Services from './components/layout/home/Services';
import Achievements from './components/layout/home/Achievements';
import Clients from './components/layout/home/Clients';
import HireMe from './components/layout/home/HireMe';
import BookForm from './components/layout/home/BookForm';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Home />
        <Services />
        <Achievements />
        <Clients />
        <HireMe />
        <BookForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
