import FontTest from "./component/FontTextpage";
import Navbar from "./component/Navbar";
import AppRoutes from "./route/AppRoute";
import Task from "./task";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNvbar = location.pathname.startsWith("/product")||
  location.pathname.startsWith("/checkout")||
  location.pathname.startsWith("/login")||
  location.pathname.startsWith("/register");
  
  return (
    <>
      {!hideNvbar && <Navbar/>}
      <AppRoutes />
      
      
    </>
  );
}

export default App;