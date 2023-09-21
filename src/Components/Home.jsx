import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;