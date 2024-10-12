import { useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipes/selectors";
import { objKey } from "../../helpers/arr";

const infoRecipe = () => {
  const recipe = useSelector(selectRecipe);
  const result = objKey(recipe);
  console.log(recipe.strYoutube);
  function convertToEmbedUrl(youtubeUrl) {
    const url = new URL(youtubeUrl);
    const videoId = url.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="flex gap-10 p-5">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-1/2 object-contain rounded-lg"
      />
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-2xl font-bold">{recipe.strMeal}</h2>
        <div className="flex gap-2">
          <div>
            {result.map((value, i) => (
              <p key={i}>{Object.keys(value)}:</p>
            ))}
          </div>
          <div>
            {result.map((item, i) => (
              <p key={i}>{Object.values(item)}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-center text-lg">Instructions</p>
          <p className="text-sm">{recipe.strInstructions}</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <p className="p-2 rounded-md bg-yellow-700 text-white font-bold ">
              Region: {recipe.strArea}
            </p>
            <p className="p-2 rounded-md bg-green-800 text-white font-bold ">
              Categoric: {recipe.strCategory}
            </p>
          </div>

          <iframe
            src={convertToEmbedUrl(recipe.strYoutube)}
            width="560"
            height="315"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default infoRecipe;
