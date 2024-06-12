import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { RouterServiceReactRouter } from "../services/RouterService";
import { AuthServiceLogin } from "../services/AuthService";
import { LocalStorageServiceToken } from '../services/LocalStorageService';


export const AppRoutes = () => {

  const navigate = useNavigate()
  const routerService = new RouterServiceReactRouter(navigate)

  const authService = new AuthServiceLogin()

  const localStorageService = new LocalStorageServiceToken()

  return (
    <Routes>
      <Route path="/" element={<Login routerService={routerService} authService={authService} localStorageService={localStorageService}/>} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
