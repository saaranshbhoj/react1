import { useRouteError } from "react-router-dom";

const Error=() =>{
    const error=useRouteError();
    console.log(error);
    return(
        <div className="error">
            <h1>Oopss!!!</h1>
            <h2>Wrong URL!!!!</h2>
            <h2>{error.status}</h2>
            <h2>{error.statusText}</h2>
        </div>
    )
}
export default Error;