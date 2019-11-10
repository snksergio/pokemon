import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import Main from './containers/Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Main />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
