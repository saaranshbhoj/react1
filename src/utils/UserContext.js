//Global Object inside React
import { createContext } from "react";

//createContext takes in objects inside it which can be accessed anywhere inside the application;
const UserContext=createContext({
     loggedInUser : "default User "
 });
 export default UserContext;