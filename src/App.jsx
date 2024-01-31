import "./App.css";
import Router from "./routes/Router";
import Spinner from "./components/spinner/Spinner";
import { useState } from "react";

function App() {
  const [spinner, setSpinner] = useState(true);

  setTimeout(function () {
    setSpinner(false);
  }, 5000);

  if (!spinner) {
    return (
      <div className="app">
        <Router />
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default App;
