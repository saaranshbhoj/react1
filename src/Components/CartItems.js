//This component will display the cart-items details inside Cart-Component;
import { ITEMS_API } from "../utils/constants";
import { removeItems } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const CartItems=({carditems,index}) =>{
//     console.log(carditems);
//    console.log(index);

//create action to remove last item from the cart;
const dispatch=useDispatch();
const HandleRemoveItems=() =>{
    dispatch(removeItems());
}

    const {name,description,price,imageId,defaultPrice}=carditems?.[index]?.item?.card?.info || {};
    return(
       <div className="p-2 m-2 border-b-2">
        <button onClick={HandleRemoveItems}
        className="py-2 align-baseline border-2 border-solid border-amber-600 font-bold rounded-lg cursor-pointer">
            Remove-Items</button>
                   <div className=" font-bold text-lg text-left justify-between ">
                   <span className="px-4 "> {name} ₹{price ? price/100 : defaultPrice/100}</span>  
                   {/* Ternary operator condition for Price! */}
                   <img className="w-28 h-20 rounded-lg" src={ITEMS_API +imageId}></img>
                   </div>
                   <div>
                   
                   <p className="text-xs text-left p-2">{description}</p>
                   </div>
                   
               </div>
    )
}
export default CartItems;