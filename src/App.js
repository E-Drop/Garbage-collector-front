import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Donate from './pages/Donate';
import Collections from './pages/Collections';
import AuthProvider from './components/AuthProvider';
import firebase from 'firebase';
import Profile from './pages/Profile';
import './App.css';
require('dotenv').config()

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "finalboss-2993b.firebaseapp.com",
  projectId: "finalboss-2993b",
  storageBucket: "finalboss-2993b.appspot.com",
  messagingSenderId: "181778738338"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar data='data' />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/donate" component={Donate} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/collections" component={Collections} />
            <PrivateRoute path="/prueba" component={Profile} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
