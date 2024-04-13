import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div>
            {/* container m-auto */}
            <div className="">
            <Header/>
            <div className="min-h-[calc(100vh-120px)]">
            <Outlet></Outlet>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;