import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectFavoritesRecipes } from "../../redux/recipes/selectors";
const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && "text-green-500");
};
const NavBar = () => {
  const favorites = useSelector(selectFavoritesRecipes);
  return (
    <header>
      <nav>
        <ul className="flex flex-row-reverse p-8 gap-5 text-2xl font-bold ">
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
    </header>
  );
};
export default NavBar;
