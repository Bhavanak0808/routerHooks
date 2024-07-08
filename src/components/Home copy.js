import { Fragment } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <Fragment>
        <h1> Welcome to Routing again!!</h1>
        <Link to="/trainers/23"> Params Link to Trainers</Link>
        </Fragment>


     );
}
 
export default Home;