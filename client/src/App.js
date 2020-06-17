import React from 'react';
import { Route, Switch} from "react-router-dom";
import SignUp from './components/signup/signup.component.jsx';
import SignIn from './components/login/login.component.jsx';
import About from './components/about/about.jsx';
import './App.css';
import Auth from "./hoc/auth";
import NavBar from './components/NavBar/NavBar'

function App() {
    return ( 
        <div className="App">
        <NavBar/>
          <Switch>
            <Route path={`/login`} component={Auth(SignIn, false)} />
            <Route path={`/register`} component={Auth(SignUp, false)} />
            <Route path={`/`} component={Auth(About, null)} />
          </Switch>
        </div>
    );
}

export default App;
