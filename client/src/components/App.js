import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


// const surveys = () => {
//   return (
//       <h2> {'surveys'.toUpperCase()}</h2>
//   )
// };


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <div className="container">
          <BrowserRouter>
            <div>
              <Header/>
              <Route path="/" component={Landing} exact={true}/>
              <Route path="/surveys" component={Dashboard} exact={true}/>
              <Route path="/surveys/new" component={SurveyNew} exact={true}/>
            </div>
          </BrowserRouter>
        </div>
    )
  }
}

export default connect(null, actions)(App);