import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from './firebase';
import { collection, addDoc } from "firebase/firestore";
// import { Outlet, Link } from "react-router-dom";
import './App.css';
import './addVenue.css';

function AddVenue({user}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [capacity, setCapacity] = useState("");
  const [deposit, setDeposit] = useState("");
  const [fryft, setFryft] = useState(true);
  const [other, setOther] = useState("");
  const [requirements, setRequirements] = useState("");
  const [venue_price, setVenue_Price] = useState("");

  function handleSubmit(event) {
    alert('A form was submitted: ' + name);
    // event.preventDefault();

    addDoc(collection(db, "Venue"), {
      name: name,
      contact: contact,
      capacity: capacity,
      deposit: deposit,
      fryft: fryft,
      other: other,
      requirements: requirements,
      venue_price: venue_price
    }).then(console.log(name + contact + capacity + deposit + fryft + other + requirements + venue_price));
  }
  //here I will call the form.js file
  const handleChangeInput = (event) =>{
    const {id , value} = event.target;
    
    if(id === "org"){
      setName(value);
    }

    if(id === "contact"){
      setContact(value);
    }

    if(id === "capacity"){
      setCapacity(value);
    }

    if(id === "deposit"){
      setDeposit(value);
    }

    if(id === "fryft"){
      
      setFryft(value);
    }

    if(id === "requirements"){
      setRequirements(value);
    }

    if(id === "other"){
      setOther(value);
    }

    if(id === "venue_price"){
      setVenue_Price(value);
    }
  }


  return (

    // Jadrian: This is the navigation bar 
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

      <div className="bigForm">
        <form onSubmit={handleSubmit}>

          <h1>Add a Venue</h1>
          <label>
            Organization Name
            <input id="org" type="text" name="organization" placeholder="Tell us your name or organizations name!" onChange={(e) => handleChangeInput(e)} required/>
          </label>

          <label>
            Contact Info
            {/* <input id = "info" type="text" name="info" placeholder = "(XXX)XXX-XXXX" onChange={(e) => handleChangeInput(e)}/> */}
            <input id="contact" type="text" name="info" placeholder="(XXX)XXX-XXXX" onChange={(e) => handleChangeInput(e)} required/>
          </label>

          
          <label>
            Venue Price
            <input id="venue_price" type="number" min="0" step="any" placeholder = "Ex: 1000" onChange={(e) => handleChangeInput(e)} required/>
          </label>
          <label>
            Security Deposit
            <input id="deposit" type="number" min="0" step="any" placeholder = "Ex: 300" onChange={(e) => handleChangeInput(e)} required/>
          </label>
          <label>
            Venue Capacity
            <input id="capacity" type="number" min="0" placeholder="What is your venue's capacity?" onChange={(e) => handleChangeInput(e)} required/>
          </label>

          <label>
            Venue Requirements
            <input id="requirements" type="text" name="des" placeholder="Requirements for your venue" onChange={(e) => handleChangeInput(e)} required />
          </label>
          <label>
            Other Info
            <input id="other" type="text" name="des" placeholder="Tell us a bit about your event!" onChange={(e) => handleChangeInput(e)} />
          </label>
          <label className='fryft2'>
            <div id="question">Within Fryft?</div>
            <div id="fryft3">
              <input id="fryft" type="checkbox" name="checkbox" value="" onChange={(e) => handleChangeInput(e)}/>
            </div>
          </label>
          <div className='button-cont'>

            <Link to="/" onClick={handleSubmit} className="submit-button"> Submit </Link>

            <button type = "reset" value = "reset" className = "finish-buttons"> Reset </button>
          </div>
          


          {/* TODO: onsubmit */}

        </form>


        <div className="FormButton">
          {/* <Link to="/"  className = "FormButton">View Events</Link> */}
        </div>
      </div>
    </div>
  );
};

export default AddVenue;