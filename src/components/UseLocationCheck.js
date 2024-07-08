import { useLocation } from "react-router-dom";


const UseLocationCheck = () => {
    let loca = useLocation();
    return (  
        <>
        <h3> This is use Location check</h3>
        
        {/* {loca.state.name}<br/> {loca.state.id}  */}
        {loca.state?loca.state.name:"if u want data come from navcheck"}<br/> {loca.state?loca.state.id:"if u want data come from navcheck"}
        </>
    );
}
 
export default UseLocationCheck;