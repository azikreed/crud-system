import React from "react";
import "./App.css";
// import 'semantic-ui-css/semantic.min.css';
import Create from "./components/create/create";
import Read from "./components/read/read";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <h3>React Crud Operations</h3>
        </div>
        <Route exact path="/" component={Create} />
        <Route path="/read" component={Read} />
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Delete} />
      </div>
    </Router>
  );
}

export default App;