import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import Login from "../pages/Login";
import MainLandingPage from "../pages/MainLandingPage";
import Signup from "../pages/Sigup";

class MainRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route  path="/" component={MainLandingPage} />
        
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MainRoute;
