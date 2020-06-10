import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import mainImage from '../../Content/main.png';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import {connect} from 'react-redux';
import {setAlgorithmValues,setSearchValues,switchSearchClick} from '../../redux/search/search.action';
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginTop:"30px"
  },
  media:{
      height:"20rem",
  },
  searchField:{
      maxWidth:"100%",
      width:"100%",
  }
});

const SearchBar=({setSearchValues,setAlgorithmValues,switchSearchClick  })=> {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         className={classes.media}
          component="img"
          alt="Do-ogle"
          height="140"
          image={mainImage}
          title="Do-ogle"
        />
      
      </CardActionArea>
      <CardActions>
        <Grid container spacing={1}>
            <RadioGroup aria-label="algorithm" name="algorithm"  onChange={e=>setAlgorithmValues(e.target.value)}>
                <FormControlLabel value="bm" control={<Radio />} label="Boolean Model" />
                <FormControlLabel value="vm" control={<Radio />} label="Vector Model" />
                <FormControlLabel value="ebm" control={<Radio />} label="Extended Boolean Model" />
            </RadioGroup>
            <Grid item xs={10}>
                <TextField size="medium" id="outlined-search" label="Search field" onChange={e=>setSearchValues(e.target.value )} type="search" variant="outlined" className={classes.searchField}/>
            </Grid>
            <Grid item xs={2}>
                <Button size="large" color="primary" type="button" variant="outlined" onClick={()=>{switchSearchClick(true)}}>
                    search
                </Button>   
            </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
const mapDispatchToProps=dispatch=>({
  setSearchValues:forSearch=>dispatch(setSearchValues(forSearch)),
  setAlgorithmValues :algorithm=>dispatch(setAlgorithmValues(algorithm)),
  switchSearchClick:searchClick=>dispatch(switchSearchClick(searchClick)),
})
export default connect(null,mapDispatchToProps)(SearchBar);