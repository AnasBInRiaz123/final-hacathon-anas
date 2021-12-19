import React from 'react';
import LoginPage from './pages/LoginPage'
import Admin from './pages/Admin'
import Requests from './pages/Requests';
import Branch from './pages/BranchManagerTab';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckRequest from './pages/CheckRequest';
// import CheckRequest from './pages/CheckRequest';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/requests" component={Requests}></Route>
        <Route exact path="/checkrequest" component={CheckRequest}></Route>
        <Route exact path="/branchTab" component={Branch}></Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
