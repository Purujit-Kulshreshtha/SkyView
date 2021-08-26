import React, {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import Temp from './pages/temp'
import LoginPage from './pages/login'
// import { Scrollbars } from 'react-custom-scrollbars-2';


const App = () => {

  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);


  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (

    <Router>
    	<Switch>
    		<Route path='/temp'>
	      		<Temp currentId={currentId} setCurrentId={setCurrentId}/>
      		</Route>
        <Route path='/login'>
            <LoginPage />
          </Route>
    		<Route path='/'>
	      		<Home />
      		</Route>
      		
 	 	</Switch>
   </Router>

    );
}

export default App;
 