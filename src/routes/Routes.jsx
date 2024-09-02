import AppRoutes from "./AppRoutes.jsx";
import AuthRoutes from "./AuthRoutes.jsx";

const Routes = () => {
  const user = 'null';

  return <>{user ? <AuthRoutes /> : <AppRoutes />}</>;
};

export default Routes;
