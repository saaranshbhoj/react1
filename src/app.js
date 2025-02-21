import React ,{lazy,Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client" 
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu.js";
import About from "./Components/About";
import NotFound from "./Components/NotFound.js"
import UserContext from "./utils/UserContext.js";
import Test from "./Components/Test.js";
import AppStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import Cart from "./Components/Cart.js";
// import Grocery from "./Components/Grocery.js";

const Grocery=lazy(() =>import("./Components/Grocery.js")); //This is how we will import lazy component;

  const AppLayout=() =>{
    const [userName,setuserName]=useState();
    //Authentication Logic
    useEffect(() =>{
      const data= {Name: "Saaransh Bhoj"}
      setuserName(data.Name)
    },[]);

  return(
   
   <Provider store={AppStore}>
      
       {/* //value={} is updating the existing value of object inside context; */}
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div >
        <UserContext.Provider value={{loggedInUser : "Mimansha"}}>
      <Header/>
      </UserContext.Provider>
      <Outlet/>
    </div>
    </UserContext.Provider>
    
    </Provider>
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
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/grocery",
      element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
    },
    
    {
      path:"/menu/:resId", //":" is making the route dynamic in nature.
      element:<Menu/>
    },
    {
      path:"/test",
      element:<Test/>
    },
    {
      path:"*",
      element:<NotFound/>
    }

    ],
    errorElement:<Error/>
  }])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>); //imported from react-router-dom library!



