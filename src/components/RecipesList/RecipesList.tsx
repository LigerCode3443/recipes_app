import RecipesCard from "../RecipesCard/RecipesCard";

const RecipesList = ({ recipes }) => {
  return (
    <ul className="flex flex-wrap mx-auto gap-3">
      {recipes.map((recipe) => (
        <RecipesCard recipe={recipe} key={recipe.idMeal} />
      ))}
    </ul>
  );
};
export default RecipesList;
