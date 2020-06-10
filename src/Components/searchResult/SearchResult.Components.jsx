import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',margin:'10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    
  },
  area:{
    backgroundColor:'rgba(220,209,209,0.5)',
  }
}));

export default function SearchResult(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.area}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.qustion}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           {props.answer}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      )
     } 