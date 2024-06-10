import {Outlet} from "react-router-dom";
import Menu from "../components/Menu";
import "./MainLayout.css"; // Import CSS for styling

const MainLayout = () => {
    console.log("MainLayout component rendered");
    return (
        <div className="main-layout">
            <>
                <Menu/>
                <Outlet/>
            </>
        </div>
    );
};

export default MainLayout;
