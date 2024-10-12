import { useSelector } from "react-redux";
import RecipesList from "../../components/RecipesList/RecipesList";
import { selectFavoritesRecipes } from "../../redux/recipes/selectors";
import FullIngrd from "../../components/FullIngrd/FullIngrd";

const Favorites = ({ sectionRef }) => {
  const favoritesRecipes = useSelector(selectFavoritesRecipes);

  return (
    <div className="flex flex-col justify-center items-center">
      <RecipesList recipes={favoritesRecipes} />
      <FullIngrd sectionRef={sectionRef} />
    </div>
  );
};
export default Favorites;
