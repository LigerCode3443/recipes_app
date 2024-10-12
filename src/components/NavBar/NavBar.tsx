import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
  selectFavoritesRecipes,
  selectFullRecipe,
} from "../../redux/recipes/selectors";
import { getRecipeByIdFavorites } from "../../redux/recipes/operations";
import { clearFullRecipes } from "../../redux/recipes/slice";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && "text-green-500");
};
const NavBar = () => {
  const favorites = useSelector(selectFavoritesRecipes);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleProduct = (favorites) => {
    dispatch(clearFullRecipes());
    favorites?.map((recipe) => {
      dispatch(getRecipeByIdFavorites(recipe.idMeal));
    });
  };

  return (
    <header className="flex justify-between items-center">
      <nav>
        <ul className="flex flex-row p-8 gap-5 text-2xl font-bold ">
          <li>
            <NavLink to="/" className={buildLinkClass}>
              RECIPES
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={buildLinkClass}>
              FAVORITE
            </NavLink>
          </li>
          {favorites.length ? (
            <span className="px-1 py-[2px] w-[35px] bg-green-500 rounded-[100%] flex items-center justify-center flex-col">
              {favorites.length}
            </span>
          ) : (
            ""
          )}
        </ul>
      </nav>
      {location.pathname === "/favorites" && favorites.length > 1 ? (
        <button
          className="p-3 px-10 bg-green-500 mr-8 text-lg font-bold rounded-md hover:bg-green-400 hover:text-white"
          onClick={() => {
            handleProduct(favorites);
          }}
        >
          To unite
        </button>
      ) : (
        ""
      )}
    </header>
  );
};
export default NavBar;
