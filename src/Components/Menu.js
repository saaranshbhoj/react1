import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


//Restaurant Menu Card;
const Menu=() =>{
    console.log("Menu Component Rendered")
    const [showIndex,setshowIndex]=useState(null);
   
    const {resId}=useParams();
    // console.log(resId);
    const resInfo=useRestaurantMenu(resId); //Using this Custom-Hook we have divided task of components Menu.js has now sole task of displaying data in the UI.
    
    
    const {name,avgRatingString,costForTwoMessage,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info|| {}; 
    // const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| {};
    // console.log(itemCards);
   
  const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>(c.card?.["card"]?.["@type"]==
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
// console.log(categories);
    
    return(
        <div className="menu">
            <div className=" text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h2 className="text-xl">{avgRatingString}</h2>
            <h2 className="text-xl">{cuisines?.join()}-{costForTwoMessage}</h2>
            {/* Controlled Component of React */}
            {categories?.map((c,index) =>(<RestaurantCategory
             key={c?.card?.card?.categoryId} 
             data={c?.card?.card}
             showItems={ index==showIndex && true}
             setshowIndex={() =>showIndex==index ? setshowIndex(null) : setshowIndex(index)}
             />))} 
            </div>
            
        </div>
    )}
export default Menu;