import React from "react";
import './indivListing.css';
import './App.css';
import {Link} from "react-router-dom";
import './navbar.css'


function Requestindiv(props) {
    // console.log(props.start)
        return (
            <div className = "whole">
                <div className = "OneListing">
                    
                    <div className = "header">
                        <h1>"{props.organization}"</h1>
                    </div>
    
                    <div className = "VenueInfo"> 
                        <h3>Date Requested: {props.date} </h3>
                        <h3>Info: {props.info}</h3>
                        <h3>Description of Request: {props.description}</h3>  
                    </div>

                </div>
            </div>
        );
}

export default Requestindiv;