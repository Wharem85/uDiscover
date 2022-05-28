import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Reason from './components/Reason';
import DemoDay from './components/DemoDay';
import Text from './components/Text';
import Discover from './components/Discover';
import Plan from './components/Plan';
import Form from './components/Form';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Discover />
      <Header />
      <Home />
      <Reason />
      <DemoDay />
      <Text />
      <Plan />
      <Form />
    </div>
  );
}

export default App;
