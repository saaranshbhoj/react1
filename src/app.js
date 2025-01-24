import React from "react";
import ReactDOM from "react-dom/client" 
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu.js";
import About from "./Components/About";



//Functional Component at the App-Layout Level;
const AppLayout=()=>{
  return(
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  )
} 
//Creating Children Routes;
const approuter=createBrowserRouter([
  {
    path:"",
    element:<AppLayout/>,
    children:[{
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/restaurant/:restaurantId", //":" is making the route dynamic in nature.
      element:<Menu/>
    }

    ],
    errorElement:<Error/>
  }])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>); //imported from react-router-dom library!



