import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">RECIPES</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">FAVORITE</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
