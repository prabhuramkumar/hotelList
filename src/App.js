import React from 'react';
import logo from './qantas-logo.png';
import HotelList from './components/hotelList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
      </header>
      <HotelList></HotelList>
    </div>
  );
}

export default App;
