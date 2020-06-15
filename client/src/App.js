import React from 'react';
import { Route, Switch} from "react-router-dom";
import SignUp from './components/signup/signup.component.jsx';
import SignIn from './components/login/login.component.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`/sign-up`} component={SignUp} />
        <Route path={`/login`} component={SignIn} />
        <Route path={`/`}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
