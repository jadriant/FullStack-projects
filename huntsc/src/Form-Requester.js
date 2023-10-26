import { doc, setDoc } from "firebase/firestore";
import { useState, React } from 'react';
import { db, auth } from './firebase';
import { collection, addDoc } from "firebase/firestore";
//import { Outlet, Link } from "react-router-dom";
import './App.css';
import './Form-Requester.css';
import './navbar.css';
import {Link} from "react-router-dom";


function NameForm({user}) {
  const [organization, setOrganization] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const[email, setEmail] = useState("");
  function handleSubmit(event) {
    alert('A form was uiefhishfhsifhhifherhi: ' + organization);

    addDoc(collection(db, "Requests"), {
      organization: organization,
      info:info,
      date:date,
      description: description,
      email:email
    }).then(console.log( organization + info + date +  description));
    // code to redirect back to the venue list page
  }
  //here I will call the from.js file
  const handleChangeInput = (event) =>{
    const {id , value} = event.target;
    if(id === "org"){
      setOrganization(value);
    }
    if(id === "info"){
      setInfo(value);
    }
    if(id === "date"){
      setDate(value);
    }
    if(id === "des"){
      setDescription(value);
    }
    if(id === "email"){
        setEmail(value);
      }
  }
  return (
    <div className="whole">
      <div className="navbar">
        { <div className = "user-message">
          <small> Heyyyy, {user.displayName} </small> 
        </div> }
        <div className="add-form">
          <Link to="/form" className="FormButton">Add Venue</Link>

        </div>
        <div className="list">
          <Link to="/" className="FormButton">Venues</Link>

        </div>
        <div className = "add-form">
          <Link to = "/request_listing" className = "FormButton">View Requests</Link>
        </div>
        <div className="add-form">
          <Link id="signout" className="FormButton" to="/"
            onClick={() => auth.signOut()}>Sign Out
          </Link>
        </div>

      </div>
    <div className = "bigForm">
    <form>
        <h1>Request This Space</h1>
      <label>
        Organization Name:
        <input id = "org" type="text" name="organization"  placeholder = "Tell us about your organization!" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Contact Info
        <input id = "info" type="text" name="info" placeholder = "(XXX)XXX-XXXX" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Date:
        <br>
      </br>
        <input id = "date" type="date" name="date" placeholder = "When is your event? " onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Description:
        <input id = "des" type="text" name="des" palceholder = "Tell us a bit about your evnet!" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Email:
        <br>
      </br>
        <input id = "email" type="email" name="email" placeholder = "A good email." onChange={(e) => handleChangeInput(e)}/>
      </label>
      <br>
      </br>
      
      <Link to="/" onClick = {handleSubmit}> Submit </Link>
     
    </form>
    <div className = "FormButton">
      {/* <Link to="/"  className = "FormButton">View Events</Link> */}
      </div>
    </div>
    </div>
  );
};
export default NameForm;