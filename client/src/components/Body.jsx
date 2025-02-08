import { Outlet } from "react-router";
import Navbar from "./Navbar";
const Body = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default Body;