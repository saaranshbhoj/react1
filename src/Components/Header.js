import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";

const Header=() =>{
    const [Login,setLogin]=useState("Login");

    const status=useOnlineStatus(); //Custom Hook;
   
    //extract our data inside Context;
    //useContext() is a react-hook;
    const {loggedInUser}=useContext(UserContext);

    // Subscribing to our store using Selector : useSelector is a hook;
    const cartItems=useSelector((store) =>store?.cart?.items);
    // console.log(cartItems);
    
    return(
        <div className="flex justify-between bg-orange-400 shadow-2xl m-2 mb-2 px-2" >
            <div className="w-100">
                <img src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li>Status:{status==true ?"🟢":"🔴"}</li>
                   <Link to="/"><li className="px-4 font-bold">Home</li></Link> 
                   <Link to="/about"><li className="px-4 font-bold">About</li></Link> 
                   <li className="px-4 font-bold"><a href="/contact">Contact</a></li>
                   <Link to="/cart">
                   <li className="px-4 font-bold cursor-pointer">🛒{cartItems?.length}</li>
                   </Link>
                   <li className="px-4 font-bold"><button className="login border border-black cursor-pointer" 
                   onClick={() =>(Login=="Login"? setLogin("LogOut") : setLogin("Login"))}>{Login} </button></li>
                   <li className="px-4 font-bold">User: {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;