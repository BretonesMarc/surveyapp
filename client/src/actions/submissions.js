import * as api from '../api';

export const getSubmissions = () => async (dispatch) => {

    try {
        const { data } = await api.fetchSubmissions();
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);        
    }


}