"use client";

import { useEffect, useState } from "react";

export default function IdeaMeals({ ingredient }) {
  const [meals, setMeals] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setMeals(data.meals ? data.meals : []);
  };
  const fetchMealDetails = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    setMealDetails(data.meals.length > 0 ? data.meals[0] : null);
  };

  const loadMealIdeas = () => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
      setMealDetails(null);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const handleSelectMeal = (mealId) => {
    fetchMealDetails(mealId);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Meal Ideas</h2>

      {meals === null && (
        <p className="text-2xl">Select an item to see meal ideas</p>
      )}
      {meals && meals.length === 0 && (
        <p className="text-2xl">No meal ideas found for {ingredient}</p>
      )}
      {meals && meals.length > 0 && (
        <div>
          <p className="text-2xl">
            Here are some meal ideas using {ingredient}
          </p>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="list-none bg-slate-900 hover:bg-orange-600 w-[30rem] mb-2 p-2 font-bold text-xl"
                onClick={() => handleSelectMeal(meal.idMeal)}
              >
                {meal.strMeal}
                {mealDetails && mealDetails.idMeal === meal.idMeal && (
                  <div className="text-gray-500 text-base font-normal">
                    <p className="pl-5">Ingredients needed:</p>
                    {Array.from({ length: 20 }, (_, i) => i + 1)
                      .map((index) => ({
                        ingredient: mealDetails[`strIngredient${index}`],
                        measure: mealDetails[`strMeasure${index}`],
                      }))
                      .filter(
                        (item) =>
                          item.ingredient && item.ingredient.trim() !== ""
                      )
                      .map((item, index) => (
                        <p key={index} className="text-smp pl-10">
                          {item.measure} {item.ingredient}
                        </p>
                      ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
