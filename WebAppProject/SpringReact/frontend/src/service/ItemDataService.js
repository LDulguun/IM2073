import axios from 'axios'

const ESHOP_API_URL = 'http://localhost:8080/api'

class ItemDataService {

    retrieveAllItems() {
        return axios.get(`${ESHOP_API_URL}/search`);
    }

    searchItems(keyword) {
        return axios.get(`${ESHOP_API_URL}/search/${keyword}`);
    }

    retrieveCart() {
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart`);
    }

    retrieveOrders() {
        //console.log('executed service')
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/orders`);
    }

    addToCart(itemId, qty) {
        console.log('executed service' + itemId + qty )
        return axios.post(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart/add/${itemId}/${qty}`);
    }

    placeOrder(items) {
        //console.log('executed service')
        console.log(items);
        return axios.post(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/orders`, items);
    }

    removeFromCart(itemId) {
        console.log('executed service')
        return axios.get(`${ESHOP_API_URL}/${localStorage.getItem("sessionId")}/cart/remove/${itemId}`);
    }

}

export default new ItemDataService()