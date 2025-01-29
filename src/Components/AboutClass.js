import React from "react";
//Class-Based About Component;
class AboutClass extends React.Component{

    constructor(props){
        super(props);
        this.state={Data:{}}//state variable "Data" with empty object;
        
       // console.log("child constructor called")
    }

    render(){
       // console.log("child render called")
        const {name,location,company,bio,avatar_url}=this.state.Data;
        return(<div className="about-class">
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>Company:{company}</h3>
            <h3>Bio:{bio}</h3>
            <img src ={avatar_url}></img>
            
            
        </div>)
      
            
    }
    async componentDidMount(){
        //console.log("child component did mount")
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const info= await data.json()
        console.log(info);
        this.setState({Data:info})
       
    }
    componentDidUpdate(){
        console.log("Componet Update")
    }
    componentWillUnmount(){
        console.log("Component Unmounted!")
    }
}

export default AboutClass;

