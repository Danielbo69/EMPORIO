import { Routes, Route } from "react-router-dom";
import Views from "../views/Views";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Views />} />
      </Routes>
    </>
  );
}

export default Router;
