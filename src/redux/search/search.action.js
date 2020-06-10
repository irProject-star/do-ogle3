export const setSearchValues=search=>({
    type:'Set_forSearch',
    payload:search
})
export const setAlgorithmValues=algorithm=>({
    type:'Set_algorithm',
    payload:algorithm
})
export const switchSearchClick=searchClick=>({
    type:'Switch_searchClick',
    payload:searchClick
})
export const setResult=result=>({
    type:'Set_result',
    payload:result
})
export const setStripedData=stripedData=>({
    type:'Set_StripedData',
    payload:stripedData
})