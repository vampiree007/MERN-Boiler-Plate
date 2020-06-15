import axios from 'axios';
import { } from './user.selectors';

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

export const loginUser = (dataToSubmit) => {
    const request = axios.post('/api/v1/users/login', dataToSubmit)
    .then(response => response.data)

    return({
        type: 'LOGIN_USER',
        payload: request
    })
    
}

//function is called and payload is passed into function parameter
//type is already set matching with user.reducer switch.case.value...