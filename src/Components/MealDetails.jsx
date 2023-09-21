import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
    const { meals } = useLoaderData();
    const mealDetails = meals[0];
    console.log(mealDetails);
    const { idMeal, strArea, strMealThumb, strMeal, strInstructions } = mealDetails;
    return (
        <div className="bg-black pb-14">
            <div className="border-2 w-3/5 mt-14  mx-auto border-purple-900 font-bold p-6 rounded-lg text-center text-white flex flex-col gap-4 justify-center items-center">
                <h3 className="text-xl">Name : {strMeal}</h3>
                <img className="w-60 rounded-lg" src={strMealThumb} alt="" />
                <p>Id : {idMeal}</p>
                <p>Area : {strArea}</p>
                <p><span className="text-red-600 font-bold text-2xl">Instructions :</span> {strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetails;