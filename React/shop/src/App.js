import React from 'react';
import './App.css';
import Menu from './componets/Menu/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>

      </Router>
    </div>
  );
}

export default App;
