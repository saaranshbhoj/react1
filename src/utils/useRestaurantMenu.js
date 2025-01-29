import { useEffect, useState } from "react";

const useRestaurantMenu=() =>{
    const [resInfo,setresInfo]=useState();
    useEffect(() =>{
        fetchMenu();
    },[]);
    const fetchMenu= async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1755236&lng=79.51959389999999&restaurantId=148023&catalog_qa=undefined&submitAction=ENTER")
        const js= await data.json();
        setresInfo(js);
        
    }
    return resInfo;
}
export default useRestaurantMenu;
