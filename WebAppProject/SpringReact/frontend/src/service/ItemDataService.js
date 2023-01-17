//To call the REST API in springboot we would need to use a framework called axios
//note the get and post requests
import axios from 'axios'

const ESHOP_API_URL = 'https://starwars-eshop-backend.onrender.com/api'

class ItemDataService {

    retrieveAllItems() {
        return axios.get(`${ESHOP_API_URL}/search`);
    }
    // searchItems(keyword) {
    //     return axios.get(`${ESHOP_API_URL}/search/${keyword}`);
    // }
    searchItems(keyword) {
        return new Promise((resolve, reject) => {
            axios.get(`${ESHOP_API_URL}/search/${keyword}`)
                .then(response => resolve(response))
                .catch(error => reject(error))
        });
    }

    retrieveCart() {
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart`);
    }

    retrieveOrders() {
        //console.log('executed service')
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/orders`);
    }

    addToCart(itemId, qty) {
        console.log('executed service' + itemId + qty)
        return axios.post(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart/add/${itemId}/${qty}`);
    }

    placeOrder(items) {
        //console.log('executed service')
        console.log(items);
        return axios.post(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/orders`, items);
    }

    removeFromCart(itemId) {
        console.log('executed service' + itemId)
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart/remove/${itemId}`);
    }

    removeFromCartQty(itemId, qty) {
        console.log('executed service' + itemId + qty)
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart/remove/${itemId}/${qty}`);
    }

}

export default new ItemDataService()