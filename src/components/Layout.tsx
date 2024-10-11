import { Outlet } from "react-router-dom";
import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";

const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};
export default Layout;
