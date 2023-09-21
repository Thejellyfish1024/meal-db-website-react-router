import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-8 text-white">Meal-DB Website</h1>
            <div>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/beef"}>Beef</NavLink>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/chicken"}>Chicken</NavLink>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/desert"}>Desert</NavLink>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/lamb"}>Lamb</NavLink>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/pasta"}>Pasta</NavLink>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/pork"}>Pork</NavLink>
                <NavLink className="text-xl font-semibold bg-gray-200 py-2 px-10 rounded-xl mx-10" to={"/seafood"}>Seafood</NavLink>
            </div>
        </div>
    );
};

export default Header;