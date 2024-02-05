import { Route, Routes as Router } from "react-router-dom";
import Portfolio from "../../pages/Portfolio";
import { RouteList } from "../../constants/route";
import Footer from "../sections/footer/Footer";
import HomePage from "../../pages/HomePage";

function AppRoutes() {
  return (
    <>
      <Router>
        <Route path={RouteList.HOME}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={RouteList.PORTFOLIO} element={<Portfolio />} />

        {/* <Route path="*" element={<Error />} /> */}
      </Router>

      <Footer />
    </>
  );
}

export default AppRoutes;
