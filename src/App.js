import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/media_query/media_query.scss";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Career from "./pages/career/career";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Career />
    </div>
  );
}

export default App;
