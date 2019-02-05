import React, { Component } from 'react';
import Login from './login/containers/login'
import Nav from './nav/components/nav'
import Grid from '@material-ui/core/Grid';

import './App.css';

class App extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} md={12}>
          <Nav></Nav>
        </Grid>
      
        <Grid item xs={12} md={4} />

        <Grid item xs={12} md={4}>
          <Login/>
        </Grid>

        <Grid item xs={12} md={4} />
      </Grid>
    );
  }
}

export default App;
