import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/recipes/slice";
import { selectFavoritesRecipes } from "../../redux/recipes/selectors";
import { getRecipeById } from "../../redux/recipes/operations";
const RecipesCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavoritesRecipes);
  return (
    <li className="p-2 shadow-2xl rounded-xl flex flex-col gap-2 relative justify-between items-center w-[280px]">
      <h2 className="text-xl font-bold text-center w-2/3 ">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="" />
      <div>
        {recipe.strCategory ? <p>Categoric: {recipe.strCategory}</p> : ""}
        {recipe.strArea ? <p>Region: {recipe.strArea}</p> : ""}
      </div>
      <Link
        to={`/recipe/:${recipe.idMeal}`}
        className="p-2 bg-green-400 rounded-md border-1 border-black text-center font-bold hover:bg-green-300 w-[100%]"
        onClick={() => {
          dispatch(getRecipeById(recipe.idMeal));
        }}
      >
        Recipes
      </Link>
      <FaHeart
        color={
          favorite.some((item) => item.idMeal === recipe.idMeal)
            ? "rgb(74 222 128)"
            : "black"
        }
        className="absolute top-4 right-4 hover:opacity-55 cursor-pointer"
        onClick={() => {
          dispatch(toggleFavorite(recipe));
        }}
      />
    </li>
  );
};
export default RecipesCard;
