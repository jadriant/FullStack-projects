import logo from './logo.svg';
import NameForm from './Form-Requester';
import './App.css';
import List from './venue_list.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Venue from './addVenue.js';
import AddVenue from './addVenue';
import React, {useState, useEffect} from 'react';
import firebase from './firebase';
import Login from './Login.js';
import Request from './request_list.js'


function App() {

  
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
      <div className="App">


        <Routes>
          <Route path="/" element={user ? <List user={user}/> : <Login/>}/>
          <Route path="/form" element = {<AddVenue user={user}/>}/>
          <Route path="/request_form" element = {<NameForm user={user}/>}/>
          <Route path="/request_listing" element = {<Request user={user}/>}/>
        </Routes>
     </div>
    
  );
}

export default App;
