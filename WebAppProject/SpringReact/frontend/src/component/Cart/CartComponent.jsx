import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';
import ItemRowCart from './ItemRowCart';

class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            items: [],
            totPrice: 0,
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.updateTotPrice = this.updateTotPrice.bind(this);
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        ItemDataService.retrieveCart()
            .then(
                response => {
                    this.setState({items : response.data});
                }
            );
    }

    removeFromCart(itemId) {
        ItemDataService.removeFromCart(itemId).then(response => {this.refreshCourses()});
    }

    placeOrder() {
        ItemDataService.placeOrder(this.state.items).then(response => {this.refreshCourses()});
    }

    updateTotPrice(items) {
        var result = 0;
        var item;
        for (item of this.state.items) {
            result += item.price * item.qty;
        }
        if (result == 0) {
            return 0;
        }
        return Math.round((result + Number.EPSILON) * 100)/100;
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <h3>My Cart</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Unit Price</th>
                                <th>Stock</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from(this.state.items).map(
                                    item =>
                                         <ItemRowCart key = {item.itemId} item = {item} removeHandler = {this.removeFromCart} refreshCourses = {this.refreshCourses}/>
                                )
                            }
                        </tbody>
                    </table>
                    <p align="right"> <a>Total Price: {this.updateTotPrice(this.state.items)}</a> </p>
                    <button className="btn btn-success" onClick={() => this.placeOrder()}>Place Order</button>
                </div>
            </div>
        )
    }
}

export default CartComponent;