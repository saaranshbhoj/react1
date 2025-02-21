//Component of the Category of Menu;
import ItemList from "./ItemList";

const RestaurantCategory=(props) =>{
    // console.log("Category Component Re-rendered")
    const {data,showItems,setshowIndex}=props;
    const {title,itemCards}=data;
   
 
    const list=data?.itemCards; //separate variable for storing the required props for ItemList Component;
    // console.log(list);   
   
    return(
        <div>
            <div className="w-6/12 bg-gray-100 shadow-lg p-4 m-auto my-8" >
            <div className="flex justify-between cursor-pointer" onClick={(e) =>(setshowIndex())}  >
            <span className="font-bold text-lg">{title}- ({itemCards.length})</span>
            <span>{"🔽"}</span>  
            </div>
            <div>
                {/* If showItems is true then only map otherwise not; */}
               {showItems &&  list?.map((list) =>(
                        <ItemList key={list?.card?.info?.id} item={list}/>
    
                    ))}
                
                 
                    </div>
              </div>
     </div>
             )
}
export default RestaurantCategory;