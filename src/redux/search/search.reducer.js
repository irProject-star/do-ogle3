const INITIAL_STATE={
    forSearch:"",
    algorithm:"bm",
    searchClick:false,
    stripedData:[],
    result:[]
}
const searchReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'Set_forSearch':
            return{
                    ...state,
                    forSearch:action.payload
            }
        case 'Set_algorithm':
            return{
                ...state,
                algorithm:action.payload
        }
        case 'Set_result':
            return{
                ...state,
                result:action.payload
        }
        case 'Set_StripedData':
            return{
                ...state,
                stripedData:action.payload
        }
        case 'Switch_searchClick':
            return{
                ...state,
                searchClick:action.payload
            }
        default:
            return state;
    }
}
export default searchReducer;