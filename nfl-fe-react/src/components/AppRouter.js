import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResultsPage from "../results-page/results-page.js";
// import DropDownA from "./DropDownA.js";
// import DropDownB from "./DropDownB.js";
import DropDownForms from "./DropDownForms.js";
// import Search from "./SearchBar.js";

export default function AppRouter() {
  return (
    <Router>
      <Route path="/results" component={ResultsPage} />
      {/* <Route path="/search" component={Search} /> */}

      {/* <Route exact path="/" component={DropDownA} />
      <hr />
      <Route exact path="/" component={DropDownB} />
      <hr /> */}
      <Route exact path="/" component={DropDownForms} />
    </Router>
  );
}
