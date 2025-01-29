import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client" 
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu.js";
import About from "./Components/About";
// import Grocery from "./Components/Grocery.js";

const Grocery=lazy(() =>import("./Components/Grocery.js")); //This is how we will import lazy component;

  const AppLayout=() =>{
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
    //Parent Route
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
      path:"/grocery",
      element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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



