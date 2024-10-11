import { useSelector } from "react-redux";
import RecipesList from "../../components/RecipesList/RecipesList";
import { selectFavoritesRecipes } from "../../redux/recipes/selectors";

const Favorites = () => {
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  return (
    <div className="flex flex-col justify-center items-center">
      <RecipesList recipes={favoritesRecipes} />
    </div>
  );
};
export default Favorites;
