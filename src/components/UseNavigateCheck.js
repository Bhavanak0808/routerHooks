import { useNavigate } from "react-router-dom";


const UseNavigateCheck = () => {


    let navigate = useNavigate();

     //perform some check here and call the component wih the value specific to that check
    // impt.ly the sending info is not displayed in the location bar.
    let clickHandler = () => {
        // navigate('/locacheck');
        navigate('/locacheck',{state:{"name":"This is what I got from Use Navigation check-sp","id":45}});
    }


    return (
        <>
        <h4> Use Navigate Check</h4>
        <button onClick={clickHandler}> Click to go to UseLocation check</button>
        </>
     );
}
 
export default UseNavigateCheck;
