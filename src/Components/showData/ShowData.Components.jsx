import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        margin: theme.spacing(1),
       
      },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '90%',
      },
  },
  mainPaper:{
        width:'100vw',
        
  },
  mainButton:{
      width:'100%',
  },
  question:{
      padding:'10px 5px',
      margin:'10px 5px',
      color:'darkblue',
      backgroundColor:'whitesmoke',

  },
  answer:{
    padding:'10px 5px',
    margin:'10px 5px',
    color:'darkred',
    backgroundColor:'whitesmoke',
},
}));
const delelteitem=(id,history)=>{
  var striID='';
  for(var i in id)
    if(id[i]!=="\"")
      striID+=id[i];
  const intId=parseInt(striID,10);

  const url='https://irproject2020.pythonanywhere.com/removedata';
  fetch(url,   {
    method: "POST",
    headers: {
    
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({
        __q:intId,             
      })
}).then(res=>{console.log(res);alert("Deleted")
        history.push('/')});
}
export default function AddNewData({quest,ans,id,history}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Paper elevation={3} className={classes.mainPaper} >
            <Paper elevation={1} className={classes.question}> 
              <Typography variant="h6">{id}</Typography>
                <Typography variant="h4" component="span" >
                   {quest}
                </Typography>
            </Paper>
            <Divider light/>
            <Paper elevation={1} className={classes.answer}> 
                <Typography variant="h6" component="span" >
                   {ans}
                </Typography>
            </Paper>
             <Divider />
             <Button  color="secondary" startIcon={<DeleteOutlineIcon />}  className={classes.mainButton} onClick={function(){delelteitem(id,history)} }>
                Delete 
            </Button>
       </Paper>
      </div>
    );
  }