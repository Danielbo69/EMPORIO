import React, { Suspense } from "react";
import "./App.css";
import useNearScreen from "./hooks/useNearScreen";
import Spinner from "./components/spinner/Spinner";

const Router = React.lazy(() => import("./routes/Router"));

function App() {

  const { isNearScreen, fromRef } = useNearScreen({
    distance: "0px",
  });

  return (
    <div className="app" ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <Router /> : <Spinner />}
      </Suspense>
    </div>
  );
}

export default App;
