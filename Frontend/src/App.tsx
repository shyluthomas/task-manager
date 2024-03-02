import "./App.css";
import { useRoutes } from "react-router-dom";
import Routes from "./utils/routes";
function App() {
  const routes = useRoutes(Routes);
  return <>{routes}</>;
}

export default App;
