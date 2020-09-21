import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Modules from "views/Modules/modules";
import MarketType from "views/Modules/ReadMore/Segmentation/market_type";
import ModuleItem from "views/Modules/module_item";
import RegisterStartup from "views/Startup/startup_register";
import Brainstorming from "views/Modules/ReadMore/Segmentation/brainstorming"
import Narrowing from "views/Modules/ReadMore/Segmentation/narrowing"
import PrimaryResearch from "views/Modules/ReadMore/Segmentation/primary_research"
import ChoosingBeachhead from "views/Modules/ReadMore/Beachhead/choosing_beachhead"
import TargetedMarket from "views/Modules/ReadMore/Beachhead/targeted_market"
import PrepareProcess from "views/Modules/ReadMore/Persona/prepare_process"
import BeachheadItem from "views/Modules/beachhead_item"
import PersonaItem from "views/Modules/persona_item"
import Segmenting from "views/Modules/ReadMore/Segmentation/segmenting"
import BeachheadDef from "views/Modules/ReadMore/Beachhead/beachhead_main"
import Onboarding from "views/Modules/onboarding"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/modules" component={Modules} />
      <Route path="/startup_register" component={RegisterStartup} />
      <Route path="/module_item" component={ModuleItem} />
      <Route path="/components" component={Components} />
      <Route path="/market_type" component={MarketType} />
      <Route path="/brainstorming" component={Brainstorming} />
      <Route path="/narrowing" component={Narrowing} />
      <Route path="/primary-research" component={PrimaryResearch} />
      <Route path="/choosing-beachhead" component={ChoosingBeachhead} />
      <Route path="/targeted-market" component={TargetedMarket} />
      <Route path="/prepare-process" component={PrepareProcess} />
      <Route path="/beachhead_item" component={BeachheadItem} />
      <Route path="/persona_item" component={PersonaItem} />
      <Route path="/segmenting" component={Segmenting} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/beachhead-def" component={BeachheadDef} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
