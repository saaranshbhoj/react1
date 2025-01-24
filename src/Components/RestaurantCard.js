import { IMG_URL } from "../utils/constants";
//Functional Component of Restaurant Cards;

  const Rest1=(props)=>{
  const{resData}=props; 
  
  const { name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData.info;
    return(
      
      <div className="rest1">
        <div className="img1">
        <img src={IMG_URL + cloudinaryImageId}/>
        </div>
        <h1>{name}</h1>
        <h2>{cuisines}</h2>
        <h3>{costForTwo}</h3>
        <h4>{avgRating}</h4>
      </div>
    )
  }
  export default Rest1;