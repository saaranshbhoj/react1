import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



//Restaurant Menu Card;
const Menu=() =>{
    console.log("Menu Component Rendered")
   
    // const {restaurantId}=useParams();
    // console.log(restaurantId);
    
    
   const resInfo=useRestaurantMenu(); 
    
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