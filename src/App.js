import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Aboutme from './components/Aboutme/Aboutme';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Education from './components/Education/Education';
function App() {
  return (
    <div className="App">
      
      <Header/> 
      <Aboutme/>
      <Skills/>
      <Experiences/>
      <Education/>
    </div>
  );
}

export default App;
