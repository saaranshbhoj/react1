import React from "react";
class AboutClass extends React.Component{
    constructor(props){
        super(props);
        //defining state;
        this.state={count:0}
            }
    render(){
        const {name}=this.props; 
        return(
            <div className="about">
                <h1>Count:{this.state.count}</h1>
                <button onClick={() =>{
                    this.setState({count:this.state.count+1})
                    console.log("rendering!")
                }}>Click Me!!</button>
                <h1>Name:{name}</h1>
                <h2>Place:Haldwani</h2>
                <h3>Contact: saaransh@08</h3>
            </div>
        )
    }
};
export default AboutClass;