import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/media_query/media_query.scss";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Career from "./pages/career/career";
import Team from "./pages/team/team";
import ContactUs from "./pages/contactUs/contactUs";
import { Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/careers" component={Career} />
      <Route path="/team" component={Team} />
      <Route path="/contact-us" component={ContactUs} />
    </div>
  );
}

export default App;
