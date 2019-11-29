import axios from 'axios';
import cookie from 'react-cookies';

const backendAPI =  axios.create({
    baseURL :  window.location.port === "3000" 
                ? "http://127.0.0.1:8000"
                : `${window.location.protocol}//${window.location.hostname}:${window.location.port}`,
    // baseURL :  'https://pickinghub.pythonanywhere.com',
    

    timeout : 5000,
    headers : {
        "X-CSRFToken" : cookie.load('csrftoken'),
    }
});

export default backendAPI;