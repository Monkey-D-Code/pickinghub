import axios from 'axios';

export const fetchSpecialDeals = (url)=>{
   return async (dispatch,getState)=> {
        const response = await axios.get(url);
        dispatch({
            type:'FETCH_SPECIAL_DEALS',
            payload : response,
        });
   }
}