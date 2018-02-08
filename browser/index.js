'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './components/all-puppies/AllPuppiesContainer';
import SinglePuppyContainer from './components/single-puppy/SinglePuppyContainer';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Router>
          <Switch>
            <Route exact path="/puppies" component={AllPuppiesContainer} />
            <Route path="/puppies/:puppyId" component={SinglePuppyContainer} />
            <Route component={AllPuppiesContainer} />
          </Switch>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
