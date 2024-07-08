import { Outlet } from "react-router-dom";


const About = () => {
    return (  
        <>
        <h2> About us </h2>
        <h4> We are that we are this..we have a great vision..
            ..our mission is ....
        </h4>
        <Outlet/>
        </>
    );
}
 
export default About;