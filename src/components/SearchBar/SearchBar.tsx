import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getRecipes } from "../../redux/recipes/operations";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        dispatch(getRecipes(query));
        setQuery("");
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [query, dispatch]);

  return (
    <div className="p-5 flex justify-center items-center">
      <input
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="rounded-lg p-2 border-blue-900 border-2"
      />
    </div>
  );
};

export default SearchBar;
