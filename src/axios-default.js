import axios from "axios"

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    } else {
        axios.defaults.headers.common['Authorization'] = token;
    }
}

export default setAuthToken;