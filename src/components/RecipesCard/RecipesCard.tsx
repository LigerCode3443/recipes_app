import { Link } from "react-router-dom";

const RecipesCard = ({ recipe }) => {
  return (
    <li className="p-2 shadow-2xl rounded-xl flex flex-col gap-2 ">
      <h2 className="text-xl font-bold text-center">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-60" />
      <div>
        <p>Categoric: {recipe.strCategory}</p>
        <p>Region: {recipe.strArea}</p>
      </div>
      <Link
        to={`/recipe/:${recipe.idMeal}`}
        className="p-2 bg-green-400 rounded-md border-1 border-black text-center font-bold hover:bg-green-300"
      >
        Recipes
      </Link>
    </li>
  );
};
export default RecipesCard;
