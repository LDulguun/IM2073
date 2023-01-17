import axios from 'axios'

const ESHOP_API_URL = 'https://starwars-eshop-backend.onrender.com/api'

class UserService {

    login(userInput) {
        //localStorage.setItem('sessionId', axios.get(`${ESHOP_API_URL}/login/${userInput.username}/${userInput.password}`));
        return axios.get(`${ESHOP_API_URL}/login/${userInput.username}/${userInput.password}`);
    }

    logout() {
        axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/logout`);
        localStorage.removeItem("sessionId");
        return true;
    }

    signup(user) {
        return axios.post(`${ESHOP_API_URL}/signup/${user.password}`, user);
    }

    getUserDetails() {
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/userdetails`);
    }

}

export default new UserService()