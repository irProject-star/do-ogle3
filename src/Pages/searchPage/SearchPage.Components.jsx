import React from 'react';
import {connect} from 'react-redux';
import SearchBar from '../../Components/searchBar/SearchBar.Components';
import {switchSearchClick,setResult,setStripedData} from '../../redux/search/search.action';
import Grid from '@material-ui/core/Grid';
import Highlighter from "react-highlight-words";
import SearchResult from '../../Components/searchResult/SearchResult.Components'

class SearchPage extends React.Component{
   
    searchResult=()=>{
       
        this.getStripDate();
        const  url="http://irproject2020.pythonanywhere.com/"+this.props.algorithm;
       console.log(url);
       
       this.props.switchSearchClick({searchClick:false});
        fetch(url,
        {
            method: "POST",
            headers: {
               
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                que: this.props.forSearch,
                
              })
        })
        .then(res=>{ return res.json(); })
        .then(data=>{
             this.props.setResult( data);
             console.log(this.props.result)
             })    
    }
    getStripDate=()=>{
        const  url="http://irproject2020.pythonanywhere.com/stripdata";
        this.props.switchSearchClick({searchClick:false});
        fetch(url,
        {
            method: "POST",
            headers: {
               
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                que: this.props.forSearch,
                
              })
        })
        .then(res=>{ return res.json(); })
        .then(data=>{
             this.props.setStripedData( data);
             console.log(this.props.stripedData)
             })    
    }
    render()
    {
        return(
           <div style={{flexGrow:1}}>
                 <Grid container spacing={3}>
                     <Grid item xs={3}/>
                    <Grid item xs={6} >
                        <SearchBar />
                    </Grid>
                    <Grid item xs={6}>
                        {this.forSearch}<br/>
                        {this.algorithm}
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {
                       this.props.searchClick === true ?
                       this.searchResult() :
                       null
                    }
                   {
                     this.props.result===[] ?
                     null:
                      Object.values(this.props.result).map((value)=>{
                         return( <Grid item xs={12}>
                             <SearchResult 

                              qustion={ <Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={this.props.stripedData}
                                autoEscape={true}
                                textToHighlight={JSON.stringify(Object.keys(value)[0])}
                              />}
                              answer={ <Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={this.props.stripedData}
                                autoEscape={true}
                                textToHighlight={JSON.stringify(Object.values(value)[0])}
                              />}
                              />
                            </Grid>)
                        
                      })
                   }
                </Grid>
           </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
 
    switchSearchClick:searchClick=>dispatch(switchSearchClick(searchClick)),
    setResult:result=>dispatch(setResult(result)),
    setStripedData:stripedData=>dispatch(setStripedData(stripedData)),
  })
const mapStateToProps=state=>({
    forSearch:state.search.forSearch,
    algorithm:state.search.algorithm,
    searchClick:state.search.searchClick,
    stripedData:state.search.stripedData,
    result:state.search.result,
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);