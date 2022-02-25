import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { DummyPage } from "./pages/dummy.page";
import { GridPage } from "./pages/grid.page";
import { HomePage } from "./pages/home.page";

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />}>
          <Route path="grid" element={<GridPage />} />
          <Route path="dummy" element={<DummyPage />} />
          <Route path="" element={<Navigate replace to="grid" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
