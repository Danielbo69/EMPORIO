import "./App.css";
import Router from "./routes/Router";
import Spinner from './components/spinner/Spinner'
import { useState } from "react";

function App() {
  const [spinner, setSpinner] = useState(true)
  return (
    <div className="app">
      {spinner ? <Spinner setSpinner={setSpinner} /> : <Router />}
    </div>
  );
}

export default App;
