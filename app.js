const heading=React.createElement("h1",{},"This is Hello World from react!!");
console.log(heading)
const root=ReactDOM.createRoot(document.getElementById('root'));
// to create h1 tag inside <div> tag

const heading1=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},'this is h1 tag inside nested <div>tags'),
    React.createElement("h2",{},'this is second h2 tag inside <div>tag')]
     )
);
const root1=ReactDOM.createRoot(document.getElementById('root'));
root1.render(heading1);
