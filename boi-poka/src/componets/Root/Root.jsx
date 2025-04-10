import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div>
            {/* <h3>Hello from Root</h3>
             */}
             <NavBar></NavBar>
                <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;