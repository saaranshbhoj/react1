 import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{},"This is Heading using core react🚀");
// console.log(heading);
//This way of creating <h>tag is lengthy. So we use JSX Format to speed up the development.

//html/xml type syntax!

//Difference between React Element and React Functional Compnent;
const heading=<h1>this is a react element using jsx🚀🚀</h1>

const Component=()=>(
    <div id="container">
        <h1 className="Heading">This is a react functional component🚀</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"))
//root.render(<Component/>);

//how to merge two react component:
const Title=() =>(
    <h1>This is example of combining react functional components🚀</h1>
)
const Component1=()=>(
    <div id="container">
        <Title/>
        <h1 className="Heading">This is a react functional component🚀</h1>
    </div>)
//root.render(<Component1/>);

//
let a=1000;
const Component2=()=>(
    <div id="container">
        {a} 
        <h1>{100+200}</h1>
        <Title/>
        <h1 className="Heading">This is a react functional component🚀</h1>
    </div>);
//root.render(<Component2/>);

//Inserting React elemnet into functional component;
const elem=<h1 id="child">This is a React Element</h1> //JSX Format
const Elem=()=>(
    <div id="con">
        {elem}
        <h1 id="fun">This is React Functional Component!🚀</h1>
    </div>
)
//root.render(<Elem/>);

//Push one react element into another;
const elem2=<h>This element will be pushed inside other element!</h>
const elem1=(
    <h1>
        {elem2}
        This is React Element!</h1>
)
//root.render(elem1)

//Pushing functional Component inside react element;
const Element=()=>(
    <h1>This is a Functional Component!!</h1>
)

const elem3=(<h>
    <Element/>
    <div style={{color:"red",FontSize:"20px"}}>We have added functional component inside react element.

    </div>
</h>) 
//root.render(elem3);