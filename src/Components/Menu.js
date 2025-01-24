import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";



//Restaurant Menu Card;
const Menu=() =>{
    console.log("Menu Component Rendered")
    const [resInfo,setresInfo]=useState(""); //to facilitate change in ui whenever the state changes;
    // const {restaurantId}=useParams();
    // console.log(restaurantId);
    
    
    useEffect(() =>{
        fetchMenu();
    },[]);
    // Callback Function fetch API Call data;
    const fetchMenu= async () =>{
        const menu= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1755236&lng=79.51959389999999&restaurantId=146085&catalog_qa=undefined&submitAction=ENTER");


        const Data= await menu.json();
        console.log(Data);
        setresInfo(Data);
    }
    const {name,avgRatingString,costForTwoMessage,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info|| {}; 
    const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| {};
    console.log(itemCards);
   
    
    
    return(
        <div className="menu">
            <div className="menu-header">
            <h1>{name}</h1>
            <h2>{avgRatingString}</h2>
            <h2>{costForTwoMessage}</h2>
            <h3>{cuisines}</h3>
            </div>
            <div className="menu-items">
                <h2>Menu</h2>
              {itemCards?.map((item) =>(
                <li key={item?.card?.info?.id}>{(item?.card?.info?.name)}- {"Rs   "}{(item?.card?.info?.price/100)}</li>

              ))}
            </div>
            
        </div>
    )}
export default Menu;