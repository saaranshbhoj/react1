//Cart componnet whenever we will click Add Button the store value will be updated and it should display here;
//we have updated our state of cart slice using useDispatch hook and by using addItems action inside ItemList Components;

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import CartItems from "./CartItems";


//Now we want to extract value from the store and display into the cart-component.
const Cart=() =>{
    //Subscribing to the store and extracting array inside items of cart-slice
    const cartItems=useSelector((store) =>store.cart.items) //subscribing to the store;
    // console.log(cartItems);

    //Dispatching another action clearCart which is initialized inside cart-slice;
    const dispatch=useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
    }

   

    return(
        <div>
            <div className="text-center font-bold text-2xl m-4 p-4">
                Cart
            </div>
            <div className="text-center m-4 p-4">
                <button className="p-2 border-4 border-amber-600 font-bold rounded-lg shadow-lg cursor-pointer "
                onClick={handleClearCart}>
                    Clear Cart</button>
            </div>
            <div className="w-6/12 m-auto border-4 border-amber-600 rounded-lg">
                {cartItems?.map((object,index) =>(<CartItems key={index} carditems={cartItems} index={index}/>))}
              
            </div>
        </div>
    )
}
export default Cart;