import React,{ useState} from 'react';
import AddNewData from '../../Components/addNewData/AddNewData.components';
import ShowData from '../../Components/showData/ShowData.Components';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        marginTop:'20px',
    },
    mainButton:{
        width:'100%',
        margin:'10px 0px',
        padding:'5px 5px',
    },

}))
const fetchData=(allData,setAllData,setShowDataClicked)=>{
    setShowDataClicked(false);
    fetch('http://irproject2020.pythonanywhere.com/query-all')
    .then(res=>{return res.json()})
    .then(data=>{console.log(data);setAllData(data)});
}

 function DataAddAndDelete({history}){
    const classes = useStyles();
        const  [allData,setAllData]=useState([]);
        const  [showDataClicked,setShowDataClicked]=useState(false);
       
        return(
            <div className={classes.root}>
                 <Container>
                    <AddNewData/>
                    <Button variant="contained" color="primary" onClick={function(){setShowDataClicked(true)}} className={classes.mainButton}>
                        getData
                    </Button>
                    {
                        showDataClicked===true?
                        fetchData(allData,setAllData,setShowDataClicked):
                        null
                     
                    }
                    {
                        Object.entries(allData).map(item=>{
                            
                            const x=Object.values(item)[1];
                        
                            return( <ShowData history={history} key={JSON.stringify(Object.values(item)[0])} id={JSON.stringify(Object.values(item)[0])} quest={JSON.stringify(Object.keys(x)[0])} ans={JSON.stringify(Object.values(x)[0])}/>)
                        }) 
                    }
                </Container>    
            </div>
        )

}
export default DataAddAndDelete;