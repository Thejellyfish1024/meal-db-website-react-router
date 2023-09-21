/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Food = ({ meal }) => {
    const { strMeal, idMeal, strMealThumb } = meal;
    return (
        <div className="border-2 border-purple-900 p-4 rounded-lg text-center text-white flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl font-bold ">Name : {strMeal}</h3>
            <img className="w-40" src={strMealThumb} alt="" />
            <NavLink to={`/meal/${idMeal}`}>
                <button className="text-xl font-semibold bg-orange-700 py-2 px-4 rounded-lg hover:bg-red-800">Meal Details</button>
            </NavLink>
        </div>
    );
};

export default Food;