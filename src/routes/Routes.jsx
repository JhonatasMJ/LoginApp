import { useContext } from "react";
import AppRoutes from "./AppRoutes.jsx";
import AuthRoutes from "./AuthRoutes.jsx";
import Auth from "../contexts/auth.jsx";

const Routes = () => {
  const {signed} = useContext(Auth)

  return <>{ signed ? <AuthRoutes /> : <AppRoutes />}</>;
};

export default Routes;
