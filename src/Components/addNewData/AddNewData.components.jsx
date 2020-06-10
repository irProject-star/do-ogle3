import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    mainPaper:{
        width:'100vw',
        
    },
    mainButton:{
        width:'100%',
    },
    question:{
        width:'90%',
        padding:'10px 5px',
        margin:'10px 5px',
        color:'darkblue',
       
  
    },
    answer:{
        width:'90%',
      padding:'10px 5px',
      margin:'10px 5px',
      color:'darkred',
      
  },
}));
const addData=(question,answer,setQuestion,setAnswer)=>event=>{
    event.preventDefault();
    const  url="https://irproject2020.pythonanywhere.com/addQuestion";

     fetch(url,
     {
         method: "POST",
         headers: {
            
             'Content-Type': 'application/json',
           },
         body: JSON.stringify({
             __q:question,
             __a:answer             
           })
     })
     setQuestion('');
     setAnswer('');
}
export default function AddNewData() {
  const classes = useStyles();
  const [question,setQuestion]=useState("");
  const [answer,setAnswer]=useState("");
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.mainPaper} >
        <form onSubmit= {addData(question,answer,setQuestion,setAnswer)}>
            <TextField className={classes.question}
                id="Question"
                label="Question"
                multiline
                rows={2}
                placeholder="Question"
                variant="outlined"
                value={question}
                onChange={e=>setQuestion(e.target.value)}
                />
             <Divider light/>
            <TextField className={classes.answer}
                id="Answer"
                label="Answer"
                multiline
                rows={4}
                placeholder="Answer"
                variant="outlined"
                value={answer}
                onChange={e=>setAnswer(e.target.value)}
                />
            <Divider light/>
            <Button  color="primary" startIcon={<AddCircleOutlineIcon   />} type="submit"   className={classes.mainButton} >
                    Add 
            </Button>
        </form>
      </Paper>
    </div>
  );
}