//This Component contains menu-item List for every corresponding Category;
import { ITEMS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";

const ItemList=({item}) =>{

    const dispatch=useDispatch();

//addItems is an action of the cart-slice;
   const HandleItems =() =>{
    //dispatch an action
    dispatch(addItems({item}));
    alert("Your Cart has been added Successfully!!")
   }
    
    // console.log(item);
    const {name,description,price,imageId,defaultPrice}=item?.card?.info || {};
    
    return(
        <div className="p-2 m-2 border-b-2">
            <div className=" font-bold text-lg text-left justify-between ">
            <span className="px-4 "> {name} ₹{price ? price/100 : defaultPrice/100}</span>  
            {/* Ternary operator condition for Price! */}
            <img className="w-28 h-20 rounded-lg" src={ITEMS_API +imageId}></img>
            <button className="font-semibold border solid bg-pink cursor-pointer rounded-lg shadow-2xl " 
            onClick={HandleItems} >Add+</button>
            </div>
            <div>
            
            <p className="text-xs text-left p-2">{description}</p>
            </div>
            
        </div>
         
         
    )
}
export default ItemList;