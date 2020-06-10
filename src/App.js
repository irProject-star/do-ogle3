import React from 'react';
import ButtonAppBar  from './Components/header/Header.Components';
import SearchPage from './Pages/searchPage/SearchPage.Components';
import {  createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import DataAddAndDelete from './Pages/dataAddAndDelete/DataAddAndDelete.Components';
import {Route,Switch} from  'react-router-dom';
import './App.css';


const theme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiAppBar: {
      // Name of the rule
      colorPrimary: {
        // Some CSS
        color:'black',
        backgroundColor: '#fffafa',
      },
    },
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
          <Switch>
             <Route exact path='/' component={SearchPage} /> 
             <Route exact path='/Data' component={DataAddAndDelete} /> 
          </Switch> 
      </ThemeProvider>        
    </div>
  );
}

export default App;
