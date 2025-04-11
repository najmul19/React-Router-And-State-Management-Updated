import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Category from "../Category/Category";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar />
            <div className="flex ">
                <div className="w-1/6">
                    <Category />
                </div>
                <div className="w-5/6">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;
