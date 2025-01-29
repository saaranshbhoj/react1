//Imagine inside of this Large web-app we have food-delivery section and a Grocery section. These two verticals are in itself very large so to bundle them together in a single file is not recommended. We have to make some optimizations.

const Grocery=() =>{
    return(
        <h1>
            This is a Grocery-section of our web-app which contains smaller sub-components and features in itself. Therefore we can bundle Grocery-components together and Food Components together for better performance!
             </h1>
    )
}
export default Grocery;