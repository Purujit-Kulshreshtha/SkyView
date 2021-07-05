import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages'
// import { Scrollbars } from 'react-custom-scrollbars-2';


const App = () => {
  return (

    <Router>
      <Home />
    </Router>

    );
}

export default App;
 