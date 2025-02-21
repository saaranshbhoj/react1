import UserContext from "../utils/UserContext";
import { useContext } from "react";
import React from "react";
import { IMG_URL } from "../utils/constants";

//Passing Multiple different props to child component makes it reusable and scalable!!
const Rest1=(props) =>{
    const {loggedInUser}=useContext(UserContext);
    const {resdata}=props;
    const{name,cuisines,avgRating,costForTwo,cloudinaryImageId}= resdata?.info|| {};
 
    return(
        <div className=" m-4 p-4 min-w-[200px] bg-gray-200 shadow-2xl rounded-lg w-auto cursor-pointer">
            <img className="rounded-lg size-28 w-auto "src={IMG_URL +cloudinaryImageId}></img>
            <h1 className="font-extrabold py-2 text-lg"> {name} </h1>
            <h2 className="font-bold">{cuisines?.join()}</h2>
            <h2 className="font-bold">{avgRating}</h2>
            <h2 className="font-bold">{costForTwo}</h2>
            <h2 className="font-bold">User : {loggedInUser}</h2>
        </div>
    )
}
//Creating a Higher Order Function;
//input Component: <Rest1>
export const withOpenLabel=(Rest1) =>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-gray-600 text-white rounded-lg">Open</label>
                    <Rest1 {...props}/>
                
            </div>
        )
    }
}
export default Rest1;
