import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/media_query/media_query.scss";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Career from "./pages/career/career";
import Team from "./pages/team/team";
import ContactUs from "./pages/contactUs/contactUs";
import ArtVideoFrame from "./pages/work/artVideoFrame";
import { Route, Switch } from "react-router";
import Photography from "./pages/work/photography";
import SocialMediaManaging from "./pages/work/socialMediaManaging";
import ArtDesign from "./pages/work/artDesign";
import WebServices from "./pages/work/webServices";
import Exp from "./pages/exp";
import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/careers" component={Career} />
        <Route path="/team" component={Team} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/webSolutions" component={WebServices} />
        <Route path="/artVideoFrame" component={ArtVideoFrame} />
        <Route path="/artDesign" component={ArtDesign} />
        <Route path="/socialMedia" component={SocialMediaManaging} />
        <Route path="/photography" component={Photography} />
      </Switch>
    </div>
  );
}

export default App;
