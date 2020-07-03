import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './index.scss';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';



function App() {
  return (
    <Router>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*" from="">
              <NoMatch />
            </Route>
          </Switch>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>页面不存在</div>
  )
}





export default App;
