import "./App.css";
import Router from "./routes/Router";
import Spinner from './components/spinner/Spinner'

function App() {
  return (
    <div className="app">
      <Spinner />
      <Router />
    </div>
  );
}

export default App;
