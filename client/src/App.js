import React from 'react';
import { Route, Switch} from "react-router-dom";
import About from './components/about/about.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`/:topicId`} component={About} />
        <Route path={`/`}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
