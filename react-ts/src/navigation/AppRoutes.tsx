import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { RouterServiceReactRouter } from "../services/RouterService";


export const AppRoutes = () => {

  const navigate = useNavigate()
  const routerService = new RouterServiceReactRouter(navigate)

  return (
    <Routes>
      <Route path="/" element={<Login routerService={routerService} />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
