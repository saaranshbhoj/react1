import Rest1,{withOpenLabel} from "./RestaurantCard"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";

const Body=() =>{
   const [resinfo,setresinfo]=useState([]);
   const [filteredList,setfilteredlist]=useState([]);
//    console.log(resinfo);
   const[search,setsearch]=useState("");
   useEffect(() =>{
    fetchData();
   },[]);
   const fetchData= async () =>{
    const data= await fetch(HOME_API)
    const json=await data.json();
    console.log(json);
    setresinfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //We only took Restaurant Info Array;
   setfilteredlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

//Output Component of the Higher Order Function;
const RestaurantOpen=withOpenLabel(Rest1);

   return(
        <div className="body">
            <div className="filter p-4 m-4 flex">
               
                <button className="button border-4 border-orange-300 bg-orange-300 cursor-pointer rounded-lg" onClick={() =>{
                    filter=resinfo.filter((x) =>(x.info.avgRating>4.2));
                    console.log(filter);
                    setfilteredlist(filter);
                    
                }}>Top Rated Restaurant in City</button>
            </div>
            <div className="searchbox p-4 m-4">
                <input 
                className="border border-black" 
                type="text" placeholder="Search..." value={search} onChange={(e) =>(setsearch(e.target.value))}></input>
                {console.log("Body Component Re-Rendered!")}
                <button className="px-4 bg-orange-400 rounded-4xl cursor-pointer" onClick={() =>{
                     searchresult=filteredList.filter((x) =>(x?.info?.name.toLowerCase().includes(search.toLowerCase())));
                    console.log(searchresult);
                    setfilteredlist(searchresult); 

                }}>SEARCH</button>
            </div>
            <div className="flex flex-wrap rounded-lg ">
                 {filteredList?.map((x) =>(
                   <Link key={x.info.id} to={"/menu/" +x.info.id}>
                    {x.info.isOpen==true? (<RestaurantOpen resdata={x}/> ) :(<Rest1  resdata={x}></Rest1>)}
                    </Link>))};
            </div>
        </div>
   ) }    

   

export default Body;