import { useLoaderData } from "react-router-dom";
import Food from "./Food";


const Foods = () => {
    const { meals } = useLoaderData();
    console.log(meals);
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto pb-10">
            <h3 className="text-3xl text-center font-bold py-8 text-white">Total Food Items Available : {meals.length} </h3>
            <div className="grid grid-cols-4 gap-6">
                {
                    meals.map(meal => <Food key={meal.idMeal} meal={meal}></Food>)
                }
            </div>
        </div>
        </div>
    );
};

export default Foods; 