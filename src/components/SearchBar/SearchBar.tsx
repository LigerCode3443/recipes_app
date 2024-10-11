import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data.query);
    reset();
  };

  return (
    <div className="p-5 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("query")}
          placeholder="Search..."
          className="rounded-lg p-2 border-blue-900 border-2"
        />
      </form>
    </div>
  );
};
export default SearchBar;
