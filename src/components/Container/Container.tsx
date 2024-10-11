import s from "./Container.module.css";

const Container = ({ children }) => {
  return <div className="w-[1220px] px-4 mx-auto">{children}</div>;
};
export default Container;
