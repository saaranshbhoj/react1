import ShimmerUI from "./ShimmerUI";
import Rest1 from "./RestaurantCard";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";



//Scope of this useState is upto this Body Functional Component;
//Data,setData
const Body=() =>{
  console.log("Body rendered!");
 
  array=useState([]);
  const[Data,setData]=array;

  const[search,setsearch]=useState("");
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData=async() =>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1755236&lng=79.51959389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json(); //Convert API to JSON; 
    console.log(json);
    setData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//Json object contains lot of Data=>extracted relevant data;
    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
       //Custom Hooks;
 let OnlineStatus=useOnlineStatus();
 console.log(OnlineStatus);
 if(OnlineStatus===false) return (<h1>Looks like you're Offline. Please Try your Internet Connection again!!</h1>)
  

  //Adding Shimmer-UI;
  
  //Using Ternary operator for conditional rendering;
   return Data?.length==0? <ShimmerUI/> :  (
     <div className="body">
      <div className="filter">
        <button className="button"
        onClick={() =>{
          resListfiltered=Data.filter((x) =>{return(x.info.avgRating>4.5)});
          console.log(resListfiltered);
          setfilteredRestaurant(resListfiltered);
        }}
        >Top Rated Restaurant in your locality</button>
      
        <div className="searchbox">
          <input type="text" value={search} onChange={(e) =>{
            setsearch(e.target.value)
          }}></input>
          <button className="searchbutton" onClick={() =>{
            
            const filterui=Data.filter((object) =>(object.info.name.toLowerCase().includes(search.toLowerCase())));
            setfilteredRestaurant(filterui);
            console.log(search);
          }}>SEARCH</button>
          
          
        </div>
      </div>
      
      <div className="rest-cards">
        {filteredRestaurant.map((resListObject) => {
          return(<Rest1 key={resListObject.info.id} resData={resListObject}/>)
        })}
      </div>
    </div>
  );
}
 
export default Body;