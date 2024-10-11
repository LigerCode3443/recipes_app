import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/recipes/selectors";
import { getFilterCategoric } from "../../redux/recipes/operations";

const SearchCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  return (
    <ul className="flex gap-4 mb-8">
      {categories.map((categoric) => (
        <li
          key={categoric.idCategory}
          className="flex flex-col justify-between items-center border-2 p-1 rounded-md border-purple-800 cursor-pointer hover:bg-slate-200"
          onClick={() => {
            dispatch(getFilterCategoric(categoric.strCategory));
          }}
        >
          <img
            src={categoric.strCategoryThumb}
            alt={categoric.strCategory}
            className="max-h-[50px] h-max"
          />
          <p className="text-md font-bold">{categoric.strCategory}</p>
        </li>
      ))}
    </ul>
  );
};
export default SearchCategories;
