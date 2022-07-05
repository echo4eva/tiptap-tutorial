import React, { useState } from 'react';
import "./App.css";
import TipTap from './components/TipTap';
import parser from 'html-react-parser';

const App = () => {
  const [desc, setDesc] = useState('')
  return ( 
  <div className="App">
    <TipTap setDesc={setDesc}/>
    <div className="ProseMirror">
      {parser(desc)}
    </div>
  </div>
  ) 
}

export default App