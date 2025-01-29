import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"; //import {url} from "path";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
  const[Button,setButton]=useState("Login");
  console.log("Header Rendered!")
  const status=useOnlineStatus();
  
  
    return(
      //UseState Local vaiable;
      
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Status:{status==true?"🟢":"🔴" } </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <div className="button">
              <button className="btn" onClick={() =>
              Button==="Login"?setButton("logout"):setButton("Login")
              }>{Button}</button>
            </div>
          </ul>
        </div>
      </div>
    )
  }
export default Header;