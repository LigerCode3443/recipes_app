import { useDispatch, useSelector } from "react-redux";
import { selectFullRecipe } from "../../redux/recipes/selectors";
import { objKey, mergeObjectsFromArray } from "../../helpers/arr";

const FullIngrd = () => {
  const full = useSelector(selectFullRecipe);

  const dispatch = useDispatch();
  const finishResult = full.flatMap((item) => {
    const result = objKey(item);

    return result;
  });

  const result = mergeObjectsFromArray(finishResult);

  return (
    <div className="mt-20 shadow-2xl w-full h-1/4 p-5 rounded-xl">
      <div className="relative">
        <div>
          <h2 className="text-center font-mono text-2xl">
            All ingredients from these recipes:
          </h2>
          <div className="flex gap-3 justify-center">
            {full.map((item, i) => (
              <p key={i}>{item.strMeal},</p>
            ))}
          </div>
        </div>
        <button className="p-3 px-10 bg-green-500  text-lg font-bold rounded-md hover:bg-green-400 hover:text-white absolute top-0 right-0">
          Clear
        </button>
      </div>
      <div className="flex flex-wrap">
        {Object.entries(result).map(([key, value]) => (
          <div key={key} className="flex gap-3 w-1/3">
            <strong>{key}:</strong>
            <p>{Array.isArray(value) ? value.join(", ") : value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FullIngrd;
