import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes/Recipes";
import Favorites from "./pages/Favorites/Favorites";
import InfoRecipe from "./pages/InfoRecipe/infoRecipe";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./redux/recipes/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes(""));
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recipes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<InfoRecipe />} />
          <Route path="*" element={<Recipes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
