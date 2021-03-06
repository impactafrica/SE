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
import SigninPage from "views/LoginPage/SigninPage.js";
import Modules from "views/Modules/modules";
import ModulesList from "views/Modules/modules_list";
import MarketType from "views/Modules/ReadMore/Segmentation/market_type";
import ModuleItem from "views/Modules/module_item";
import ModuleOneLanding from "views/Modules/Module1/landing";
import ModuleOneItem from "views/Modules/Module1/modules";
import MarketTypes from "views/Modules/Module1/module_item";
import Question1 from "views/Modules/Module1/question1";
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
      <Route path="/signin-page" component={SigninPage} />
      <Route path="/modules" component={Modules} />
      <Route path="/modules_list" component={ModulesList} />
      <Route path="/module1" component={ModuleOneLanding} />
      <Route path="/module1_item" component={ModuleOneItem} />
      <Route path="/startup_register" component={RegisterStartup} />
      <Route path="/module_item" component={ModuleItem} />
      <Route path="/segment_que" component={Question1} />
      <Route path="/components" component={Components} />
      <Route path="/market_type" component={MarketType} />
      <Route path="/market_types" component={MarketTypes} />
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
