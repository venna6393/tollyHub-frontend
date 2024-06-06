import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import SubmitStory from "./components/Story/SubmitStory";
import SubmitMusic from "./components/Music/SubmitMusic";
import ApplyForRole from "./components/Actor/ApplyForRole";
import ApplyForProject from "./components/Director/ApplyForProject";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/submit-story" component={SubmitStory} />
          <Route path="/submit-music" component={SubmitMusic} />
          <Route path="/apply-role" component={ApplyForRole} />
          <Route path="/apply-project" component={ApplyForProject} />
          <Route path="/" exact>
            <h1>Welcome to TollyHub</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
