export default (state = [],action)=>{
    switch(action.type){
        case 'FETCH_SPECIAL_DEALS':
            return action.payload;

        default : 
             return state;
    }
}