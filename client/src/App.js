import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Join, Chart} from "./component/"
const App = () =>  (
    <Router>
        <Route path="/" exact component={Join}></Route>
        <Route path="/chat" exact component={Chat}></Route>
    </Router>
);

export default App;
