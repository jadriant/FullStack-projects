import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import Events from './indivListing.jsx';
import { Link } from "react-router-dom";
import './navbar.css';
import './venue_list.css';
import { auth } from './firebase';




function List({user}) {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const eventcol = collection(db, "Venue");
    getDocs(eventcol).then(snapshot => {
      const docsArray = snapshot.docs.map(d => { return d.data() })
      console.log(docsArray);
      setVenues(docsArray);
    });
  }, [])


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
      <div className = "title-message">
        <p className = "title">HuntSC</p>
        <h3 className = "tagline"> Get the party started with HuntSC - your ultimate venue-finding platform! </h3>
      </div>
      <div className = "whole-list">
        <div>
        {venues.map((e, index) => { 
            return <Events key={index} name={e.name} fryft={e.fryft} capacity={e.capacity} contact={e.contact} requirements={e.requirements} deposit={e.deposit} venue_price={e.venue_price} other={e.other}/>
        })}
        </div>
      </div>
    </div>
  );
}

export default List;
