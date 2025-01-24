import AboutClass from "./AboutClass";
import React from "react";
//class-Component of About Page;

class About extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="about">
                
                <h1>Foodie-Bay was establsihed in 2008 and is a Registered Trademark of SaaranshBhojPvtLtd</h1>
    
                <AboutClass name="Saaranshh"/>
                
            </div>
        )
    }
}
  

export default About;