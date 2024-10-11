import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchCategories from "../../components/SearchCategories/SearchCategories";
import { selectRecipes } from "../../redux/recipes/selectors";
import RecipesList from "../../components/RecipesList/RecipesList";

export const Recipes = () => {
  const recipes = useSelector(selectRecipes);
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchBar />
      <SearchCategories />
      <RecipesList recipes={recipes} />
    </div>
  );
};
export default Recipes;
