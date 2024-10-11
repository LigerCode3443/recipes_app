import { useEffect, useState } from "react";
import RecipesCard from "../RecipesCard/RecipesCard";

const RecipesList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(recipes?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = recipes?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {" "}
      <ul className="flex flex-wrap mx-auto gap-3 justify-center">
        {recipes ? (
          currentData.map((recipe) => (
            <RecipesCard recipe={recipe} key={recipe.idMeal} />
          ))
        ) : (
          <p className="text-center p-10 text-3xl ">Nothing found</p>
        )}
      </ul>
      <nav>
        <ul className="flex gap-2 p-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border-2 border-solid rounded-lg 
          ${
            currentPage === index + 1
              ? "border-green-500 bg-green-500 text-white"
              : "border-gray-700 bg-white text-gray-700"
          }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default RecipesList;
