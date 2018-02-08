import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AllPuppies from './AllPuppies';
import SinglePuppy from './SinglePuppy';

const Main = () => (
  <div className="flex-container">
    <div className="jumbotron">
      <Router>
        <Switch>
          <Route exact path="/puppies" component={AllPuppies} />
          <Route path="/puppies/:puppyId" component={SinglePuppy} />
          <Route component={AllPuppies} />
        </Switch>
      </Router>
    </div>
  </div>
);

export default Main;
