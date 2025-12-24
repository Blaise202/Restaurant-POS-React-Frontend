import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, Login } from "./pages";
import { Header } from "./components/include/Header";

function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth", "/login"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/orders"
          element={<Orders />}
        />
        <Route
          path="/tables"
          element={<Tables />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
