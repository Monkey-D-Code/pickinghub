export default (state = [],action)=>{
    switch(action.type){

        case 'FETCH_VARIANTS':
            console.log(state);
            return [...state,action.payload.data];
        
        default : 
             return state;
    }
}