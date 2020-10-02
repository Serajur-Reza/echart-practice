import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bar from './Components/Bar';
import Line from './Components/Line';
import Pie from './Components/Pie';

function App() {
  return (
    <div>

      <Router>
        <Switch>

          <Route path="/bar">
            <div className="App">
              <Bar/>
            </div>
          </Route>

          <Route path="/line">
            <div className="App">
              <Line/>
            </div>
          </Route>

          <Route path="/pie">
            <div className="App">
              <Pie/>
            </div>
          </Route>

          <Route exact path="/">
            <div className="App">
              <Link to="/bar">
                Go to Bar Chart
              </Link>
            </div>

            <div className="App">
              <Link to="/line">
                Go to Line Chart
              </Link>
            </div>

            <div className="App">
              <Link to="/pie">
                Go to Pie Chart
              </Link>
            </div>
            
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
