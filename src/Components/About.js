import React from "react";
import AboutClass from "./AboutClass";
import UserContext from "../utils/UserContext";
// import AboutClass from "./"
//Class-Based About Component;
class About extends React.Component{
    constructor(){
        super(); //Mandatory to Call;
       // console.log("Parent Constructor Called")
    }
    render(){
        //console.log("Parent Render Called")
        return(
            <div className="about">
                <h1>Foodie-Bay is the registered Trademark of SaaranshBhojPrivateLtd.</h1>
                <div>
                    {/* extracting objects from context inside class-based component; */}
                    <UserContext.Consumer>
                        {({loggedInUser}) =>(<h1 className="font-bold">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <AboutClass name="Akshay Saini (class)"/>
            </div>
        )
    }
    componentDidMount(){
        //console.log("Parent Component Mount")    }
        this.timer=setInterval(() =>{
            console.log("Namaste React");
        },1000);
 }
 componentWillUnmount(){
    clearInterval(this.timer); //cleanup function use for better performance;
 }
}

export default About;
