import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(restaurantId) =>{
     const [resInfo,setresInfo]=useState(null);
    useEffect(() =>{
        fetchMenu();
    },[]);
    const fetchMenu= async () =>{
        const data= await fetch(MENU_API+restaurantId);
        const js= await data.json();
        console.log(js);
        setresInfo(js);
        
    }
    return resInfo;
}
export default useRestaurantMenu;

