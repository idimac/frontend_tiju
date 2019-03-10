import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { verifyTokenWithAPI } from './actions/signIn.action.js';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom';



class App extends Component {
  componentWillMount(){
  }
  
  render() {
   
      return (
        <div className="App">
        TiJuArt shop in process...
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  isTokenAuthed: {}
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  verifyTokenWithAPI: verifyTokenWithAPI,
}, dispatch);

App = connect(
  mapStateToProps,
  matchDispatchToProps
)(App);

export default withRouter(App);

