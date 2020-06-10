import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import logo from '../../Content/Logo.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
      textDecoration:'none',
      margin:"5px 10px",
      padding:"0px 5px",
      color:'black',
  },
  logoImage:{
    width:"12rem",
    height:"4rem",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" color="primary">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            <img className={classes.logoImage} src={logo} alt="test" /> 
          </Typography>
          <Link to="/"   className={classes.link}>
              Search
          </Link>
          <Link to="/Data"  className={classes.link}>
              DataSet
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}