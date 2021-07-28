import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';
import ItemRowCart from './ItemRowCart';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            items: [],
            totPrice: 0,
            message: null
        }
        //standard way of binding react component (any method in react component should be bounded to "this")
        this.refreshCourses = this.refreshCourses.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        // this.removeFromCartQty = this.removeFromCartQty.bind(this);
        this.updateTotPrice = this.updateTotPrice.bind(this);
    }

    //componentDidMount() method allows us to execute the React code when the component is
    //already placed in the DOM (Document Object Model). This method is called during the
    //Mounting phase of the React Life-cycle i.e after the component is rendered.
    componentDidMount() {
        //refreshCourses is called as soon as component is mounted
        //refreshCourses = refreshing items in cart
        this.refreshCourses();
    }

    refreshCourses() {
        ItemDataService.retrieveCart()
            .then(
            //use data from response and show it on component
            //we do so by adding courses to state of component(initialize in constructor above)
            //then update state from response data
                response => {
                    this.setState({items : response.data});
                }
            );
    }

    removeFromCart(itemId) {
        ItemDataService.removeFromCart(itemId).then(response => {this.refreshCourses()});
    }
    
    // removeFromCartQty(itemId, qty) {
    //     ItemDataService.removeFromCartQty(itemId, qty).then(response => {this.refreshCourses()});
    // }

    placeOrder() {
        ItemDataService.placeOrder(this.state.items).then(response => {this.refreshCourses()});
        toast.configure();
            toast.success(`Order Success! You have ordered:

            ${this.state.items.map(item => `${item.itemName} x ${item.qty}`).join("\r\n")}`, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
                });
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
                {/*displays message below header*/}
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div>
                    <div class="col-sm-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Unit Price</th>
                                <th>Stock</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                                <th>Update Quantity</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //loop around a list of items and define how each item should be displayed
                                Array.from(this.state.items).map(
                                    item =>
                                        //key is used to uniquely identify a row
                                        //use curly brackets to execute js code
                                        //ItemRowCart is component to dsiplay each row of items in the cart
                                         <ItemRowCart key = {item.itemId} item = {item} removeHandler = {this.removeFromCart} refreshCourses = {this.refreshCourses}/>
                                )
                            }
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a>Total Price: <br/>{this.updateTotPrice(this.state.items)}</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                    {/* <p align="right"> <a>Total Price: {this.updateTotPrice(this.state.items)}</a> </p> */}
                    <button className="btn btn-success" onClick={() => this.placeOrder()}>Place Order</button>
                </div>
            </div>
        )
    }
}

export default CartComponent;