import { useParams } from "react-router-dom";


const Trainers = (props) => {
    let params = useParams();
    return (
        <>
        <h1> Welcome to Trainers Page</h1>
        <h3> props value - {props.name}</h3>
        <h3> {params.id} </h3>
        </>
     );
}
 
export default Trainers;
