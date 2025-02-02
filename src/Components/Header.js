import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
const Header=() =>{
    return(
        <div className="flex justify-between bg-pink-200 shadow-2xl m-2 mb-2 px-2" >
            <div className="w-100">
                <img src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                   <Link to="/"><li className="px-4">Home</li></Link> 
                   <Link to="/about"><li className="px-4">About</li></Link> 
                   <li className="px-4"><a href="/contact">Contact</a></li>
                    <li className="px-4"><button className="login border border-black cursor-pointer">Login </button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;