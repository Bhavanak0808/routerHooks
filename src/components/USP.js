import { useSearchParams } from "react-router-dom";


const USP = () => {


    let [searchParams,setSearchParams] = useSearchParams()

    // http://localhost:3000/usp?name=Bhavana&id=5
    // http://localhost:3000/usp?name=Bhavana&email=kbhavana%40i-connectresources.com
    // http://localhost:3000/usp 
    
    console.log(searchParams.get("id"));
    console.log(searchParams.get("name"));


    return (
        <>
        <h1> Welcome to Use Search Params hook</h1>
        <h3> Check console</h3>
        </>
     );
}
 
export default USP;