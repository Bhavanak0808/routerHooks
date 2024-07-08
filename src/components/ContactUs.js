import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ContactUs = () => {

let [searchParams,setSearchParams] = useSearchParams();
let[firstname,setFirstName]=useState();
let submitHandler=(e)=>{
// e.preventDefault();
console.log(searchParams.get("firstname"));
}

    return (
        <div>
            <h1> Contact us!</h1>
            <p> Contact us form here</p>
            <form onSubmit={submitHandler}>
                <input name="firstname"></input>
                <input name="lastname"/>
                <input type="submit"/>
            </form>
        </div>
     );
}
 
export default ContactUs;
 