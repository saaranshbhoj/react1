import Rest1 from "./RestaurantCard"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Body=() =>{
   const [resinfo,setresinfo]=useState([]);
   const[search,setsearch]=useState("");
   useEffect(() =>{
    fetchData();
   },[]);
   const fetchData= async () =>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1755236&lng=79.51959389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log(json);
    setresinfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //We only took Restaurant Info;
   
}
    return(
        <div className="body">
            <div className="filter p-4 m-4 flex">
                <button className="button border-4 border-pink-100 bg-pink-200 cursor-pointer rounded-lg" onClick={() =>{
                    filteredList=resinfo.filter((x) =>(x.info.avgRating>4.2));
                    console.log(filteredList);
                    setresinfo(filteredList);
                    
                }}>Top Rated Restaurant in City</button>
            </div>
            <div className="searchbox p-4 m-4">
                <input 
                className="border border-black" 
                type="text" value={search} onChange={(e) =>(setsearch(e.target.value))}></input>
                {console.log("Body Component Re-Rendered!")}
                <button className="px-4 bg-pink-200 rounded-4xl " onClick={() =>{
                     searchresult=resinfo.filter((x) =>(x?.info?.name.toLowerCase().includes(search.toLowerCase())));
                    console.log(searchresult);
                    setresinfo(searchresult); 

                }}>SEARCH</button>
            </div>
            <div className="flex flex-wrap rounded-lg ">
                 {resinfo?.map((x) =>(
                   <Link to={"/menu/" +x.info.id}><Rest1 key={x.info.id} resdata={x}></Rest1></Link>))}
            </div>
        </div>
    )
}
export default Body;