import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Navigation, Footer, Home, LabReports, PatientSearch, PCPMessages, Resources } from "./components";
import './scss/style.scss';

function App(){
  return (
    <div className="App">
      <a id="top"></a>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/lab_reports" exact component={() => <LabReports />} />
          <Route path="/patient_search" exact component={() => <PatientSearch />} />
          <Route path="/pcp_messages" exact component={() => <PCPMessages />} />
          <Route path="/resources" exact component={() => <Resources />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;