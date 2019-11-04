import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StarCanvas from './Stars';
import PortfolioGridLayout from './PortfolioGrid';
import Home from './landing/home';
import './main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/portfolio">
              <PortfolioGridLayout />
            </Route>
            <Route path="/starsTest">
              <StarCanvas />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
