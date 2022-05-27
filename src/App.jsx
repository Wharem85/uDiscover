import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Reason from './components/Reason';
import DemoDay from './components/DemoDay';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Reason />
      <DemoDay />
    </div>
  );
}

export default App;
