import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Foods from './Components/Foods';
import MealDetails from './Components/MealDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children:[
      {
        path:"/:foodItem",
        loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.foodItem}`),
        element:<Foods></Foods>
      },
      {
        path:"/meal/:mealId",
        loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element:<MealDetails></MealDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
