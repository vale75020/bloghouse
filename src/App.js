import React, { Component } from 'react';
import './App.css';
import Nav from './Nav' 
import {BrowserRouter  as Router,Route,Link} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import ArticleForm from './ArticleForm'
import Articles from './Articles'

import setAuthToken from "./axios-default"

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Nav />
       <Route exact path="/" component={Signup}  />
       <Route exact path="/login" component={Login} />
       <Route exact path="/add" component={ArticleForm} />
       <Route exact path="/articles" component={Articles} />
      
      </div>
      </Router>
    );
  }
}

export default App;
