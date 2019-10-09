import React from 'react';

import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Contact 
    name = "Anita Sutton"
    avatar = "https://images.japan-experience.com/guide-japon/22403/s380x516/mario_3d_tanuki.jpg"
    online = {true} 
    />
    <Contact 
    name = "Jim George"
    avatar = "https://www.sccpre.cat/mypng/detail/170-1701002_ice-climber-ds-png-download-toad.png"
    online = {true}
    />
    <Contact 
    name = "Charlotte Ryan"
    avatar = "https://66.media.tumblr.com/d95ea141222d4d8f6e9e3389d4924665/tumblr_p86027STvT1tc0tabo9_250.png"
    online = {false}
    />  
      </header>
    </div>
  );
}

export default App;
