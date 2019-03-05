import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Donate from './pages/Donate';
import Collections from './pages/Collections';
import AuthProvider from './components/AuthProvider';
import Demo from './components/Demo';
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
          <Navbar data='data' />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/geoloco" component={Demo} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/donate" component={Donate} />
            <PrivateRoute path="/collections" component={Collections} />
            <PrivateRoute path="/" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
