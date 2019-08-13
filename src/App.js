import React from 'react';
import logo from './qantas-logo.png';
import HotelListPage from './components/hotelListPage';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
      </header>
      <HotelListPage url={'https://api.myjson.com/bins/12878r'} keyword="sydney"></HotelListPage>
    </div>
  );
}

export default App;
