
//Passing Multiple different props to child component makes it reusable and scalable!!
const Rest1=(props) =>{
    
    const {resdata}=props;
    const{name,cuisines,avgRating,costForTwo,cloudinaryImageId}= 
    resdata?.info|| {};
   
    return(
        <div className=" m-4 p-4 min-w-[200px] bg-gray-200 shadow-2xl rounded-lg w-auto">
            <img className="rounded-lg size-28 w-auto "src={"https:media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId}></img>
            <h1 className="font-extrabold py-2 text-lg"> {name} </h1>
            <h2 className="font-bold">{cuisines?.join()}</h2>
            <h2 className="font-bold">{avgRating}</h2>
            <h2 className="font-bold">{costForTwo}</h2>
        </div>
    )
}
export default Rest1;
